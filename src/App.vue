<template>
  <Navbar />

  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import { watch } from 'vue'
import { Motion } from '@oku-ui/motion'
import Navbar from './components/Navbar.vue'

const route = useRoute()

watch(
    () => route.path,
    () => {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 1)
    }
)
</script>

