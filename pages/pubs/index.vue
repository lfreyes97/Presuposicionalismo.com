<script setup lang="ts">
import type { Books, Sections } from "~/types";

const { path } = useRoute();

const { data: article } = await useAsyncData(path.replace(/\/$/, ""), () =>
  queryContent<Books>("libros").where({ _path: path }).findOne()
);

const section: Sections = "books";
const title: string = article.value?.title || "";
const autor: string = article.value?.autor || "";
const description: string = article.value?.description || "";
const image: string = article.value?.image || "";
const ogImage: string = article.value?.ogImage || "";

useHead({
  title: article.value?.title || "",
  meta: [
    { name: "description", content: description },
    {
      name: "description",
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: "og:site_name", content: "Debbie Codes" },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://debbie.codes",
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: ogImage || image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: "twitter:site", content: "@debs_obrien" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://debbie.codes",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: ogImage || image,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://presuposicionalismo.com/${path}`,
    },
  ],
});
</script>

<template>
  <main class="container mx-auto py-14">
    <article v-if="article !== null">
      <div v-if="article">
        <div class="mx-auto max-w-sm md:max-w-3xl">
          <div
            class="grid gap-4 md:grid-flow-col md:grid-cols-2 md:grid-rows-[auto_1fr]"
          >
            <div class="px-[10%] md:row-span-3">
              <!-- <img
                class="rounded-2xl"
                src="https://presuposicionalismo.com/wp-content/uploads/2021/08/BANHSEN_Mesa-de-trabajo-1.png"
              /> -->
              <NuxtImg provider="imagekit" :src="article.image" :alt="article?.alt || article.title" 
                  format="webp" class="rounded-2xl" />
            </div>
            <div class="order-first md:order-none">
              <h1 class="text-2xl md:text-3xl lg:text-4xl">
                {{ article.title }}
              </h1>
            </div>
            <div class="">
              <div class="">
                <h2 class="text-lg">Resume</h2>
                <div class="py-2">
                  <div class="flex gap-2 py-1">
                    <span class=""><person /> </span>
                    <span class=""> Autor: {{ article.autor }}</span>
                  </div>
                  <div class="flex gap-2 py-1">
                    <span class=""><Npages /> </span>
                    <span class=""> Paginas:  {{ article.paginas }}</span>
                  </div>
                  <div class="flex gap-2 py-1">
                    <span class=""><IconPDF /> </span>
                    <span class=""> Formato: {{ article.format }}</span>
                  </div>
                  <div class="flex gap-2 py-1">
                    <span class=""><person /> </span>
                    <span class=""> Editorial:  {{ article.editorial }} </span>
                  </div>
                  <div class="flex gap-2 py-1">
                    <span class=""><Price /> </span>
                    <span class=""> Precio:  {{ article.costo}}</span>
                  </div>
                  <div class="flex gap-2 py-1">
                    <span class=""><person /> </span>
                    <span class=""> Dificultad:{{ article.dificultad}} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
              <!--
               <div class="grid grid-cols-8 mt-4">
                  <div
                    class="col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose-sm md:prose-base w-full pr-4 max-w-3xl m-auto text-justify indent-8">
                    <ContentRenderer :value="article">
                      <template #empty>
                        <p>No content found.</p>
                      </template>
                    </ContentRenderer>
                  </div>
                </div>
              -->
      </div>
    </article>
  </main>
</template>
