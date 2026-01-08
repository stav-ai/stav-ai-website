<template>
  <CustomCursor /> <Navbar />
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>

<script setup>
import { Motion } from '@oku-ui/motion'
import CustomCursor from './components/CustomCursor.vue'
import Navbar from './components/Navbar.vue'
</script>

