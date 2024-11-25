<script setup lang="ts">
import UiButton from '@/components/UiButton.vue';
import UiInput from '@/components/UiInput.vue';
import UiInputDate from '@/components/UiInputDate.vue';
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


const submit = () => {
    store.save(data.value)

    router.push('/')
}
</script>

<template>
    <main class="container min-full">
        <h2>Редактирование</h2>

        <form v-if="data" class="flex flex-col gap-4" @submit.prevent="submit">
            <div class="flex flex-col gap-3">
                <UiInput v-model="data.surname">
                    <template #label>surname</template>
                </UiInput>
                <UiInput v-model="data.name">
                    <template #label>name</template>
                </UiInput>
                <UiInputDate v-model="data.birthday">
                    <template #label>birthday</template>
                </UiInputDate>
                <UiInput v-model="data.phone">
                    <template #label>phone</template>
                </UiInput>
                <UiInput v-model="data.email">
                    <template #label>email</template>
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