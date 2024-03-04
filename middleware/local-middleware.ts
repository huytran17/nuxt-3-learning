export default defineNuxtRouteMiddleware((to, from) => {
  console.log("-----------------------local middleware running", { from, to });
});
