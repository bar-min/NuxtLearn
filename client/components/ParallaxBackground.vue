<!-- components/ParallaxBackground.vue -->
<template>
  <div ref="container" class="parallax-container">
    <div :style="bgStyle" class="parallax-bg"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useParallax } from '@vueuse/core'

import bgImage from '@/assets/img/main-bg.jpg' 

const container = ref<HTMLElement | null>(null)
const { roll, tilt } = useParallax(container)

const bgStyle = computed(() => {
  const intensity = 40
  return {
    backgroundImage: `url(${bgImage})`,
    transform: `translate3d(${tilt.value * intensity}px, ${roll.value * intensity}px, 0)`,
    transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)'
  }
})
</script>

<style lang="scss" scoped>
.parallax-container {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 1;
  background-color: #1a1a1a;
}

.parallax-bg {
  position: absolute;
  inset: -50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
