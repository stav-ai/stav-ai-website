<template>
  <section
      id="project"
      class="relative py-24 px-6 lg:px-8 min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden pt-32"
  >
    <div class="max-w-6xl mx-auto text-center text-gray-900">

      <Motion
          as="div"
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }"
      >
        <h2 class="text-4xl font-bold mb-6">
          Meet Your AI Building Assistant
        </h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-16">
          Our intelligent chatbot, powered by advanced Llama models, simplifies the complex world of building permits and construction insights. Get instant answers and streamline your projects.
        </p>

        <div class="relative inline-block group">

          <div class="absolute w-24 h-24 bg-blue-600 rounded-full -top-4 -left-8 blur-3xl
                      transition-all duration-500 ease-in-out group-hover:scale-125"></div>
          <div class="absolute w-24 h-24 bg-sky-400 rounded-full -bottom-4 -right-8 blur-3xl
                      transition-all duration-500 ease-in-out delay-100 group-hover:scale-125"></div>
          <div class="absolute w-12 h-12 bg-violet-500 rounded-full -bottom-8  blur-3xl
                      transition-all duration-500 ease-in-out delay-200 group-hover:scale-125"></div>

          <a
              href="#"
              class="relative z-10 inline-flex items-center justify-center h-12 pl-8 pr-1 rounded-full
                     bg-white/30 backdrop-blur-lg border border-white/40
                     text-gray-900 font-semibold text-lg
                     transition-colors duration-300
                     hover:bg-white/50 hover:border-white/60 "
          >
            Try it now!
            <div class="flex items-center justify-center bg-white/30 rounded-full w-10 h-10 ml-3
                        backdrop-blur-lg border border-white/40
                        transition-colors duration-300
                        group-hover:bg-white/50 group-hover:border-white/60 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
            </div>
          </a>

        </div>

        <div class="relative flex justify-center w-full max-w-4xl mx-auto">
          <img
              src="../assets/device.png"
              alt="Notebook with chatbot interface"
              class="w-full h-auto object-contain rounded-xl relative"
          />
        </div>

      </Motion>

    </div>
  </section>
</template>

<script setup>
import { Motion } from '@oku-ui/motion';
</script>