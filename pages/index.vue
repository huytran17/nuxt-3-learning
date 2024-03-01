<template>
  <div class="routes">
    <nuxt-link to="/list-entries">List Entries</nuxt-link>
    <nuxt-link to="/list-entries/random">List Entries Random</nuxt-link>
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
