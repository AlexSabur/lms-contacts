<script setup lang="ts">
import type Contact from '@/data/contact';
import useButtonHandler from '@/hooks/useButtonHandler';
import UiButton from '@/components/UiButton.vue';
import { useContactStore } from '@/stores/contact';

interface Props {
    contact: Contact
}

const props = defineProps<Props>()

const store = useContactStore()

const { handle, pending } = useButtonHandler({
    handler: function handler(event: MouseEvent) {
        event.stopPropagation();
        event.preventDefault();

        const result = window.confirm('Вы уверены, что хотите удалить контакт?');
    
        if (result) {
            store.remove(props.contact);
        }
    }
})
</script>

<template>
    <UiButton :disabled="pending" @click="handle">Удалить</UiButton>
</template>
