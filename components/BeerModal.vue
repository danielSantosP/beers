<template>
  <div v-if="beer" class="modal" role="dialog">
    <div class="modal-content">
      <h3 class="beer-title">
        {{ beer.name }}
      </h3>
      <div class="beer-content">
        <div class="beer-info">
          <p>
            <span>{{ beer.description }}</span>
          </p>
          <p>
            <span>
              {{ beer.ebc }} - {{ beer.ibu }} - {{ beer.abv }} - {{ beer.unit }}
            </span>
          </p>
          <p>
            <span>{{ beer.tagline }}</span>
          </p>
          <p>
            <span>{{ beer.contributed_by }}</span>
          </p>
          <p>
            <span>
              {{ beer.boil_volume.value }} - {{ beer.boil_volume.unit }}
            </span>
          </p>
          <p>
            <span>{{ beer.tagline }}</span>
          </p>
          <p>
            <span>{{ beer.attenuation_level }}</span>
            <span>{{ beer.brewers_tips }}</span>
            <span>{{ beer.first_brewed }}</span>
          </p>
          <ul>
            <li v-for="food in beer.food_pairing" :key="food">{{ food }}</li>
          </ul>
        </div>
        <div class="beer-image">
          <img class="image" :src="beer.image_url" :alt="beer.name" />
          <div>
            <base-button text="Fechar Modal" @click="closeModal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useBeerStore } from '@/stores/BeerStore'
import { Beer } from '~~/types/Beer'

const props = {
  modal: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  beer: {
    type: Object as PropType<Beer>,
    required: true,
    default: Object as PropType<Beer>,
  },
}
const emits = ['update:modal']

export default defineComponent({
  props,
  emits,
  setup(props, { emit }) {
    const store = useBeerStore()
    const { setBeer } = store
    useHead({
      titleTemplate: `%s - ${props.beer.name}`,
    })
    const openModal = computed(() => props.modal)
    const closeModal = () => {
      emit('update:modal', false)
      setBeer(null)
    }
    return {
      openModal,
      closeModal,
      beer: props.beer,
    }
  },
})
</script>

<style scoped>
.modal {
  z-index: 999;
  position: fixed;
  top: 0%;
  left: 0%;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  z-index: 999;
  position: fixed;
  top: 5%;
  left: 25%;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  width: calc(50% - 30px);
  height: 90%;
  border-radius: 15px;
  background-color: rgba(218, 218, 218, 1);
  padding: 0 15px;
}
.beer-title {
  text-align: center;
  font-size: 2rem;
}

.beer-content {
  display: flex;
  justify-content: center;
}
.beer-info {
  width: auto;
  flex-direction: column;
  justify-content: space-between;
}
.beer-image {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.image {
  width: auto;
}

@media (min-width: 1500px) {
  .image {
    width: auto;
    height: 600px;
  }
}
@media (max-width: 1500px) {
  .image {
    width: auto;
    height: 350px;
  }
}
</style>
