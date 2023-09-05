<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function verify(LoginRequest $request)
    {
        $user = User::query()
            ->where('name', $request->validated('name'))
            ->first();

        if (!Hash::check($request->validated('password'), $user->password)) {
            return back()->withErrors([
                'password' => 'The provided credentials do not match our records.',
            ]);
        }

        Auth::login($user);
        $request->session()->regenerate();

        return redirect('/dashboard');
    }

    public function login()
    {
        return Inertia::render('Auth/Login');
    }
}
