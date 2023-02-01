<script setup lang="ts">
import { onMounted, ref } from "vue"
import { lazyLoad, lazyLoadParallax } from "../dist"

interface propsPrototype {
  content: { pic: string; text: string[]; reverse: string }
  n: string
  margin: string
}

const props = defineProps<propsPrototype>()

const { text, pic, reverse } = props.content
const { n } = props
const { margin } = props

const step = ref(null)

onMounted(() => {
  lazyLoad({
    element: step.value,
    margin: margin,
    stagger: 0.2,
  })
})
</script>
<template>
  <div
    ref="step"
    class="my-[3%] flex h-fit w-full px-[8vw]"
    :class="'flex-row' + reverse"
  >
    <div class="grid w-[33vw] grid-cols-1 grid-rows-1">
      <h1
        class="col-span-1 col-start-1 row-span-1 row-start-1 m-0 font-stardos-stencil text-[33vw] leading-none text-[#333333]"
      >
        {{ n }}
      </h1>

      <img
        :src="pic"
        :alt="pic"
        class="col-span-1 col-start-1 row-span-1 row-start-1 my-auto object-cover px-[10%] pb-[10%]"
      />
    </div>
    <div
      class="mb-[15%] flex w-[50%] items-center pr-[3%] text-[1.5vw] text-white"
      :class="reverse === '-reverse' ? '-mr-[10%]' : '-ml-[8%]'"
    >
      <h2 v-if="n !== '04'">{{ text[0] }}</h2>
      <h2 v-else>
        {{ text[0] }}
        <hr class="my-[3%] rounded-full border-2 border-white" />
        {{ text[1] }}
      </h2>
    </div>
  </div>
</template>
