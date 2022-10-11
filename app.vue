<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
<script lang="ts">
export default defineComponent({
  setup() {
    useHead({
      title: 'Beers',
    })
  },
})
</script>
