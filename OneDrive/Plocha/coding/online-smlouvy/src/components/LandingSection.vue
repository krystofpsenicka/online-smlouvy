<script setup>
import { onMounted, ref } from "vue"
import { threejsModel, anim } from "../dist"

const landingContent = ref(null)
const mouseEfContainer = ref(null)
const canvas = ref(null)

onMounted(() => {
  threejsModel(mouseEfContainer, canvas.value)
  anim({
    parent: landingContent.value,
    duration: 1.2,
    stagger: 0.1,
    ease: "cubic-bezier(0, 0.55, 0.45, 1)",
    delay: 1.9,
    change: {
      transform: ["translateY(400%)", "translateY(0%)"],
      opacity: [0, 1],
    },
  })
})
</script>

<template>
  <div
    class="mb-[10%] flex h-screen flex-col items-center lg:flex-row lg:items-start"
    ref="mouseEfContainer"
  >
    <div
      class="flex flex-1 flex-col items-center justify-center bg-black/70 px-[8.4vw] backdrop-blur-[2px] lg:mt-36 lg:items-start lg:bg-transparent lg:backdrop-blur-none"
      ref="landingContent"
    >
      <div class="mb-20 flex flex-col items-center lg:w-2/5 lg:items-start">
        <div class="flex content-start items-center text-6xl font-extrabold">
          <h1
            class="text-gradient whitespace-normal text-center font-playfair-display leading-tight lg:text-left"
          >
            Smlouvy na míru online
          </h1>
        </div>

        <p
          class="mt-4 w-4/5 whitespace-normal text-center text-xl font-normal text-white lg:text-left"
        >
          Svěřte se do rukou profesionálů, kteří vám vypracují smlouvu podle
          vašich potřeb a objevte tak kouzlo online smluv bez nutnosti osobní
          schůzky.
        </p>
      </div>
      <div class="flex w-1/5 flex-col items-center lg:flex-row lg:items-start">
        <router-link
          to="/access"
          class="btn-background block min-w-max rounded-md px-5 py-3 text-lg font-bold text-black"
          >Poptat Smlouvu</router-link
        >
      </div>
    </div>
    <div ref="canvas" class="absolute top-0 left-0 z-0"></div>
  </div>
</template>

<style>
.text-gradient {
  background: linear-gradient(to right, #1565c0, 40%, #fff, 99%, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-background {
  background: linear-gradient(to bottom, #1565c0, 60%, #fff);
}
</style>
