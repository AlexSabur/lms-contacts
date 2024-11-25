<script setup lang="ts">
import ListActionDelete from '@/components/contacts/ListActionDelete.vue';
import UiButton from '@/components/UiButton.vue';
import { useContactStore } from '@/stores/contact';

const store = useContactStore();

console.log(store.contacts)
</script>

<template>
    <main class="container min-full">
        <div class="py-2 px-4">
            <h2 class="text-4xl tracking-tight font-bold">Контакты</h2>
        </div>

        <div class="flex flex-col divide-y">
            <RouterLink v-for="contact in store.contacts" :key="contact.id" :to="`/contacts/${contact.id}`"
                class="flex py-2 px-4 gap-3 justify-between">
                <div class="flex flex-col gap-1">
                    <div class="text-base">{{ contact.name }}</div>
                    <div class="text-sm text-gray-800">{{ contact.surname }}</div>
                </div>
                <div>
                    <ListActionDelete :contact="contact" />
                </div>
            </RouterLink>
        </div>
    </main>
</template>