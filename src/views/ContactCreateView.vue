<script setup lang="ts">
import UiButton from '@/components/UiButton.vue';
import UiInput from '@/components/UiInput.vue';
import UiInputDate from '@/components/UiInputDate.vue';
import UiInputPhone from '@/components/UiInputPhone.vue';
import Contact from '@/data/contact';
import { useContactStore } from '@/stores/contact';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useContactStore();

const data = ref<Contact>(null as never);

onBeforeMount(() => {
    data.value = store.make();
})

const route = useRouter()

const submit = () => {
    store.save(data.value)

    route.push('/')
}
</script>

<template>
    <main class="container min-full">
        <div class="py-2 px-4">
            <h2 class="text-4xl tracking-tight font-bold">Контакт создание</h2>
        </div>

        <form v-if="data" class="py-2 px-4 flex flex-col gap-4" @submit.prevent="submit">
            <div class="flex flex-col gap-3">
                <UiInput v-model="data.surname">
                    <template #label>Фимилия</template>
                </UiInput>
                <UiInput v-model="data.name">
                    <template #label>Имя</template>
                </UiInput>
                <UiInputDate v-model="data.birthday">
                    <template #label>Дата рождения</template>
                </UiInputDate>
                <UiInputPhone v-model="data.phone">
                    <template #label>Телефон</template>
                </UiInputPhone>
                <UiInput v-model="data.email">
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