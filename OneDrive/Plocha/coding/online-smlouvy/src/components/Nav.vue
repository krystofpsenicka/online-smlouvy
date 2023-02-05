<script setup>
import { onMounted, ref } from "vue"
import { anim, svgAnim } from "../dist"
import CrossSvg from "@/components/Cross-svg.vue"

const nav = ref(null)

const showNav = ref(false)

const toggleShowNav = () => {
  showNav.value = !showNav.value
}

onMounted(() => {
  anim({
    parent: nav.value,
    duration: 1.2,
    ease: "cubic-bezier(0, 0.55, 0.45, 1)",
    delay: 1.9,
    change: {
      transform: ["translateY(-100%)", "translateY(0%)"],
    },
  })
})
</script>

<template>
  <nav
    ref="nav"
    class="fixed z-30 flex h-20 w-[100vw] flex-row items-center justify-between px-[8.4vw] backdrop-blur"
  >
    <router-link
      to="/"
      class="flex flex-row items-center justify-between space-x-3"
    >
      <img class="mt-[3%] w-16" src="/img/SO-logo-simple.svg" />
    </router-link>
    <button
      class="flex h-14 w-8 items-center justify-center rounded-full md:hidden lg:hidden"
      @click="toggleShowNav"
    >
      <span class="flex flex-col items-center py-1.5">
        <span class="h-1 w-1 rounded-full bg-[#1565C0]"></span>
        <span class="m-1 h-1 w-1 rounded-full bg-[#1565C0]"></span>
        <span class="h-1 w-1 rounded-full bg-[#1565C0]"></span>
      </span>
    </button>

    <div
      class="hidden flex-row items-center space-x-12 font-bold text-slate-400 md:flex lg:flex"
    >
      <router-link to="/pricing" class="min-w-max hover:text-blue-500"
        >Ceník</router-link
      >
      <router-link to="/about" class="min-w-max hover:text-blue-500"
        >O nás</router-link
      >
      <router-link to="/services" class="min-w-max hover:text-blue-500"
        >Služby</router-link
      >
      <div class="bg-gradient flex items-center rounded-md px-0.5 py-px">
        <div class="flex h-9 items-center rounded-md bg-black">
          <router-link to="/access" class="bg-gradient-txt-clip min-w-max px-6"
            >Poptat Smlouvu</router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <div
    v-if="showNav"
    class="fixed z-40 flex h-[100vh] w-[100vw] justify-end bg-black/20 backdrop-blur-md md:hidden lg:hidden"
  >
    <div
      class="m-[4vw] flex h-fit w-[50vw] items-center justify-start rounded-xl bg-slate-900"
    >
      <button
        class="absolute top-10 right-10 z-30 flex h-[6vw] w-[6vw] items-center justify-center text-slate-400 hover:text-blue-500"
        @click="toggleShowNav"
      >
        <CrossSvg />
      </button>
      <ul
        class="mb-7 ml-7 mt-5 mr-7 flex w-full flex-col items-start justify-around text-lg font-bold text-slate-400"
      >
        <div class="flex flex-col items-start justify-between">
          <router-link
            to="/pricing"
            class="my-[1vw] hover:text-blue-500"
            @click="toggleShowNav"
            >Ceník</router-link
          >
          <router-link
            to="/about"
            class="my-[1vw] hover:text-blue-500"
            @click="toggleShowNav"
            >O nás</router-link
          >
          <router-link
            to="/services"
            class="my-[1vw] hover:text-blue-500"
            @click="toggleShowNav"
            >Služby</router-link
          >
        </div>
        <div class="my-[2vw] h-[0.3vw] w-full rounded-lg bg-slate-400"></div>
        <div class="mt-[2vw] flex">
          <router-link
            to="/access"
            class="btn-background block rounded-md px-[2vw] py-[1vw] text-slate-800"
            @click="toggleShowNav"
            >Poptat Smlouvu</router-link
          >
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient-txt-clip {
  background: linear-gradient(to bottom, #1565c0, 45%, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-gradient-txt-clip:hover {
  /* background: #3075c4; */
  background: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient {
  background: linear-gradient(to bottom, #1565c0, 45%, #fff);
}
</style>
