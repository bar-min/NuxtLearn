<template>
  <ParallaxBackground />

  <div class="app-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
import ParallaxBackground from './ParallaxBackground.vue'
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  z-index: 2;
  max-width: 1500px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
