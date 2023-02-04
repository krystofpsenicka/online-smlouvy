<script setup lang="ts">
import Heading from "@/components/Heading.vue"
import { onMounted, ref } from "vue"
import { lazyLoad, lazyLoadParallax } from "../dist"

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

const { heading, info, img } = props.content
const { mirror } = props

const element = ref(null)

onMounted(() => {
  lazyLoad({
    element: element.value,
    margin: "20%",
    stagger: 0.2,
  })
})
</script>

<template>
  <div
    class="mb-32 flex flex-1 justify-between px-[8.5vw]"
    :class="{ 'flex-row-reverse': mirror }"
    ref="element"
  >
    <div class="z-20 mt-9 flex w-1/12 flex-auto items-center">
      <picture>
        <source type="image/webp" :srcset="img + '.webp'" />

        <img
          class="img-mask-toright mr-auto flex-auto object-cover"
          :class="!mirror ? 'img-mask-toright' : 'img-mask-toleft'"
          :src="img + '.jpg'"
          alt="VR-Team-user"
        />
      </picture>
    </div>
    <div
      class="relative flex h-fit flex-1 flex-col justify-center"
      :class="{ 'top-[2%] -left-[4%] mr-32': !mirror }"
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
