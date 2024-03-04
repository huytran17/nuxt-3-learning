<template>
  <BaseBackToPrevPage />
  <div class="counter">
    <div>Value 1: {{ count.val }}</div>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
    <div class="separator"></div>
    <div>Value 2: {{ coord.x }}</div>
    <button @click="refreshCoord">Refresh coord</button>
    <div class="separator"></div>
    <div>Value 3: {{ score }}</div>
    <button @click="refreshScore">Refresh score</button>
  </div>
</template>

<script>
export default {
  name: "counter",
  setup() {
    definePageMeta({
      middleware: "local-middleware",
    });

    const count = useState("count", () => ref({ val: 0 }));
    const coord = useState("coord", () =>
      reactive({ x: Math.random() * 10000 })
    );
    const score = ref(Math.random() * 10000);

    return {
      count,
      coord,
      score,
    };
  },

  beforeUpdate() {
    console.log("--------------beforeUpdate");
  },

  updated() {
    console.log("--------------updated state");
  },

  methods: {
    increase() {
      this.count.val += 1;
    },

    decrease() {
      this.count.val -= 1;
    },

    refreshCoord() {
      this.coord.x = Math.random() * 10000;
    },

    refreshScore() {
      this.score = Math.random() * 10000;
    },
  },
};
</script>

<style scoped>
.separator {
  width: 100%;
  height: 4px;
  margin: 10px 0;
  border-top: 1px dashed black;
  border-bottom: 1px dashed black;
}
</style>
