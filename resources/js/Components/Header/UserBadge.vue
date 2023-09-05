<script setup>

import NavLink from "@/Components/NavLink.vue";
import {ref} from "vue";

const show = ref(false)

</script>

<template>
  <div class="header-left">
    <button class="bg-gray-200 px-3 py-2 font-bold rounded" @click="show = !show">{{
        $page.props.auth.user.full_name ?? $page.props.auth.user.phone
      }}
      <i class="fa fa-angle-down ml-4"></i>
    </button>
    <div v-show="show" class="popup">
      <div class="flex flex-col">
        <NavLink as="button" class="flex justify-between" href="/logout" method="post">
          <div>Log Out</div>
          <i aria-hidden="true" class="fa fa-sign-out text-gray-400 "></i>
        </NavLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
