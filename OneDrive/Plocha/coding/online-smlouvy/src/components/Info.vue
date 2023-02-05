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
  lazyLoad({
    element: element.value,
    margin: "20%",
    stagger: 0.2,
  })
})
</script>

<template>
  <div
    class="xl:h-section grid h-fit flex-1 items-center px-[8.5vw] text-center xl:mb-32 xl:flex xl:items-stretch xl:justify-between xl:text-left"
    :class="{ 'xl:flex-row-reverse': mirror }"
    ref="element"
  >
    <div
      class="z-20 col-span-1 col-start-1 row-span-1 row-start-1 mx-auto mb-[3vw] flex w-4/5 flex-auto items-center xl:mx-0 xl:mt-9 xl:mb-0 xl:w-1/12"
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
      class="col-span-1 col-start-1 row-span-1 row-start-1 flex h-full flex-1 flex-col items-center justify-center bg-black/60 px-[10vw] backdrop-blur-[2px] xl:h-fit xl:w-auto xl:items-start xl:bg-transparent xl:px-0 xl:backdrop-blur-none"
      :class="{ 'xl:top-[2%] xl:-left-[4%] xl:mr-32': !mirror }"
    >
      <Heading :text="heading" class="flex justify-center" />
      <p
        class="mt-8 px-[2vw] text-2xl font-normal leading-relaxed text-white xl:w-[122%] xl:px-0"
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
