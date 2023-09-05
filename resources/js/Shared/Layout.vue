<script setup>
import NavLink from "@/Components/NavLink.vue";
import {reactive, ref} from "vue";

const sideBar = ref(true);
const toggleDark = ref(true);
const shouldOpen = ref(false);
const userDropdown = ref(false);
const userNotifications = ref(false);
const pageContainerClass = reactive({
    'sidebar-o': sideBar,
    'page-header-dark dark-mode': toggleDark
})
</script>

<template>
    <!-- Page Container -->
    <div id="page-container"
         :class="pageContainerClass"
         class="enable-page-overlay side-trans-enabled main-content-narrow page-header-fixed sidebar-dark side-scroll ">
        <div id="page-overlay"></div>
        <!-- Sidebar -->
        <nav id="sidebar">
            <!-- Sidebar Content -->
            <div class="sidebar-content">
                <!-- Side Header -->
                <div class="content-header justify-content-lg-center">
                    <!-- Logo -->
                    <div>
              <span class="smini-visible fw-bold tracking-wide fs-lg">
                A<span class="text-primary">P</span>
              </span>
                        <a class="link-fx fw-bold tracking-wide mx-auto" href="index.html">
                <span class="smini-hidden">
                  <i class="fa fa-fire text-primary"></i>
                  <span class="fs-4 text-dual">Admin</span><span class="fs-4 text-primary">Panel</span>
                </span>
                        </a>
                    </div>
                    <!-- END Logo -->

                    <!-- Options -->
                    <div>
                        <!-- Close Sidebar, Visible only on mobile screens -->
                        <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                        <button class="btn btn-sm btn-alt-danger d-lg-none" data-action="sidebar_close"
                                data-toggle="layout"
                                type="button">
                            <i class="fa fa-fw fa-times"></i>
                        </button>
                        <!-- END Close Sidebar -->
                    </div>
                    <!-- END Options -->
                </div>
                <!-- END Side Header -->

                <!-- Sidebar Scrolling -->
                <div class="js-sidebar-scroll" data-simplebar="init">
                    <div class="simplebar-wrapper" style="margin: 0px;">
                        <div class="simplebar-height-auto-observer-wrapper">
                            <div class="simplebar-height-auto-observer"></div>
                        </div>
                        <div class="simplebar-mask">
                            <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                <div aria-label="scrollable content" class="simplebar-content-wrapper" role="region"
                                     style="height: 100%; overflow: hidden scroll;" tabindex="0">
                                    <div class="simplebar-content" style="padding: 0px;">
                                        <!-- Side User -->
                                        <div class="content-side content-side-user px-0 py-0">
                                            <!-- Visible only in mini mode -->
                                            <div class="smini-visible-block animated fadeIn px-3">
                                                <img alt=""
                                                     class="img-avatar img-avatar32"
                                                     src="assets/media/avatars/avatar15.jpg">
                                            </div>
                                            <!-- END Visible only in mini mode -->

                                            <!-- Visible only in normal mode -->
                                            <div class="smini-hidden text-center mx-auto">
                                                <a class="img-link" href="be_pages_generic_profile.html">
                                                    <img alt="" class="img-avatar"
                                                         src="assets/media/avatars/avatar15.jpg">
                                                </a>
                                                <ul class="list-inline mt-3 mb-0">
                                                    <li class="list-inline-item">
                                                        <a class="link-fx text-dual fs-sm fw-semibold text-uppercase"
                                                           href="be_pages_generic_profile.html">J. Smith</a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                                                        <button class="link-fx text-dual" data-action="dark_mode_toggle"
                                                                data-toggle="layout"
                                                                href="javascript:void(0)"
                                                                @click="toggleDark = !toggleDark">
                                                            <i class="fa fa-burn"></i>
                                                        </button>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a class="link-fx text-dual" href="op_auth_signin.html">
                                                            <i class="fa fa-sign-out-alt"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <!-- END Visible only in normal mode -->
                                        </div>
                                        <!-- END Side User -->

                                        <!-- Side Navigation -->
                                        <div class="content-side content-side-full">
                                            <ul class="nav-main">
                                                <li class="nav-main-item">
                                                    <NavLink class="nav-main-link" href="">
                                                        <i class="nav-main-link-icon fa fa-house-user"></i>
                                                        <span class="nav-main-link-name">Dashboard</span>
                                                    </NavLink>
                                                </li>
                                                <li class="nav-main-heading">Blocks</li>
                                                <li :class="{'open':shouldOpen}"
                                                    class="nav-main-item">
                                                    <a aria-expanded="false" aria-haspopup="true"
                                                       class="nav-main-link nav-main-link-submenu"
                                                       href="#"
                                                       @click="shouldOpen = !shouldOpen">
                                                        <i class="nav-main-link-icon fa fa-grip-vertical"></i>
                                                        <span class="nav-main-link-name">Blocks</span>
                                                    </a>
                                                    <ul class="nav-main-submenu">
                                                        <li class="nav-main-item">
                                                            <NavLink class="nav-main-link" href="#">
                                                                <span class="nav-main-link-name">Some Page</span>
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- END Side Navigation -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simplebar-placeholder" style="width: auto; height: 1344px;"></div>
                    </div>
                    <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                        <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                    </div>
                    <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                        <div class="simplebar-scrollbar"
                             style="height: 91px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
                    </div>
                </div>
                <!-- END Sidebar Scrolling -->
            </div>
            <!-- Sidebar Content -->
        </nav>
        <!-- END Sidebar -->

        <!-- Header -->
        <header id="page-header">
            <!-- Header Content -->
            <div class="content-header">
                <!-- Left Section -->
                <div class="space-x-1">
                    <!-- Toggle Sidebar -->
                    <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                    <button
                        class="btn btn-sm btn-alt-secondary" data-action="sidebar_toggle" data-toggle="layout"
                        type="button"
                        @click='sideBar = !sideBar'
                    >
                        <i class="fa fa-fw fa-bars"></i>
                    </button>
                    <!-- END Toggle Sidebar -->
                </div>
                <!-- END Left Section -->

                <!-- Right Section -->
                <div class="space-x-1">
                    <!-- User Dropdown -->
                    <div class="dropdown d-inline-block">
                        <button
                            id="page-header-user-dropdown"
                            :class="{'show':userDropdown}"
                            aria-expanded="false"
                            aria-haspopup="true"
                            class="btn btn-sm btn-alt-secondary"
                            data-bs-toggle="dropdown"
                            type="button"
                            @click="userDropdown = !userDropdown">
                            <i class="fa fa-user d-sm-none"></i>
                            <span class="d-none d-sm-inline-block fw-semibold">J. Smith</span>
                            <i class="fa fa-angle-down opacity-50 ms-1"></i>
                        </button>
                        <div :class="{'show':userDropdown}"
                             aria-labelledby="page-header-user-dropdown"
                             class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0">
                            <div class="px-2 py-3 bg-body-light rounded-top">
                                <h5 class="h6 text-center mb-0">
                                    John Smith
                                </h5>
                            </div>
                            <div class="p-2">
                                <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1"
                                   href="be_pages_generic_profile.html">
                                    <span>Profile</span>
                                    <i class="fa fa-fw fa-user opacity-25"></i>
                                </a>
                                <a class="dropdown-item d-flex align-items-center justify-content-between"
                                   href="be_pages_generic_inbox.html">
                                    <span>Inbox</span>
                                    <i class="fa fa-fw fa-envelope-open opacity-25"></i>
                                </a>
                                <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1"
                                   href="be_pages_generic_invoice.html">
                                    <span>Invoices</span>
                                    <i class="fa fa-fw fa-file opacity-25"></i>
                                </a>
                                <div class="dropdown-divider"></div>

                                <!-- Toggle Side Overlay -->
                                <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                                <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1"
                                   data-action="side_overlay_toggle" data-toggle="layout" href="javascript:void(0)">
                                    <span>Settings</span>
                                    <i class="fa fa-fw fa-wrench opacity-25"></i>
                                </a>
                                <!-- END Side Overlay -->

                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1"
                                   href="op_auth_signin.html">
                                    <span>Sign Out</span>
                                    <i class="fa fa-fw fa-sign-out-alt opacity-25"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- END User Dropdown -->

                    <!-- Notifications -->
                    <div class="dropdown d-inline-block">
                        <button id="page-header-notifications"
                                :class="{'show':userNotifications}"
                                aria-expanded="false"
                                aria-haspopup="true" class="btn btn-sm btn-alt-secondary"
                                data-bs-toggle="dropdown" type="button" @click="userNotifications = !userNotifications">
                            <i class="fa fa-flag"></i>
                            <span class="text-primary">•</span>
                        </button>
                        <div :class="{'show':userNotifications}"
                             aria-labelledby="page-header-notifications"
                             class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                             style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 33px);">
                            <div class="px-2 py-3 bg-body-light rounded-top">
                                <h5 class="h6 text-center mb-0">
                                    Notifications
                                </h5>
                            </div>
                            <ul class="nav-items my-2 fs-sm">
                                <li>
                                    <NavLink class="text-dark d-flex py-2">
                                        <div class="flex-shrink-0 me-2 ms-3">
                                            <i class="fa fa-fw fa-check text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 pe-2">
                                            <p class="fw-medium mb-1">Some Notifications go here</p>
                                            <div class="text-muted">15 min ago</div>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                            <div class="p-2 bg-body-light rounded-bottom">
                                <a class="dropdown-item text-center mb-0" href="javascript:void(0)">
                                    <i class="fa fa-fw fa-flag opacity-50 me-1"></i> View All
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- END Notifications -->

                </div>
                <!-- END Right Section -->
            </div>
            <!-- END Header Content -->

        </header>
        <!-- END Header -->

        <!-- Main Container -->
        <main id="main-container">
            <!-- Page Content -->
            <div class="content">
                <slot/>
            </div>
            <!-- END Page Content -->
        </main>
        <!-- END Main Container -->

        <!-- Footer -->
        <!-- END Footer -->
    </div>
    <!-- END Page Container -->

</template>

<style scoped>

</style>
