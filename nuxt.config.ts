// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Sojin's Portfolio"
    }
  },
  modules: ['nuxt-quasar-ui']
});
