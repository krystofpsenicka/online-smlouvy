<script setup>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { onMounted, ref } from "vue"
gsap.registerPlugin(ScrollTrigger)

const landingContent = ref(null)

onMounted(() => {
  gsap.from(landingContent.value.children, {
    y: "+100",
    delay: 0,
    duration: 2,
    stagger: 0.25,
    autoAlpha: 0,
  })
})
</script>

<template>
  <div class="flex h-screen flex-col px-32">
    <div class="mt-14 flex flex-1 flex-col justify-center" ref="landingContent">
      <div class="mb-20 w-2/5">
        <div
          class="flex content-start items-center text-6xl font-extrabold text-white"
        >
          <h1
            class="text-gradient whitespace-normal font-playfair-display leading-tight"
          >
            Smlouvy na míru online
          </h1>
        </div>

        <p class="mt-4 w-4/5 whitespace-normal text-xl font-normal text-white">
          Svěřte se do rukou profesionálů, kteří vám vypracují smlouvu podle
          vašich potřeb a objevte tak kouzlo online smluv bez nutnosti osobní
          schůzky.
        </p>
      </div>
      <div class="flex w-1/5">
        <router-link
          to="/access"
          class="btn-background block min-w-max rounded-md px-5 py-3 text-lg font-bold text-black"
          >Poptat Smlouvu</router-link
        >
      </div>
    </div>
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
