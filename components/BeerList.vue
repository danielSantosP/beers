<template>
  <div v-for="beer in beers" :key="beer.id">
    <beer-card v-if="beer" :beer="beer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useBeerStore } from '@/stores/BeerStore'
export default defineComponent({
  setup() {
    const { beers } = useBeerStore()

    return { beers }
  },
})
</script>
