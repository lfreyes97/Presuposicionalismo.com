<script setup lang="ts">

import type { BlogPost, PrevNext, Sections } from '~/types'

const { path } = useRoute()

const { data: article } = await useAsyncData(path.replace(/\/$/, ''),
  () => queryContent<BlogPost>('blog')
    .where({ _path: path })
    .findOne(),
)

const { data } = await useAsyncData('prev-next',
  () => queryContent<PrevNext>('blog')
    .where({ published: { $ne: false }, featured: { $ne: true } })
    .sort({ date: -1 })
    .only(['_path', 'title'])
    .findSurround(path),
)
const [prev, next] = data.value || []
const section: Sections = 'blog'
const title: string = article.value?.title || ''
const description: string = article.value?.description || ''
const image: string = article.value?.image || ''
const ogImage: string = article.value?.ogImage || ''

useHead({
  title: article.value?.title || '',
  meta: [
    { name: 'description', content: description },
    {
      name: 'description',
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: 'Presuposiciónalismo' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: 'https://presuposiciónalismo.com',
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: ogImage || image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@presuposicional' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: 'https://presuposicionalismo.com',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: ogImage || image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://presuposicionalismo.com/${path}`,
    },
  ],

})
</script>

<template>
  <main class="container mx-auto px-8 pb-10 ">
    <article v-if="article !== null">
      <header v-if="article" class="py-8 px-8">



        <section class="bg-base-200 transition hover:shadow-xl shadow-xl rounded-xl">
          <div class="w-full mx-auto px-8 sm:py-8 sm:space-y-8 max-w-7xl xl:max-w-screen-2xl">
            <div class="flex flex-col items-center sm:px-5 md:flex-row">
              <div class="w-full md:w-1/3">

                <NuxtImg provider="imagekit" :src="article.image" :alt="article?.alt || article.title" 
                  format="webp" class="rounded-xl w-max h-64" />
              </div>
              <div class="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-2/3">
                <div
                  class="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16">
                  <TagsList class="mb-2" :tags="article.tags" :section="section" />
                  <h1 class="text-4xl font-bold leading-none lg:text-4xl xl:text-5xl">
                    {{
                      article.title
                    }}
                  </h1>
                  <Date :date="article.date" />
                  <h5 class="text-sm font-medium">Autor <a href="#_" class="">John Doe</a></h5>
                  <p class="leading-5 text-mb mb-4 text-justify">
                    {{ article.description }}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </header>

      <hr>

        <div
          class="prose-sm md:prose-base w-full pr-4 max-w-4xl m-auto text-justify indent-8">
          <ContentRenderer :value="article">
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </div>



    </article>
  </main>
</template>