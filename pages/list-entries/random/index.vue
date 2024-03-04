<template>
  <div>
    <BaseBackToPrevPage />
    <button @click="refetch">Refetch</button>

    <div v-if="hasData">
      <template v-for="entry in entries" :key="entry.API">
        <LazyEntryBaseCard :entry="entry" />
      </template>
    </div>

    <BaseNoData v-else />
  </div>
</template>

<script lang="ts">
export default {
  async setup() {
    definePageMeta({
      layout: "entries",
    });

    useSeoMeta({
      title: "This is a randon list of entries",
      ogTitle: "This is a randon list of entries",
    });

    const { data, refresh } = await useFetch<any>(
      "https://api.publicapis.org/random"
    );

    return {
      entries: data?.value?.entries || [],
      refresh,
    };
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

  methods: {
    refetch() {
      this.refresh();
    },
  },
};
</script>
