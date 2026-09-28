<script setup lang="ts"></script>

<template>
  <header>
    <div class="app-header">
      <nav>
        <ul class="app-header__links">
          <NuxtLink class="app-header__link" to="/">Главная</NuxtLink>
          <NuxtLink class="app-header__link" to="tasks">Задачи</NuxtLink>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  padding: 24px 0;

  &__links {
    display: flex;
    gap: 18px;
  }

  &__link {
    color: var(--color-blue);
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;

    &:hover {
      opacity: 0.85;
    }
  }
}
</style>
