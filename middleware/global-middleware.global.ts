export default defineNuxtRouteMiddleware((to, from) => {
  console.log("-----------------------global middleware running", { from, to });
});
