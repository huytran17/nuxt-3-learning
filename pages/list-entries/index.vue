<template>
  <div>
    <BaseBackToPrevPage />

    <div v-if="hasData">
      <template v-for="entry in entries" :key="entry.API">
        <LazyEntryBaseCard :entry="entry" />
      </template>
    </div>

    <BaseNoData v-else />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "entries",
  middleware: ["local-middleware"],
});

useHead({
  title: "This is an entries list",
  meta: [
    {
      content: "This is an entries list",
      "http-equiv": "content-type",
    },
  ],
});

const { data } = await useLazyFetch<any>("https://api.publicapis.org/entries");

const entries = data?.value?.entries || [];

const hasData = computed(() => entries.length);
</script>
