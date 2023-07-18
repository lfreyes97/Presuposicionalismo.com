<script setup>
const catsQuery = queryContent('cats')
    /*
// If you'd prefer to pass along raw `QueryBuilderParams`:
const catsQuery = {
  where: [
    { _path: /^\/cats/ },
  ],
}
*/
</script>

<template>
    <nav>
        <ContentNavigation v-slot="{ navigation }">
            <ul>
                <li v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </nav>
</template>
  