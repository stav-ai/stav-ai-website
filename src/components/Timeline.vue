<template>
  <section
      id="timeline"
      class="relative py-24 px-6 lg:px-8 min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden pt-32"
  >
    <div class="max-w-6xl mx-auto relative px-6">
      <Motion
          tag="h2"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: 'easeOut' }
        }"
          class="text-4xl font-bold text-center text-gray-900 mb-20"
      >
        Project Timeline
      </Motion>

      <div
          class="absolute top-20 bottom-0 w-4 blur-2xl opacity-30
             bg-gradient-to-b from-sky-400 via-blue-500 to-violet-500
             bg-[length:100%_300%] animate-gradientFlow
             left-12 md:left-1/2 md:-translate-x-1/2"
      ></div>
      <div
          class="absolute top-20 bottom-0 w-1 rounded-full
             bg-gradient-to-b from-sky-500 via-blue-500 to-violet-500
             bg-[length:100%_300%] animate-gradientFlow
             left-12 md:left-1/2 md:-translate-x-1/2"
      ></div>

      <div class="relative flex flex-col gap-20">
        <div
            v-for="(sprint, index) in sprints"
            :key="sprint.id"
            class="relative flex flex-col md:flex-row items-start md:items-center"
        >
          <Motion
              as="div"
              :initial="{ opacity: 0, y: 40 }"
              :animate="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: index * 0.25,
                ease: [0.17, 0.55, 0.55, 1]
              }
            }"
              class="flex flex-col md:flex-row items-start md:items-center w-full"
          >
            <div
                class="absolute md:relative top-0 left-6 md:left-1/2 -translate-x-1/2 w-10 h-10
                     rounded-full flex items-center justify-center
                     font-semibold text-gray-900 bg-white/60 backdrop-blur-md
                     border border-white/60 z-10 "
            >
              {{ sprint.id }}
            </div>

            <div
                class="relative md:w-5/12 p-6
                     bg-white/70 backdrop-blur-md border border-white/70 rounded-2xl
                     mt-0 md:mt-0
                     ml-14 md:ml-0"
                :class="{
                'md:ml-auto': index % 2 !== 0,
                'md:mr-auto': index % 2 === 0,
              }"
            >
              <h3 class="text-lg font-semibold text-blue-700 mb-2">
                {{ sprint.title }}
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                {{ sprint.description }}
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Motion } from '@oku-ui/motion'
import { useSprints } from '../composables/useTimeline'

const { sprints } = useSprints()
</script>