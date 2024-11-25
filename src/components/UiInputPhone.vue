<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { reactive, type InputHTMLAttributes } from 'vue';
import { vMaska } from "maska/vue"
import type { MaskInputOptions } from 'maska';

interface Props {
    type?: InputHTMLAttributes['type']
    placeholder?: InputHTMLAttributes['placeholder']
    modelValue: string;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
})

const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit)

const maska = reactive<MaskInputOptions>({
    mask: '+7 (###) ###-##-##',
})
</script>

<template>
    <div>
        <label v-if="$slots.label" for="email" class="block text-sm text-gray-500 ">
            <slot name="label" />
        </label>

        <input v-maska="maska" v-model="data" :type="props.type" :placeholder="props.placeholder"
            class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />

        <!-- <p class="mt-3 text-xs text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing
            elit.</p> -->
    </div>
</template>