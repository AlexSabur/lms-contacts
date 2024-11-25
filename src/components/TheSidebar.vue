<script setup lang="ts">
import SidebarLink from './SidebarLink.vue';
</script>

<template>
    <div class="flex h-screen flex-col justify-between border-e bg-white">
        <div class="px-4 py-6">

            <ul class="mt-6 space-y-1">
                <li>
                    <SidebarLink to="/contacts/create">
                        Добавить
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink to="/contacts">
                        Контакты
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink to="/settings">
                        Настройки
                    </SidebarLink>
                </li>
            </ul>
        </div>

    </div>
</template>