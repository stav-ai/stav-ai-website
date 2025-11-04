<template>
  <section
      id="team"
      class="relative min-h-screen bg-gray-100 overflow-hidden pt-32 pb-24 px-6 lg:px-8"
  >
    <div class="relative max-w-6xl mx-auto text-black">

      <Motion
          tag="h2"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 1 } }"
          class="text-4xl font-bold text-center mb-16 flex flex-col md:flex-row justify-center items-center gap-4"
      >
        <span>Our Team</span>
        <img src="../assets/logo+name.svg" alt="wesoki Logo" class="h-8 w-auto" />
      </Motion>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Motion
            v-for="(member, index) in teamMembers"
            :key="index"
            tag="div"
            :initial="{ opacity: 0, y: 50, scale: 0.95 }"
            :animate="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.7, delay: index * 0.1 }
            }"
        >
          <div
              class="relative p-[2px] rounded-2xl overflow-hidden transition-all duration-500 ease-in-out group hover:scale-[1.02]"
          >
            <div
                class="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-600 to-violet-500 animate-borderMove opacity-20 group-hover:opacity-60"
            ></div>

            <div
                class="relative bg-white rounded-2xl p-6 h-full flex flex-col backdrop-blur-sm "
            >
              <div class="flex items-center mb-5">
                <img
                    :src="member.photo"
                    alt="Team Member Photo"
                    class="w-16 h-16 rounded-full object-cover border border-blue-100 mr-4"
                />
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    {{ member.name }}
                  </h3>
                  <p class="text-blue-600/70 text-sm font-medium tracking-wide">
                    {{ member.position }}
                  </p>
                </div>
              </div>
              <p class="text-sm leading-relaxed text-gray-600">
                {{ member.description }}
              </p>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Motion } from '@oku-ui/motion'
import { useTeamMembers } from '../composables/useTeam'

const { teamMembers } = useTeamMembers()
</script>