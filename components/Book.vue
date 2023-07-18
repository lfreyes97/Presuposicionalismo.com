<script setup lang="ts">
import type { BookPreview, Sections } from "~/types";

defineProps<{
  item: BookPreview;
  section: Sections;
}>();
</script>

<template>
  <div>
    <article>
      <div class="group relative space-y-6 overflow-hidden">
        <NuxtImg
          provider="imagekit"
          :src="item.image"
          :alt="item.title"
          fit="thumb"
          format="webp"
          class="rounded-3xl"
        />
        <div
          class="absolute bottom-2 m-2 invisible group-hover:visible  inset-x-0 h-max mt-auto px-8 py-6 bg-base-200 translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0 rounded-3xl"
        >
          <div>
            <h4 class="text-xl font-semibold">
              <NuxtLink
                :to="item.url || item._path"
                :target="item.url ? '_blank' : '_self'"
              >
                <h3 class="text-2xl font-semibold text-center md:text-left">
                  {{ item.title }}
                </h3>
              </NuxtLink>
            </h4>
            <span class="block py-2 text-sm">{{ item.autor }}</span>
          </div>
          <NuxtLink
            :to="item.url || item._path"
            :target="item.url ? '_blank' : '_self'"
          >
            <button
              class="btn btn-sm btn-active btn-ghost hover:bg-base-200 hover:shadow-lg hover:shadow-base-300"
            >
              Leer Mas
            </button>
          </NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>
