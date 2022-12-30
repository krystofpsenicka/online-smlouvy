<script setup lang="ts">
interface propsPrototype {
  content: { pic: string; text: string; reverse: string }
  n: string
}

const props = defineProps<propsPrototype>()

const { text, pic, reverse } = props.content
const { n } = props
</script>
<template>
  <div class="my-[3%] w-full">
    <div :class="'flex-row' + reverse" class="flex flex-row">
      <h1
        class="m-0 font-stardos-stencil text-[456px] leading-none text-white opacity-20"
      >
        {{ n }}
      </h1>
      <h2 class="text-lg text-white">{{ text }}</h2>
      <img :src="pic" :alt="pic" class="object-cover" />
    </div>
  </div>
</template>
