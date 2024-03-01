<template>
  <div class="no-data">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
const { message } = defineProps({
  message: {
    type: String,
    default: () => "No data found.",
  },
});
</script>

<style scoped>
.no-data {
  margin: 12px 8px;
  text-align: center;
}
</style>
