<template>
  <div class="home">
    <h1>Home</h1>
    <Counter />
  </div>
  <div class="buttons">
    <button @click="store.plus">+</button>
    <button @click="store.minus">-</button>
  </div>
  <hr>
  <div>The count is {{ oddOrEven }}</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter.ts'
import Counter from '@/components/Counter.vue'

const store = useCounterStore()
const { oddOrEven } = storeToRefs(store)
</script>

<style>
.buttons button {
  font-size: 4rem;
  margin: 2rem;
}
</style>