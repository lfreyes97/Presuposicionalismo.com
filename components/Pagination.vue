<script setup lang="ts">
import type { BlogPost } from '~/types'
const { pageSize = 10 } = defineProps<{
  pageSize?: number
}>();

const route = useRoute();
const page = ref(+(route.query.page || 1));

watch(() => route.query, (query) => {
  page.value = +(query.page || 1)
});

const { data } = await useAsyncData(() => {
  return queryContent<BlogPost>("blog")
    .only(["title"])
    .find();
});

const contentList = data.value || [];
const count = computed(() => contentList.length);
const pages = computed(() => Math.ceil(count.value / pageSize));

const prevDisabled = computed<boolean>(() => page.value === 1);
const nextDisabled = computed<boolean>(() => page.value === pages.value);

// Redirección a la primera página si la página actual no es válida
if (page.value < 1 || page.value > pages.value) {
  navigateTo(undefined);
}
</script>

<template>
  <div class="flex justify-center">
    <span class="join py-6 ">
      <NuxtLink class="join-item btn" :class="prevDisabled ? 'disabled' : ''"
        :to="prevDisabled ? undefined : { query: { page: page - 1 } }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd"
            d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z"
            clip-rule="evenodd" />
        </svg>

      </NuxtLink>

      <NuxtLink class="join-item btn" v-for="n in pages" :to="n !== page ? { query: { page: n } } : undefined"
        :class="n === page ? 'this-page' : ''">
        {{ n }}
      </NuxtLink>

      <NuxtLink class="join-item btn" :class="nextDisabled ? 'disabled' : ''"
        :to="nextDisabled ? undefined : { query: { page: page + 1 } }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd"
            d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd" />
          <path fill-rule="evenodd"
            d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd" />
        </svg>

      </NuxtLink>
  </span>
</div></template>
  
