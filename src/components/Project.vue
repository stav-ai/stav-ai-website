<template>
  <section
      id="project"
      class="relative min-h-screen bg-gray-100 overflow-hidden pt-32 pb-24 px-6 lg:px-8"
  >
    <div class="max-w-6xl mx-auto text-center text-gray-900">
      <!-- Heading -->
      <Motion
          as="div"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }"
          class="transform-gpu will-change-transform will-change-opacity"
      >
        <h2 class="text-4xl font-bold mb-6">Meet Your AI Building Assistant</h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-16">
          Our intelligent chatbot, powered by advanced Llama models, simplifies the complex world of
          building permits and construction insights. Get instant answers and streamline your projects.
        </p>
      </Motion>

      <!-- CTA Button + Static Glows -->
      <Motion
          as="div"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } }"
          class="relative inline-block transform-gpu will-change-transform will-change-opacity group"
      >
        <!-- Static blurred glow background (not animated, smooth on iOS) -->
        <div
            class="absolute w-40 h-40 bg-gradient-to-tr from-sky-400 via-blue-500 to-violet-500
                 opacity-60 rounded-full -top-10 -left-10 blur-3xl pointer-events-none"
        ></div>

        <div
            class="absolute w-32 h-32 bg-gradient-to-tr from-blue-500 via-sky-400 to-violet-400
                 opacity-50 rounded-full -bottom-8 -right-8 blur-3xl pointer-events-none"
        ></div>

        <a
            href="#"
            class="relative z-10 inline-flex items-center justify-center h-12 pl-8 pr-1 rounded-full
                 bg-white/40 border border-white/50 text-gray-900 font-semibold text-lg
                 transition-all duration-300 transform-gpu will-change-transform
                 hover:scale-105 hover:bg-white/60 hover:border-white/70"
        >
          Try it now!
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

      <!-- Device Image -->
      <Motion
          as="div"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 } }"
          class="transform-gpu will-change-transform will-change-opacity mt-4"
      >
        <div class="relative flex justify-center w-full max-w-4xl mx-auto">
          <img
              src="../assets/device.png"
              alt="Notebook with chatbot interface"
              class="w-full h-auto object-contain rounded-xl "
          />
        </div>
      </Motion>
    </div>
  </section>
</template>

<script setup>
import { Motion } from '@oku-ui/motion'
</script>
