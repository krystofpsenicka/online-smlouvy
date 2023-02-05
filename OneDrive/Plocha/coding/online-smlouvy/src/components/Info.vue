<script setup lang="ts">
import Heading from "@/components/Heading.vue"
import { onMounted, ref } from "vue"
import { lazyLoad } from "../dist"

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
  let margin = "20%"
  if (window.innerWidth < 1200 && window.innerWidth > 900) {
    margin = "30%"
  }
  lazyLoad({
    element: element.value,
    margin: margin,
    stagger: 0.2,
  })
})
</script>

<template>
  <div
    class="xl:h-section mb-[10vw] grid h-fit flex-1 items-center px-[8.5vw] text-center xl:mb-32 xl:flex xl:items-stretch xl:justify-between xl:text-left"
    :class="{ 'xl:flex-row-reverse': mirror }"
    ref="element"
  >
    <div
      class="z-20 col-span-1 col-start-1 row-span-1 row-start-1 mx-auto mb-[1vw] flex flex-auto items-center md:mb-[3vw] xl:mx-0 xl:mt-9 xl:mb-0 xl:w-1/12"
    >
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
      class="col-span-1 col-start-1 row-span-1 row-start-1 flex h-full flex-1 flex-col items-center justify-center bg-gradient-to-b from-black/60 via-black/60 to-black px-[10vw] backdrop-blur-[2px] xl:h-fit xl:w-auto xl:items-start xl:bg-transparent xl:px-0 xl:backdrop-blur-none"
      :class="{ 'xl:top-[2%] xl:-left-[4%] xl:mr-32': !mirror }"
    >
      <Heading :text="heading" class="flex justify-center" />
      <p
        class="mt-4 px-[2vw] font-normal leading-snug text-white md:mt-8 md:text-[2.34vw] lg:text-2xl xl:w-[122%] xl:px-0"
      >
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
@media (max-width: 1280px) {
  .img-mask-toright,
  .img-mask-toleft {
    -webkit-mask-image: -webkit-gradient(
      linear,
      right,
      center,
      left,
      rgba(0, 0, 0, 0),
      10%,
      rgba(0, 0, 0, 1),
      90%,
      rgba(0, 0, 0, 0)
    );
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      10%,
      rgba(0, 0, 0, 1),
      90%,
      rgba(0, 0, 0, 0)
    );
  }
}
</style>
