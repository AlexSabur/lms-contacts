<script setup lang="ts">
import UiButton from '@/components/UiButton.vue';
import useButtonHandler from '@/hooks/useButtonHandler';
import { useContactStore } from '@/stores/contact';

const store = useContactStore()

const { handle, pending } = useButtonHandler({
    handler: async function handler() {
        const [fileHandle] = await window.showOpenFilePicker({
            multiple: false,
            types: [
                {
                    description: 'База календаря',
                    accept: {
                        'application/json': ['.calendar.json'],
                    },
                },
            ],
        });

        const file = await fileHandle.getFile();

        const contents = await file.text();

        store.setDataFromRaw(contents);
    }
})
</script>

<template>
    <div class="flex py-2 px-4 gap-3 justify-between">
        <div class="flex flex-col gap-1">
            <div class="text-base">Загрузить книгу</div>
            <div class="text-sm text-gray-800">Загружает книгу из резевной копии</div>
        </div>
        <div>
            <UiButton :disabled="pending" @click="handle">Загрузить</UiButton>
        </div>
    </div>
</template>
