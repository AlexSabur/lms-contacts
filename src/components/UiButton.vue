<script setup lang="ts">
import { useAttrs, type ButtonHTMLAttributes } from 'vue';

interface Props {
    type?: ButtonHTMLAttributes['type']
}

withDefaults(defineProps<Props>(), {
    type: 'button',
})

const attrs = useAttrs()
</script>

<template>
    <button :type="type"
        class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        v-bind="attrs">
        <slot />
    </button>
</template>