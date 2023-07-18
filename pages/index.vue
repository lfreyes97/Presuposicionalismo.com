<script setup lang="ts">
import type { BlogPost, Sections } from '~/types'

const { data: articles } = await useAsyncData('articles',
  () => queryContent<BlogPost>('blog')
    .where({ published: { $ne: false } })
    .sort({ date: -1 })
    .limit(6)
    .find(),
)

const section: Sections = 'blog'

</script>

<template>
<main>
    <Hero />

    <Swiper
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :navigation:="true"
    :pagination="true"
    :effect="'creative'"
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    :creative-effect="{
      prev: { shadow: false, translate: ['-20%', 0, -1] },
      next: { translate: ['100%', 0, 0] },
    }"
  >
    <SwiperSlide v-for="(article, index) in articles" :key="index">
      <CardList v-if="articles !== null" :list="[article]" section="blog" />
    </SwiperSlide>
    <!-- <Controls /> -->
  </Swiper>

</main>
</template>