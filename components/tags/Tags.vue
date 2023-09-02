<script setup lang="ts">
import type { Sections } from '~/types'

interface Props {
  section: Sections
}

const props = defineProps<Props>()

const flatten = (tags: Array<any>, key = 'tags') => {
  const _tags = tags
    .map((tag) => {
      let _tag = tag
      if (tag.tags) {
        const flattened = flatten(tag[key])
        _tag = flattened
      }
      return _tag
    })
    .flat(1)

  return _tags
}

const { data } = await useAsyncData('tags', () => queryContent(props.section)
  .only(["tags"])
  .where({ published: { $ne: false } })
  .find());

const articleTags = [...new Set(flatten(data.value, 'tags'))];
const sortedArticleTags = articleTags.sort()
</script>

<template>
  <h2 class="flex flex-row flex-nowrap items-center mt-24">
    <span class="flex-grow block border-t border-black"></span>
    <span class="flex-none block mx-4 px-4 py-2.5 text-md rounded-md leading-none font-medium bg-base-300">
      Tags Populares
    </span>
    <span class="flex-grow block border-t border-black"></span>
  </h2>
  <ul aria-label="topics" class="flex justify-center flex-wrap gap-2 p-4 max-w-sm mx-auto my-4">
    <li v-for="(tag, i) in sortedArticleTags" :key="tag + i" class="flex gap-2 justify-center flex-wrap ">
      <NuxtLink :to="`/${section}/tags/${tag}`" class="btn btn-sm hover:badge-accent p-2">
        {{ replaceHyphen(tag) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-blue-500;
}
</style>