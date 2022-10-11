<template>
  <div class="button" role="button">
    <span class="text-button" @click="handleClick">
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['click'])
const text = ref<string>(props.text)
const handleClick = () => {
  emit('click', false)
}
</script>

<style scoped>
.button {
  text-align: end;
  margin-top: 25px;
}
.text-button {
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 4px 6px;
  font-size: 1.1rem;
  background-color: transparent;
}
.text-button:hover {
  text-decoration: underline;
  background-color: rgba(0, 0, 0, 0.05);
  transition: 0.1s;
}
</style>
