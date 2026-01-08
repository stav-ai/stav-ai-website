<template>
  <Motion
      class="custom-cursor"
      :animate="{
      x: mouseX - 5,
      y: mouseY - 5,
      scale: isPointer ? 1.8 : 1,
    }"
      :transition="{
      type: 'spring',
      stiffness: 400,
      damping: 30,
      mass: 0.5,
    }"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Motion } from '@oku-ui/motion'

const mouseX = ref(-20)
const mouseY = ref(-20)
const isPointer = ref(false)

const updateMouse = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  const target = e.target
  isPointer.value = !!target.closest('button, a, [role="button"], .clickable-class')
}

onMounted(() => window.addEventListener('mousemove', updateMouse))
onUnmounted(() => window.removeEventListener('mousemove', updateMouse))
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
  animation: colorShift 6s infinite alternate ease-in-out;
}

@keyframes colorShift {
  0% {
    background-color: #38bdf8;
    box-shadow: 0 0 12px 2px rgba(56, 189, 248, 0.6);
  }
  50% {
    background-color: #3b82f6;
    box-shadow: 0 0 20px 4px rgba(59, 130, 246, 0.7);
  }
  100% {
    background-color: #8b5cf6;
    box-shadow: 0 0 12px 2px rgba(139, 92, 246, 0.6);
  }
}
</style>