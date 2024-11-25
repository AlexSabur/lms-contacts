<script setup lang="ts">
import UiButton from '@/components/UiButton.vue';
import { useContactStore } from '@/stores/contact';

const store = useContactStore();

console.log(store.contacts)
</script>

<template>
    <main class="container min-full">
        <h2>Контакты</h2>

        <div class="flex flex-col divide-y">
            <RouterLink v-for="contact in store.contacts" :key="contact.id" :to="`/contacts/${contact.id}`"
                class="flex py-2 px-4 gap-3 justify-between">
                <div class="flex flex-col gap-1">
                    <div class="text-base">{{ contact.name }}</div>
                    <div class="text-sm text-gray-800">{{ contact.surname }}</div>
                </div>
            </RouterLink>
        </div>
    </main>
</template>