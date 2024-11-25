<script setup lang="ts">
import ActionClear from '@/components/settings/ActionClear.vue';
import ActionDownload from '@/components/settings/ActionDownload.vue';
import ActionUpload from '@/components/settings/ActionUpload.vue';
import UiButton from '@/components/UiButton.vue';
</script>

<template>
    <main class="container min-full">
        <h2>Настройки</h2>
        <div class="flex flex-col divide-y">
            <ActionUpload />
            <ActionDownload />
            <ActionClear />
        </div>
    </main>
</template>
