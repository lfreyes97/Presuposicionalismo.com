// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    '@nuxthq/studio'
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    '@vueuse/nuxt',
    "nuxt-swiper",
  ],
  image: {
    imagekit: {
      baseURL: "https://ik.imagekit.io/presuposicionalismo/",
    },
  },
  swiper: {
    // Swiper options
    //----------------------
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "pagination", "autoplay"],
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
});
