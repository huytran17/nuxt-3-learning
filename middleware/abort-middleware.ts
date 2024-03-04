export default defineNuxtRouteMiddleware((to, from) => {
  console.log("-----------------------abort middleware running", { from, to });

  return abortNavigation();
});
