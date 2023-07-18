<script setup lang="ts">
import type { BlogPostPreview, Sections } from '~/types'
defineProps<{
  list: Array<BlogPostPreview >
  section: Sections
}>()
</script>

<template>
  <ul
    class="py-6 m-auto max-w-4xl"
  >
    <li
      v-for="item of list"
      :key="item.url || item._path"
      class="flex flex-col"
    >
      <Card :item="item" :section="section" />
    </li>
  </ul>
</template>
