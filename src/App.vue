<template>
  <Navbar />
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>

<script setup>
import { Motion } from '@oku-ui/motion'
import Navbar from './components/Navbar.vue'
</script>

