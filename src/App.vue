<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheSidebar from './components/TheSidebar.vue';
</script>

<template>
  <div class="flex">
    <div class="min-w-64 w-64">
      <TheSidebar />
    </div>
    <div class="w-full">
      <RouterView />
    </div>
  </div>
</template>
