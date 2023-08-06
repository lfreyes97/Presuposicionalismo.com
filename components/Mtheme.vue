<script>
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'

export default {
  setup() {
    onMounted(() => {
      themeChange(false)
    })
  },
}
</script>

<template>
  <ul class="menu menu-vertical">
    <li><button class="py-1" data-set-theme="light" data-act-class="ACTIVECLASS">Modo
        Claro</button></li>
    <li><button class="py-1" data-set-theme="dark" data-act-class="ACTIVECLASS">Modo
        Oscuro</button></li>
    <li><button class="py-1" data-set-theme="retro" data-act-class="ACTIVECLASS">Modo
        Sepia</button></li>
  </ul>
</template>
