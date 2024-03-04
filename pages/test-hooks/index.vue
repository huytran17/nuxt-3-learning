<template>
  <div>Test Runtime, Build time and Nitro Hooks</div>
  <div>{{ appHook }}</div>
</template>

<script setup lang="ts">
const appHook = useAppHook();
</script>
