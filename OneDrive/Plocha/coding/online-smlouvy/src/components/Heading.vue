<script setup lang="ts">
interface propsPrototype {
  text: string
}

const props = defineProps<propsPrototype>()

const { text } = props
</script>

<template>
  <div
    class="flex w-fit content-center items-center text-3xl font-extrabold md:text-[4.69vw] lg:text-5xl"
  >
    <h1
      class="text-gradient w-fit flex-auto font-playfair-display leading-tight"
    >
      {{ text }}
    </h1>
  </div>
</template>
