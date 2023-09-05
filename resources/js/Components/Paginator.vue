<template>
  <div class="mb-2 mt-2">
    <Component
        :is="link.url ? 'Link':'span'"
        v-for="link in links"
        :class="{'text-gray-300': !link.url,'font-bold underline': link.active}"
        :href="link.url"
        class="px-2 py-1 text-white rounded-2xl mr-2"
        preserve-state
        style="background-color: #3e444a"
        v-html="link.label"
    />
  </div>
</template>
<script>
export default {
  name: 'Paginator',
  props: {
    links: Array
  }
}
</script>
