<script setup lang="ts">
import UiButton from '@/components/UiButton.vue';
import useButtonHandler from '@/hooks/useButtonHandler';
import { useContactStore } from '@/stores/contact';

const store = useContactStore()

const { handle, pending } = useButtonHandler({
    handler: function handler() {
        store.clear();
    }
})
</script>

<template>
    <div class="flex py-2 px-4 gap-3 justify-between">
        <div class="flex flex-col gap-1">
            <div class="text-base">Очистить данные</div>
            <div class="text-sm text-gray-800">Удаляет все контакты</div>
        </div>
        <div>
            <UiButton :disabled="pending" @click="handle">Удалить</UiButton>
        </div>
    </div>
</template>