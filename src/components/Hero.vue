<template>
  <section
      class="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50"
  >
    <canvas ref="blobCanvas" class="absolute inset-0 w-full h-full"></canvas>

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
          :transition="{ duration: 1.5, delay: 0.8 }"
          class="text-gray-700 text-lg max-w-md mx-auto mb-8"
      >
        Your AI assistant for building permits and smart construction insights.
      </Motion>
    </div>
  </section>
</template>

<script setup>
import { Motion } from '@oku-ui/motion'
import { ref } from 'vue'
import { useBlobAnimation } from '../composables/useBlobAnimation'

const blobCanvas = ref(null)
useBlobAnimation(blobCanvas)
</script>