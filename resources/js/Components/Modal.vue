<script setup>

</script>

<template>
    <div class="modal" @click="$emit('close')">
    </div>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
}
</style>
