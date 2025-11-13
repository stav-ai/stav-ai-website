<template>
  <section
      id="timeline"
      class="relative min-h-screen bg-gray-100 overflow-hidden pt-32 pb-24 px-6 lg:px-8"
  >
    <div class="max-w-6xl mx-auto relative px-6">
      <Motion
          tag="h2"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }"
          class="text-4xl font-bold text-center text-gray-900 mb-20 transform-gpu will-change-transform"
      >
        Project Timeline
      </Motion>

      <div
          class="absolute top-20 bottom-0 w-16 md:w-24 opacity-30
               bg-gradient-to-b from-sky-400 via-blue-500 to-violet-500
               left-12 md:left-1/2 md:-translate-x-1/2 rounded-full blur-3xl pointer-events-none"
      ></div>

      <Motion
          as="div"
          :initial="{ scaleY: 0 }"
          :animate="{ scaleY: 1, transition: { duration: 1.5, ease: 'easeInOut' } }"
          class="absolute top-20 bottom-0 w-1 md:w-1.5
               bg-gradient-to-b from-sky-500 via-blue-500 to-violet-500
               left-12 md:left-1/2 md:-translate-x-1/2
               origin-top rounded-full transform-gpu will-change-transform"
      ></Motion>

      <div class="relative flex flex-col gap-20">
        <div
            v-for="(sprint, index) in sprints"
            :key="sprint.id"
            class="relative flex flex-col md:flex-row items-start md:items-center"
        >
          <Motion
              as="div"
              :initial="{ opacity: 0, y: 50 }"
              :animate="{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 + (index * 0.2) } }"
              class="flex flex-col md:flex-row items-start md:items-center w-full transform-gpu will-change-transform will-change-opacity"
          >
            <div
                class="absolute md:relative top-0 left-6 md:left-1/2 -translate-x-1/2 w-10 h-10
                     rounded-full flex items-center justify-center
                     font-semibold text-gray-900 bg-white border border-white/60 z-10"
            >
              {{ sprint.id }}
            </div>

            <div
                class="relative md:w-5/12 p-6
                     bg-white/80 border border-white/70 rounded-2xl
                     mt-0 md:mt-0 ml-14 md:ml-0 mr-10
                     transform-gpu will-change-transform will-change-opacity"
                :class="{
                'md:ml-auto': index % 2 !== 0,
                'md:mr-auto': index % 2 === 0,
              }"
            >
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-lg font-semibold text-blue-700">
                  {{ sprint.title }}
                </h3>

                <button
                    @click="openInfo(sprint.filename)"
                    class="text-gray-600 hover:text-blue-700 transition-colors cursor-pointer pl-2"
                    aria-label="More info"
                >
                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </div>

              <p class="text-gray-700 text-sm leading-relaxed">
                {{ sprint.description }}
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </div>

    <SprintInfoModal
        :isOpen="isModalOpen"
        :content="content"
        :isLoading="isLoading"
        @close="isModalOpen = false"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Motion } from '@oku-ui/motion'
import { useSprints } from '../composables/useTimeline'
import SprintInfoModal from '../components/SprintInfoModal.vue'
import { useSprintInfo } from '../composables/useSprintInfo'

const { sprints } = useSprints()

// State and logic for the modal
const isModalOpen = ref(false)
const { content, isLoading, loadSprintInfo } = useSprintInfo()

const openInfo = async (filename) => {
  // Load the sprint information based on the filename
  await loadSprintInfo(filename)
  // Open the modal
  isModalOpen.value = true
}
</script>