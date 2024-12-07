<script setup lang="ts">
import UiButton from '@/components/UiButton.vue';
import UiInput from '@/components/UiInput.vue';
import UiInputDate from '@/components/UiInputDate.vue';
import UiInputPhone from '@/components/UiInputPhone.vue';
import Contact from '@/data/contact';
import { useContactStore } from '@/stores/contact';
import { ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

const store = useContactStore();

const data = ref<Contact>(null as never);

const route = useRoute()
const router = useRouter()

watch(() => route.params.id, (id) => {
    try {
        data.value = store.find(id as string);
    } catch (error) {
        router.push({
            path: '/',
        })
    }
}, { immediate: true })

const isElement = (element: unknown): element is HTMLFormElement => element !== null;

const submit = (event: Event) => {
    if (isElement(event.target) && !event.target.checkValidity()) {
        return;
    }

    store.save(data.value)

    router.push('/')
}
</script>

<template>
    <main class="container min-full">
        <div class="py-2 px-4">
            <h2 class="text-4xl tracking-tight font-bold">Редактирование</h2>
        </div>

        <form v-if="data" class="py-2 px-4 flex flex-col gap-4" @submit.prevent="submit">
            <div class="flex flex-col gap-3">
                <UiInput :minlength="1" v-model="data.name" required>
                    <template #label>Имя</template>
                </UiInput>
                <UiInput :minlength="1" v-model="data.surname" required>
                    <template #label>Фимилия</template>
                </UiInput>
                <UiInputDate v-model="data.birthday">
                    <template #label>Дата рождения</template>
                </UiInputDate>
                <UiInputPhone v-model="data.phone">
                    <template #label>Телефон</template>
                </UiInputPhone>
                <UiInput v-model="data.email" type="email">
                    <template #label>Почта</template>
                </UiInput>
                <UiInput v-model="data.vk">
                    <template #label>vk</template>
                </UiInput>
            </div>
            <div>
                <UiButton type="submit">
                    Сохранить
                </UiButton>
            </div>
        </form>

    </main>
</template>