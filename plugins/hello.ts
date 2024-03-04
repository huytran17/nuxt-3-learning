export default defineNuxtPlugin({
  name: "hello",
  enforce: "pre",
  hooks: {
    "app:created"() {
      console.log("---------------plugin hook app:created");
    },
  },
});
