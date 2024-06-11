<script setup lang="ts">
</script>

<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style>
.app {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
}
</style>
