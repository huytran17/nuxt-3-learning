<template>
  <div class="routes">
    Today is: {{ formatDate(new Date()) }}
    <input v-focus type="text" />
    <nuxt-link to="/list-entries">List Entries</nuxt-link>
    <nuxt-link to="/list-entries/random">List Entries Random</nuxt-link>
    <nuxt-link to="/counter">Counter</nuxt-link>
    <nuxt-link to="/test-hooks">Test hooks</nuxt-link>
    <nuxt-link to="/aborted">Aborted middleware</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

nuxtApp.hook("app:created", () => console.log("-----------app:created"));

onBeforeMount(() => console.log("-----------Before Mount"));
onMounted(() => console.log("-----------Mounted"));

onBeforeUpdate(() => console.log("-----------Before Update"));
onUpdated(() => console.log("-----------Updated"));

onBeforeUnmount(() => console.log("-----------Before Unmount"));
onUnmounted(() => console.log("-----------Unmounted"));
</script>

<style scoped>
.routes {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
