<template>
  <nav class="fixed top-5 left-1/2 -translate-x-1/2 z-50
             rounded-full bg-white/30 backdrop-blur-lg
             border border-white/40 shadow-lg">
    <div class="flex items-center h-16 px-4">

      <ul ref="navListRef" class="relative flex items-center h-full gap-1 md:gap-2">

        <div
            class="absolute h-12 bg-white/40 shadow-md rounded-full -z-10"
            :style="highlighterStyle"
        ></div>

        <li>
          <RouterLink
              to="/"
              aria-label="Home"
              class="flex items-center justify-center h-12 w-12 px-2"
              @click="clearActive()"
          >
            <img
                src="../assets/LOGO.svg"
                alt="wesoki Logo"
                class="h-6 w-auto"
                onerror="this.style.display='none'; this.parentElement.innerHTML = '<span class=\'font-bold text-lg text-gray-800\'>Stav</span>';"
            />
          </RouterLink>
        </li>

        <li v-for="category in categories" :key="category.name">
          <RouterLink
              :to="'/' + category.name.toLowerCase()"
              :data-category="category.name"
              class="relative z-10 flex items-center h-12 px-4 rounded-full
                   text-gray-700 font-medium
                   transition-colors duration-300"
              :class="{
                'text-gray-900': activeCategory === category.name,
              }"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" :d="category.icon" />
            </svg>

            <span class="hidden md:inline md:ml-2">{{ category.name }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useNavbar } from '../composables/useNavbar'

const {
  categories,
  activeCategory,
  navListRef,
  highlighterStyle,
  clearActive
} = useNavbar()
</script>

<style scoped>

.absolute {
  transition: none;
}
</style>