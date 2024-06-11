<template>
    <div class="count">{{ count }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter.ts'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { count, oddOrEven } = storeToRefs(store)
</script>

<style>
.count { 
  font-size: 6rem;
  margin-top: 2rem; 
}
</style>