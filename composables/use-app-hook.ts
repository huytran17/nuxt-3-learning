export const useAppHook = () => {
  const nuxtApp = useNuxtApp();

  nuxtApp.hook("app:created", () => console.log("------------app:created"));
  nuxtApp.hook("app:mounted", () => console.log("------------app:mounted"));

  return useState("appHook", () => "Runtime, buildtime and nitro hooks");
};
