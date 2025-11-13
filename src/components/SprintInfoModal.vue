<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-end md:items-center justify-center">

    <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.3, ease: 'easeInOut' }"
        class="absolute inset-0 bg-blue-950/40"
        @click="$emit('close')"
    />

    <Motion
        :initial="{ opacity: 0, y: '100%' }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: '100%' }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
        class="w-full h-[95vh] md:h-9/10 md:w-2/3 md:max-w-3xl lg:w-1/2
             bg-white border border-white/70 rounded-t-2xl md:rounded-2xl p-6 shadow-xl shadow-blue-700/10 relative overflow-hidden
             transform-gpu will-change-transform"
    >
      <button
          @click="$emit('close')"
          class="absolute top-3 right-4 text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors text-xl cursor-pointer px-2 rounded-full z-10"
      >
        ✕
      </button>

      <div
          class="overflow-y-auto h-full prose prose-sm md:prose-md text-gray-700 max-w-none"
          v-html="renderedMarkdown"
      />
    </Motion>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { marked } from 'marked'
import { Motion } from '@oku-ui/motion'

const props = defineProps({
  isOpen: Boolean,
  content: String,
  isLoading: Boolean,
})

const renderedMarkdown = computed(() =>
    props.content ? marked.parse(props.content) : 'No information available.'
)

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('modal-open-lock');
  } else {
    document.body.classList.remove('modal-open-lock');
  }
}, { immediate: true })
</script>