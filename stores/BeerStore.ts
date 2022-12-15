import { Beer } from '@/types/Beer'
import { defineStore, acceptHMRUpdate } from 'pinia'
import axios, { AxiosResponse } from 'axios'

export const useBeerStore = defineStore('beer', () => {
  const count = ref<number>(0)
  const getDoubleCount = computed(() => count.value * 2)
  const getDoublePlusOne = computed(() => getDoubleCount.value + 1)
  const increment = () => count.value++
  const randomizeCounter = () => (count.value = Math.round(100 * Math.random()))

  const name = ref<string>('Daniel')

  const beers = ref<Beer[]>([])
  const beer = ref<Beer | null>(null)
  const getBeers = computed(() => beers.value)

  const getBeersData = async () => {
    try {
      const response: AxiosResponse<Beer[]> = await axios.get(
        'https://api.punkapi.com/v2/beers?per_page=9'
      )
      beers.value = response.data as Beer[]
    } catch (error) {}
  }
  const setBeer = (beerObj: Beer | null) => {
    return (beer.value = beerObj)
  }
  return {
    name,
    getDoubleCount,
    count,
    getDoublePlusOne,
    getBeers,
    beers,
    increment,
    randomizeCounter,
    getBeersData,
    setBeer,
    beer,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBeerStore, import.meta.hot))
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(
    acceptHMRUpdate(useBeerStore, import.meta.webpackHot)
  )
}
