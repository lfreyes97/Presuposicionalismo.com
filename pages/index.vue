<script setup lang="ts">
import type { BlogPost, Sections } from '~/types'

const { data: articles } = await useAsyncData('articles',
  () => queryContent<BlogPost>('blog')
    .where({ published: { $ne: false } })
    .sort({ date: -1 })
    .limit(4)
    .find(),
)

const section: Sections = 'blog'

</script>

<template>
  <main>
    <Hero />
    <div>
      <h3 class="text-3xl text-center font-bold">Artículos Recientes</h3>
      <Swiper :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :slides-per-view="1" :loop="true"
        :navigation:="true" :pagination="true" :effect="'creative'"
        :autoplay="{ delay: 2000, disableOnInteraction: false }" :creative-effect="{
          prev: { shadow: false, translate: ['-20%', 0, -1] },
          next: { translate: ['100%', 0, 0] },
        }">
        <SwiperSlide v-for="(article, index) in articles" :key="index">
          <CardList v-if="articles !== null" :list="[article]" section="blog" />
        </SwiperSlide> 
      </Swiper>

      <div class="flex justify-center pt-2">
        <button class="btn btn-wide">
          <NuxtLink to="/blog">Todos los articulos</NuxtLink>
        </button>
      </div>
    </div>

    <div class="pt-8">    <hr>
      <h3 class="text-3xl text-center font-bold pt-8">Libros/Documentos</h3>
      <!-- <Swiper :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :slides-per-view="1" :loop="true"
        :navigation:="true" :pagination="true" :effect="'creative'"
        :autoplay="{ delay: 2000, disableOnInteraction: false }" :creative-effect="{
          prev: { shadow: false, translate: ['-20%', 0, -1] },
          next: { translate: ['100%', 0, 0] },
        }">
        <SwiperSlide v-for="(article, index) in articles" :key="index">
          <CardList v-if="articles !== null" :list="[article]" section="blog" />
        </SwiperSlide> 
      </Swiper> -->

      <div class="flex justify-center pt-2">
        <button class="btn btn-wide">
          <NuxtLink to="/libros">Todos los Documentos</NuxtLink>
        </button>
      </div>
    </div>
  </main>
</template>
