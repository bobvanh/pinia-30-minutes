<template>
  <div class="about">
    <h1>About</h1>
    <p>{{ count }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter.ts'

const store = useCounterStore()
const { count, oddOrEven } = storeToRefs(store)

</script>

<style>
.about p { font-size: 10rem; }
</style>