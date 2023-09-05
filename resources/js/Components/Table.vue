<script setup>
import {router} from "@inertiajs/vue3";
import {createToaster} from "@meforma/vue-toaster";
import Edit from "@/Pages/Users/Edit.vue";
import {ref} from "vue";
import Modal from "@/Components/Modal.vue";

const toaster = createToaster({ /* options */});
const props = defineProps({
  users: Array,
  countries: Array,
  roles: Array
})

const active = ref(false)
const show = ref(null)
const handleDelete = (id) => {
  router.delete('/users/' + id)
  toaster.success('Successfully deleted')
}

const handleEdit = (id) => {
  show.value = id
  active.value = true
}

const closeModal = () => {
  active.value = false
  show.value = null
}

</script>

<template>
  <div class="flex flex-col">
    <div class="sm:mx-0.5 lg:mx-0.5">
      <div class="py-2 inline-block mx-auto sm:px-6 lg:px-8 w-full">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-gray-200 border-b">
            <tr>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                #
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                Full Name
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                Role
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                Last Seen
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                Phone
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                Country
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                Active
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                Banned
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left" scope="col">
                Action
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users"
                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  v-text="user.id"
              ></td>
              <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  v-text="user.full_name"
              ></td>
              <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  v-text="user?.role.name.toUpperCase()"
              ></td>
              <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  v-text="user.last_visited"
              ></td>
              <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  v-text="user.phone"
              ></td>
              <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  v-text="`${user?.country?.slice(0,20)}...`"
              ></td>
              <td
                  class="text-sm text-gray-900 font-light py-4 whitespace-nowrap "
              >
                                <span
                                    :class="user.is_active ? 'bg-green-600':'bg-red-600'"
                                    class="px-3 py-1 rounded-md text-white"
                                    v-text="user.is_active ? 'Active' : 'Inactive'"
                                />
              </td>
              <td
                  class="text-sm text-gray-900 font-light py-4 whitespace-nowrap"
              >
                                 <span
                                     :class="user.is_banned ? 'bg-green-600' : 'bg-red-600' "
                                     class="px-3  py-1 mx-auto rounded-md text-white"
                                     v-text="user.is_banned ? 'Banned' : 'Not Banned' "
                                 />
              </td>
              <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
              >
                <button class="btn-edit mr-2"
                        @click.prevent="()=>handleEdit(user.id)"
                >
                  <i class="fa fa-edit text-white"></i>
                </button>
                <button v-if="user.id !== $page.props.auth.user.id" class="btn-danger"
                        @click.prevent="()=>handleDelete(user.id)">
                  <i class="fa fa-remove text-white"></i>
                </button>
                <Modal v-if="active && user.id === show" @close="closeModal"/>
                <Edit v-if="active && user.id === show" :countries="props.countries" :user="user"
                      @close="closeModal"/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
