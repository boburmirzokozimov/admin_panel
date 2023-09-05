<script setup>
import {createToaster} from "@meforma/vue-toaster";
import Edit from "@/Pages/Clients/Edit.vue";
import {ref} from "vue";
import Modal from "@/Components/Modal.vue";
import {router} from "@inertiajs/vue3";
import NavLink from "@/Components/NavLink.vue";

const toaster = createToaster({ /* options */});
const props = defineProps({
    clients: Array,
})

const active = ref(false)
const show = ref(null)
const handleDelete = (id) => {
    router.delete('/clients/' + id)
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
                            <th class="text-sm font-medium text-gray-900 px-6 py-4" scope="col">
                                #
                            </th>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4" scope="col">
                                Full Name
                            </th>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4" scope="col">
                                Phone
                            </th>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4" scope="col">
                                Balance
                            </th>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4" scope="col">
                                Last Seen
                            </th>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4" scope="col">
                                Active
                            </th>
                            <th class="text-sm font-medium text-gray-900 px-6 py-4" scope="col">
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="client in clients"
                            class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 "
                        >
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                v-text="client.id"
                            ></td>
                            <NavLink
                                :href='`/clients/${client.id}`'
                                as="td"
                                class="cursor-pointer text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                v-text="client.full_name"
                            ></NavLink>
                            <td
                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                v-text="client.phone"
                            ></td>
                            <td
                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                v-text="client.balance"
                            ></td>
                            <td
                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                v-text="client.last_visited"
                            ></td>
                            <td
                                class="text-sm text-gray-900 font-light py-4 whitespace-nowrap "
                            >
                                <span
                                    :class="client.is_active ? 'bg-green-600':'bg-red-600'"
                                    class="px-3 py-1 rounded-md text-white"
                                    v-text="client.is_active ? 'Active' : 'Inactive'"
                                />
                            </td>
                            <td
                                class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            >
                                <NavLink
                                    :href='`/clients/${client.id}`'
                                    as="button"
                                    class="btn-edit mr-2"
                                >
                                    <i class="fa fa-eye text-white"></i>
                                </NavLink>
                                <button class="btn-edit mr-2"
                                        @click.prevent="()=>handleEdit(client.id)"
                                >
                                    <i class="fa fa-edit text-white"></i>
                                </button>
                                <button
                                    class="btn-danger"
                                    @click.prevent="()=>handleDelete(client.id)">
                                    <i class="fa fa-trash text-white"></i>
                                </button>
                                <Modal v-if="active && client.id === show" @close="closeModal"/>
                                <Edit v-if="active && client.id === show" :client="client"
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
