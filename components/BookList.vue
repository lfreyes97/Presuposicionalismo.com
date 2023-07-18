<script setup lang="ts">
import type { BlogPostPreview, BookPreview, Sections } from '~/types'

defineProps<{
  list: Array< BookPreview >
  section: Sections
}>()
</script>

<template>
  <div class="container m-auto md:px-12 xl:px-6 grid grid-rows-1 gap-10 p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl">
    <div v-for="item in list" :key="item._path" >
      <Book :item="item" :section="section" />
    </div>
</div>
</template>
