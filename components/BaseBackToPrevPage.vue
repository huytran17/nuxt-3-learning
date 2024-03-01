<template>
  <div class="back-to-prev-page">
    <button @click="backToPrevPage">Back</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const backToPrevPage = () => router.back();
</script>

<style scoped>
.back-to-prev-page {
  margin: 12px 0;
}
.back-to-prev-page button {
  padding: 4px 6px;
  border: 1px solid #ece9e9;
  border-radius: 4px;
  background-color: #4a89f7;
  color: #fff;
}
</style>
