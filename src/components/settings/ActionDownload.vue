<script setup lang="ts">
import UiButton from '@/components/UiButton.vue';
import useButtonHandler from '@/hooks/useButtonHandler';
import { useContactStore } from '@/stores/contact';

const store = useContactStore()

const { handle, pending } = useButtonHandler({
    handler: async function handler() {
        const data = store.getRawData();

        const fileHandle = await window.showSaveFilePicker({
            types: [
                {
                    description: 'База календаря',
                    accept: {
                        'application/json': ['.calendar.json'],
                    },
                },
            ],
        });

        const writable = await fileHandle.createWritable();

        await writable.write(data);

        await writable.close();
    }
})

</script>

<template>
    <div class="flex py-2 px-4 gap-3 justify-between">
        <div class="flex flex-col gap-1">
            <div class="text-base">Скачать книгу</div>
            <div class="text-sm text-gray-800">Загружает книгу на устройство в виде файла</div>
        </div>
        <div>
            <UiButton :disabled="pending" @click="handle">Скачать</UiButton>
        </div>
    </div>
</template>