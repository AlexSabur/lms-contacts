<script setup lang="ts">
import TheList from '@/components/contacts/TheList.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="container w-full">
        <div class="flex flex-row divide-x min-h-screen">
            <div class="w-4/12">
                <TheList />
            </div>
            <div class="w-8/12">
                <RouterView />
            </div>
        </div>
    </div>
</template>