<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

defineProps({
    to: {
        required: true,
        type: String,
    }
})
</script>

<template>
    <RouterLink :to="to" active-class="bg-gray-100 text-gray-700"
        class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
        <slot />
    </RouterLink>
</template>
