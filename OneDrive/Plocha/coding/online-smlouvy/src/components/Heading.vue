<script setup lang="ts">
interface propsPrototype {
  text: string
}

const props = defineProps<propsPrototype>()

const { text } = props
</script>

<template>
  <div
    class="flex w-fit flex-auto content-center items-center text-5xl font-extrabold"
  >
    <h1
      class="text-gradient w-fit flex-auto font-playfair-display leading-tight"
    >
      {{ text }}
    </h1>
  </div>
</template>
