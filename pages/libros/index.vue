<script setup lang="ts">
import type { Books, Sections } from '~/types'

const { data: articles } = await useAsyncData('articles',
  () => queryContent<Books>('libros')
    .where({ published: { $ne: false } })
    .sort({ date: -1 })
    .find(),
)

const title: string = 'Libros'
const description: string = 'Aqui una lista de libros y otros docuementos'
const section: Sections = 'books'

useHead({
  title,
  meta: [{ name: 'description', content: description }],
})
</script>

<template>
  <main>
    <AppTitle class="pt-20">{{ title }}</AppTitle>
    <AppIntro>{{ description }}</AppIntro>
    <Tags :section="section" />
    <BookList v-if="articles !== null" :list="articles" :section="section" />
  </main>
</template>