<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TestController extends Controller
{
    public function test()
    {
        return Inertia::render('Home/Index');
    }
}
