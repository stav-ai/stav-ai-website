<template>
  <div v-show="isOpen" class="fixed inset-0 z-50 flex items-end md:items-center justify-center">

    <Motion
        :initial="{ opacity: 0 }"
        :animate="isOpen ? { opacity: 1 } : { opacity: 0 }"
        :transition="{ duration: 0.3, ease: 'easeInOut' }"
        class="absolute inset-0 bg-blue-950/40"
        @click="$emit('close')"
    />

    <Motion
        :initial="{ opacity: 0, y: '100%' }"
        :animate="isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: '100%' }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
        class="w-full h-9/10 md:w-2/3 md:max-w-3xl lg:w-1/2
           bg-white border border-white/70 rounded-t-2xl md:rounded-2xl p-6 shadow-xl shadow-blue-700/10 relative overflow-hidden
           transform-gpu will-change-transform"
    >

      <button
          @click="$emit('close')"
          class="absolute top-3 right-4 text-gray-600 hover:text-blue-700
         transition-colors cursor-pointer p-2 rounded-full z-10"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 9h4m0 0V5m0 4L4 4m15 5h-4m0 0V5m0 4 5-5M5 15h4m0 0v4m0-4-5 5m15-5h-4m0 0v4m0-4 5 5"/>
        </svg>
      </button>
      <div
          ref="scrollContainer"
          class="overflow-y-auto h-full prose prose-sm md:prose-md text-gray-700 max-w-none"
          v-html="renderedMarkdown"
      />
    </Motion>
  </div>
</template>

<script setup>
import { computed, watch, ref, nextTick } from 'vue' // Add nextTick
import { marked } from 'marked'
import { Motion } from '@oku-ui/motion'

const props = defineProps({
  isOpen: Boolean,
  content: String,
  isLoading: Boolean,
})

const scrollContainer = ref(null)

const renderedMarkdown = computed(() =>
    props.content ? marked.parse(props.content) : 'No information available.'
)

watch([() => props.content, () => props.isOpen], async () => {
  if (props.isOpen) {
    await nextTick()
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop = 0
    }
  }
})

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('modal-open-lock');
  } else {
    document.body.classList.remove('modal-open-lock');
  }
}, { immediate: true })
</script>