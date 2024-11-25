<script setup lang="ts">
import ActionClear from '@/components/settings/ActionClear.vue';
import ActionDownload from '@/components/settings/ActionDownload.vue';
import ActionUpload from '@/components/settings/ActionUpload.vue';
import UiButton from '@/components/UiButton.vue';
</script>

<template>
    <main class="container min-full">
        <div class="py-2 px-4">
            <h2 class="text-4xl tracking-tight font-bold">Настройки</h2>
        </div>
        <div class="flex flex-col divide-y">
            <ActionUpload />
            <ActionDownload />
            <ActionClear />
        </div>
    </main>
</template>
