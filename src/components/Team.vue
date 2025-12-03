<template>
  <section
      id="team"
      class="relative min-h-screen bg-gray-100 overflow-hidden pt-32 pb-24 px-6 lg:px-8"
  >
    <div class="relative max-w-6xl mx-auto text-black">
      <!-- Section Title -->
      <Motion
          tag="h2"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }"
          class="text-4xl font-bold text-center mb-16 flex flex-col md:flex-row justify-center items-center gap-4"
      >
        <span>Our Team</span>
        <img
            src="../assets/logo+name.svg"
            alt="Wesoki Logo"
            class="h-8 w-auto select-none pointer-events-none"
        />
      </Motion>

      <!-- Team Members -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <Motion
            v-for="(member, index) in teamMembers"
            :key="index"
            tag="div"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }
          }"
            class="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-colors duration-300 will-change-transform"
        >
          <div class="relative mb-5 overflow-visible">
            <img
                :src="member.photo"
                :alt="member.name"
                class=" h-32 object-contain absolute -top-16 left-1/2 transform -translate-x-1/2 drop-shadow-md"
                loading="lazy"
            />
          </div>
          <div class="pt-12 text-center">
            <h3 class="text-lg font-semibold text-gray-900">{{ member.name }}</h3>
            <p class="text-blue-600 text-sm font-medium tracking-wide mb-3">
              {{ member.position }}
            </p>
            <p class="text-sm text-gray-600 leading-relaxed">
              {{ member.description }}
            </p>
          </div>
        </Motion>
      </div>

      <!-- Managers -->
      <div class="mt-24">
        <Motion
            tag="h3"
            :initial="{ opacity: 0, y: 40 }"
            :animate="{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' } }"
            class="text-3xl font-semibold text-center mb-16 text-gray-900 tracking-tight"
        >
          Project Managers
        </Motion>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <Motion
              v-for="(manager, index) in managers"
              :key="index"
              tag="div"
              :initial="{ opacity: 0, y: 30 }"
              :animate="{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.6 + index * 0.15, ease: 'easeOut' }
            }"
              class="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-colors duration-300 will-change-transform"
          >
            <div class="relative mb-5 overflow-visible">
              <img
                  :src="manager.photo"
                  :alt="manager.name"
                  class="w-32 h-32 object-contain absolute -top-16 left-1/2 transform -translate-x-1/2 drop-shadow-md"
                  loading="lazy"
              />
            </div>
            <div class="pt-14 text-center">
              <h4 class="text-lg font-semibold text-gray-900">
                {{ manager.name }}
              </h4>
              <p class="text-violet-500 text-sm font-medium tracking-wide mb-3">
                {{ manager.position }}
              </p>
              <p class="text-sm text-gray-600 leading-relaxed">
                {{ manager.description }}
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
import { useTeamMembers } from '../composables/useTeam'

const { teamMembers, managers } = useTeamMembers()
</script>
