<script setup lang="ts">
import Heading from "@/components/Heading.vue"

interface contentPrototype {
  heading: string
  info: string
  img: string
}
interface propsPrototype {
  mirror: boolean
  content: contentPrototype
}

const props = defineProps<propsPrototype>()

const { heading } = props.content
const { info } = props.content
const { mirror } = props
const { img } = props.content

console.log(img)
</script>

<template>
  <div class="mb-32 flex flex-1 px-32" :class="{ 'flex-row-reverse': mirror }">
    <div class="z-20 mt-9 flex w-3/4 flex-auto items-center">
      <img
        class="img-mask-toright mr-auto flex-auto object-cover"
        :class="!mirror ? 'img-mask-toright' : 'img-mask-toleft'"
        :src="img"
        alt="VR-Team-user"
      />
    </div>
    <div
      class="relative flex h-fit w-[45%] flex-auto flex-col justify-center"
      :class="{ 'top-[2%] -left-[15%]': !mirror }"
    >
      <Heading :text="heading" />
      <p class="mt-8 w-[122%] text-2xl font-normal leading-relaxed text-white">
        {{ info }}
      </p>
    </div>
  </div>
</template>

<style>
* {
  z-index: 20;
}

.img-mask-toright {
  -webkit-mask-image: -webkit-gradient(
    linear,
    left,
    right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.img-mask-toleft {
  -webkit-mask-image: -webkit-gradient(
    linear,
    right,
    left,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
</style>
