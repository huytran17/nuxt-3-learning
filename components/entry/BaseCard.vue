<template>
  <div class="card">
    <div>API: {{ entry.API }}</div>
    <div>Auth: {{ entry.Auth }}</div>
    <div>Cors: {{ entry.Cors }}</div>
    <div>Category: {{ entry.Category }}</div>
    <div>Description: {{ entry.Description }}</div>
    <div>HTTPS: <input type="checkbox" :checked="entry.HTTPS" /></div>
    <div>
      <nuxt-link :to="entry.Link">Visit</nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const { entry } = defineProps({
  entry: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped>
.card {
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  border: 1px solid #949292;
  background-color: #efeded;
  border-radius: 12px;
  margin-bottom: 12px;
}
</style>
