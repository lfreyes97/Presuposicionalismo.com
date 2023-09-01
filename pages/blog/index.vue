<script setup lang="ts">
import type { BlogPost, Sections } from "~/types";
const pageSize = 4;

const route = useRoute();
const page = ref(+(route.query.page || 1));

async function fetchData() {
  const { data } = await useAsyncData(() => {
    return queryContent<BlogPost>("blog")
      .only(["title", "author", "date", "image", "description", "_path"])
      .sort({ date: -1 })
      .skip(pageSize * (page.value - 1))
      .limit(pageSize)
      .find();
  });

  contentList.value = data.value || [];
}

watch(() => route.query, (query) => {
  page.value = +(query.page || 1)
  fetchData();
});

const contentList = ref<any[]>([]);
await fetchData();

const title: string = "Blog Posts";
const description: string = "Here's a list of all my blog posts";
const section: Sections = "blog";
</script>

<template>
  <main>
    <!-- <AppTitle class="pt-20">{{ title }}</AppTitle>
    <AppIntro>{{ description }}</AppIntro> -->
    <Tags :section="section" />

    <div class="py-6 m-auto max-w-4xl" v-for="(item, key) of contentList">
      <PostItem :item="item" />
      <hr class="invisible" v-if="key !== contentList.length - 1" />
    </div>
    <Pagination :page-size="pageSize" />
  </main>
</template>
