<script setup lang="ts">
import type { BlogPostPreview, Sections } from '~/types'

defineProps<{
  list: Array<BlogPostPreview>
  section: Sections
}>()
</script>

<template>
  <ul class="py-6 m-auto max-w-4xl">
    <li v-for="item in list" :key="item._path" class="py-6">
      <Item :item="item" :section="section" />
    </li>
  </ul>
</template>
