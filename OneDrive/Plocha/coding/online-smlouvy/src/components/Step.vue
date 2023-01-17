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
  <div class="my-[3%] flex h-fit w-full px-[8vw]" :class="'flex-row' + reverse">
    <div class="grid w-[33vw] grid-cols-1 grid-rows-1">
      <h1
        class="col-span-1 col-start-1 row-span-1 row-start-1 m-0 font-stardos-stencil text-[33vw] leading-none text-white opacity-20"
      >
        {{ n }}
      </h1>

      <img
        :src="pic"
        :alt="pic"
        class="col-span-1 col-start-1 row-span-1 row-start-1 my-auto object-cover px-[10%] pb-[10%]"
      />
    </div>
    <div class="flex w-2/5 items-center pr-[3%] text-[1.5vw] text-white">
      <h2>
        {{ text }}
      </h2>
    </div>
  </div>
</template>
