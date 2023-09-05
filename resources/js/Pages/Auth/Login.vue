<script>
import NavLink from "@/Components/NavLink.vue";

export default {
    components: {NavLink},
    layout: null
}
</script>

<script setup>
import {useForm} from "@inertiajs/vue3";
import {createToaster} from "@meforma/vue-toaster";

const form = useForm({
    name: "",
    password: ""
})
const toaster = createToaster({ /* options */});

const handleSubmit = () => {
    form.post('/login', {
        onSuccess: () => {
            toaster.success('Successfully logged in')
        },
    })
}
</script>

<template>
    <div id="page-container" class="main-content-boxed">
        <main id="main-container">
            <div class="bg-image" style="background-image: url('assets/media/photos/photo34@2x.jpg');">
                <div class="row mx-0 bg-black-50">
                    <div class=" hero-static col-md-6 col-xl-8 d-none d-md-flex align-items-md-end">
                        <div class="p-4">
                            <p class="text-white-75 fw-medium">
                                Copyright © <span class="js-year-copy-enabled" data-toggle="year-copy">2023</span>
                            </p>
                        </div>
                    </div>
                    <div class="hero-static col-md-6 col-xl-4 d-flex align-items-center bg-body-extra-light">
                        <div class="content content-full">
                            <!-- Header -->
                            <div class="px-4 py-2 mb-4">
                                <NavLink class="link-fx fw-bold" href="#">
                                    <i class="fa fa-fire"></i>
                                    <span class="fs-4 text-body-color">Admin</span><span class="fs-4">Panel</span>
                                </NavLink>
                                <h1 class="h3 fw-bold mt-4 mb-2">Welcome to Your Dashboard</h1>
                                <h2 class="h5 fw-medium text-muted mb-0">Please sign in</h2>
                            </div>
                            <!-- END Header -->

                            <form
                                class="js-validation-signin px-4"
                            >
                                <div class="form-floating mb-4">
                                    <input
                                        id="login-username"
                                        v-model="form.name"
                                        class="form-control"
                                        placeholder="Enter your username"
                                        type="text">
                                    <label class="form-label" for="login-username">Username</label>
                                    <div v-if="form.errors.name" class="text-red-500 text-sm">{{
                                            form.errors.name
                                        }}
                                    </div>
                                </div>
                                <div class="form-floating mb-4">
                                    <input
                                        id="login-password"
                                        v-model="form.password"
                                        class="form-control"
                                        placeholder="Enter your password"
                                        type="password">
                                    <label class="form-label" for="login-password">Password</label>
                                    <div v-if="form.errors.password" class="text-danger">{{
                                            form.errors.password
                                        }}
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <div class="form-check">
                                        <input id="login-remember-me" checked="" class="form-check-input"
                                               type="checkbox" value="">
                                        <label class="form-check-label" for="login-remember-me">Remember Me</label>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <button
                                        class="btn btn-lg btn-alt-primary fw-semibold"
                                        type="button"
                                        @click.prevent="handleSubmit">
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>

</style>
