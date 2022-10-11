<template>
  <div v-if="beers.length" class="card-list">
    <beer-list />
  </div>
  <div v-else>
    <loading />
  </div>
</template>

<script lang="ts">
import { useBeerStore } from '@/stores/BeerStore'
import { storeToRefs } from 'pinia'
import { defineComponent, onBeforeMount } from 'vue'

export default defineComponent({
  setup() {
    const store = useBeerStore()
    const { beers } = storeToRefs(store)
    const { getBeersData } = store
    definePageMeta({
      layout: 'default',
    })

    onBeforeMount(() => {
      if (!beers.value.length) return getBeersData()
    })
    return {
      getBeersData,
      beers,
    }
  },
})
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}
</style>
