<script setup lang="ts">
import { ref, watch, type InputHTMLAttributes } from 'vue';

interface Props {
    placeholder?: InputHTMLAttributes['placeholder']
    modelValue: Date | null;
}

const props = withDefaults(defineProps<Props>(), {
})

const maxDate = new Date().toISOString().split("T")[0];

const input = ref<HTMLInputElement | null>(null)

const emit = defineEmits(['update:modelValue'])

const isElement = (element: unknown): element is HTMLInputElement => element !== null;

watch(
    () => [props.modelValue, input.value] as const,
    ([newValue, input]) => {
        if (isElement(input)) {
            input.valueAsDate = newValue
        }
    },
    {
        immediate: true
    }
)

const updateValue = (event: Event) => {
    if (isElement(event.currentTarget)) {
        let value = event.currentTarget.valueAsDate || null;

        // Если дата больше текущей, установить сегодняшний день
        if (value !== null) {
            const today = new Date();

            today.setHours(0, 0, 0, 0);
            value.setHours(0, 0, 0, 0);

            if (value > today) {
                value = today;
            }
        }

        emit('update:modelValue', value)
    }
}
</script>

<template>
    <div>
        <label v-if="$slots.label" for="email" class="block text-sm text-gray-500 ">
            <slot name="label" />
        </label>

        <input ref="input" :max="maxDate" v-on:change="updateValue" type="date" :placeholder="props.placeholder"
            class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />

        <!-- <p class="mt-3 text-xs text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing
            elit.</p> -->
    </div>
</template>