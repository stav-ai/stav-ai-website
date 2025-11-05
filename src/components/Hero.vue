<template>
  <section
      class="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50"
  >
    <canvas
        ref="blobCanvas"
        class="absolute inset-0 w-full h-full blur-2xl opacity-80"
    ></canvas>

    <div class="relative z-10 text-center text-gray-900 px-4">
      <Motion
          tag="h1"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1.5 }"
          class="text-5xl font-bold mb-4 text-glow"
      >
        We are building
        <span
            class="bg-gradient-to-r from-sky-400 via-blue-600 to-violet-500 bg-clip-text text-transparent animate-gradient stroke-text ml-2"
        >
          StavAI
        </span>
      </Motion>

      <Motion
          tag="p"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 1, delay: 1 }"
          class="text-gray-700 text-lg max-w-md mx-auto mb-8"
      >
        Your AI assistant for building permits and smart construction insights.
      </Motion>
    </div>

    <!-- CTA Button -->
    <Motion
        as="div"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0, transition: { duration: 1, delay: 2 } }"
        class="relative inline-block transform-gpu will-change-transform will-change-opacity group"
    >
      <a
          href="#"
          class="relative z-10 inline-flex items-center justify-center h-12 pl-8 pr-1 rounded-full
                 bg-white/40 border border-white/50 text-gray-900 font-semibold text-lg
                 transition-all duration-300 transform-gpu will-change-transform
                 hover:scale-105 hover:bg-white/60 hover:border-white/70"
      >
        Chat now!
        <div
            class="flex items-center justify-center bg-white/50 rounded-full w-10 h-10 ml-3
                   border border-white/50 transition-colors duration-300 group-hover:bg-white/70"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
          </svg>
        </div>
      </a>
    </Motion>

  </section>
</template>

<script setup>
import { Motion } from '@oku-ui/motion'
import { ref } from 'vue'
import { useBlobAnimation } from '../composables/useBlobAnimation'

const blobCanvas = ref(null)
useBlobAnimation(blobCanvas)
</script>