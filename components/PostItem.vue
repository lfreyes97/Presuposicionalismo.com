<template>
  <!-- <h2>
    <NuxtLink :to="content._path">
      {{ content.title }}
    </NuxtLink>
  </h2>
  <span>{{ date }}</span>
  <p>{{ content.description }}</p> -->

  <article>

    <div class="mx-auto">

    </div>
    <div
        class="container mx-auto card bg-base-100 border border-transparent hover:border-base-300 transition hover:shadow-xl m-auto px-6  md:px-12 xl:px-6">
        <div class="lg:mx-auto">
          <div
            class="group relative sm:-mx-8 p-6 sm:p-8  bg-transparent shadow-2xl shadow-transparent sm:gap-8 sm:flex transition duration-300 hover:z-10">
            <div class="sm:w-2/6 card-image rounded-3xl overflow-hidden transition-all duration-500">

              <!-- <NuxtImg provider="imagekit" :src="content.image" :alt="content.title" fit="thumb" format="webp"
              class="scale-10' transition-all duration-400 hover:scale-100 rounded h-56 sm:h-full w-full object-cover object-top duration-500 group-hover:scale-105" /> -->
            </div>

            <div class="sm:p-2 sm:pl-0 sm:w-4/6">
              <span class="mt-4 mb-2 inline-block font-medium sm:mt-0 text-center md:text-left">
                <Date :date="content.date" />
              </span>
              <NuxtLink :to="content.url || content._path" :target="content.url ? '_blank' : '_self'">

                <h3 class="text-2xl font-semibold text-center md:text-left">
                  {{ content.title }}
                </h3>

              </NuxtLink>


              <p class="my-6 text-justify">
                {{ content.description }}
              </p>

              <div class="flex gap-4 justify-center lg:justify-start">
                <NuxtLink :to="content.url || content._path" :target="content.url ? '_blank' : '_self'">

                  <button
                    class="btn btn-sm btn-active btn-ghost hover:bg-base-200 hover:shadow-lg hover:shadow-base-300">Leer
                    Mas</button>

                </NuxtLink>

              </div>
            </div>
          </div>
        </div>
      </div>

  </article>
</template>
  
<script setup lang="ts">
import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

const props = defineProps<{
  content: MarkdownParsedContent
}>();

const date = computed(() => new Date(props.content.date).toDateString());
</script>