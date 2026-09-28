<template>
  <div class="app-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.app-wrapper {
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
