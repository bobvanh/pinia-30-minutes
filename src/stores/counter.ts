import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const plus = () => {
      console.log('plus')
      count.value++
    }
    
    const minus = () => {
      console.log('minus')
      count.value--
    }

    const oddOrEven = computed(() => {
      console.log("oddOrEven")
      if (count.value % 2 === 0)
        return "even" 
      else
        return "odd"
    })

    return { count, oddOrEven, plus, minus }
  }
)