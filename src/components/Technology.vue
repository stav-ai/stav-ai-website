<template>
  <section
      id="technology"
      class="relative py-24 px-6 lg:px-8 min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden pt-32"
  >
    <div class="max-w-6xl mx-auto text-center text-gray-900">

      <Motion
          as="h2"
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }"
          class="text-4xl font-bold mb-16"
      >
        Technology Stack
      </Motion>

      <Motion
          as="div"
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: 'easeOut' } }"
      >
        <img
            src="../assets/diagram.png"
            alt="Technology Stack Diagram"
            class="w-full max-w-4xl mx-auto rounded-xl"
        />
      </Motion>

    </div>
  </section>
</template>

<script setup>
import { Motion } from '@oku-ui/motion';
</script>