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

<script lang="ts">
import { LazyEntryBaseCard, BaseBackToPrevPage, BaseNoData } from "#components";

export default {
  async setup() {
    definePageMeta({
      layout: "entries",
    });

    const { data } = await useFetch<any>("https://api.publicapis.org/random");

    return {
      entries: data?.value?.entries || [],
    };
  },

  components: {
    LazyEntryBaseCard,
    BaseBackToPrevPage,
    BaseNoData,
  },

  computed: {
    hasData() {
      return this.entries?.length;
    },
  },

  beforeCreate() {
    console.log("--------------beforeCreate");
  },

  created() {
    console.log("--------------created");
  },

  beforeUpdate() {
    console.log("--------------beforeUpdate");
  },

  updated() {
    console.log("--------------updated");
  },

  beforeMount() {
    console.log("--------------beforeMount");
  },

  mounted() {
    console.log("--------------mounted");
  },

  beforeUnmount() {
    console.log("--------------beforeUnmount");
  },

  unmounted() {
    console.log("--------------unmounted");
  },
};
</script>
