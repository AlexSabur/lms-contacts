<script setup lang="ts">
import { useContactStore } from '@/stores/contact';
import { computed } from 'vue';

const store = useContactStore();
const birthdayList = computed(() => store.contacts
    .filter(contact => contact.birthday !== null)
    .filter(contact => contact.birthday!.getMonth() === new Date().getMonth()
        && contact.birthday!.getDate() === new Date().getDate()
    )
);
</script>


<template>
    <div class="bg-blue-200 p-2" v-if="birthdayList.length !== 0">
        <div>Сегодня день рождения:</div>
        <div class="flex flex-col gap-1">
            <RouterLink v-for="contact in birthdayList" :key="contact.id" :to="`/contacts/${contact.id}`">
                {{ contact.name }} {{ contact.surname }}
            </RouterLink>
        </div>
    </div>
</template>