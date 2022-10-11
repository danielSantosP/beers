<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div class="card-info">
          <p class="card-info-title">{{ beer.name }}</p>
          <span>Description: {{ beer.description }}</span>
          <base-button text="Ver mais..." @click="openModal(beer)" />
        </div>
        <div class="card-image">
          <img
            v-if="beer.image_url"
            class="image"
            :src="beer.image_url"
            :alt="beer.name"
          />
          <loading v-else />
        </div>
      </div>
    </div>
    <teleport v-if="modal" to="body">
      <beer-modal v-model:modal="modal" :beer="beer" />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { useBeerStore } from '@/stores/BeerStore'
import { Beer } from '@/types/Beer'
const props = defineProps({
  beer: {
    type: Object as PropType<Beer>,
    required: true,
  },
})
const beer = ref<Beer>(props.beer)
const modal = ref<boolean>(false)
const store = useBeerStore()
const { setBeer } = store
const openModal = (beer: Beer) => {
  setBeer(beer)
  modal.value = true
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.card {
  position: relative;
  width: 600px;
  margin: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  text-align: justify;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.card-content {
  width: auto;
  display: flex;
}
.card-info {
  flex-direction: column;
  padding: 0 20px 0 10px;
  font-size: 1rem;
}
.card-info-title {
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
}
.card-image {
  display: flex;
  flex: 1;
  width: 200px;
}
.image {
  padding: 10px;
  max-width: 200px;
  height: auto;
  max-height: 350px;
}
</style>
