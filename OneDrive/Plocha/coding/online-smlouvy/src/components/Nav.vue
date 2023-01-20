<template>
  <nav
    ref="nav"
    class="fixed z-30 flex h-20 w-full flex-row items-center justify-between px-32 backdrop-blur"
  >
    <router-link
      to="/"
      class="flex flex-row items-center justify-between space-x-3"
    >
      <img class="w-12" />
      <h1 class="min-w-max text-2xl font-bold text-white">Smlouvy Online</h1>
    </router-link>
    <div class="flex flex-row items-center space-x-12 font-bold text-white">
      <router-link to="/pricing" class="min-w-max">Ceník</router-link>
      <router-link to="/about" class="min-w-max">O nás</router-link>
      <router-link to="/services" class="min-w-max">Služby</router-link>
      <div class="bg-gradient flex items-center rounded-md px-0.5 py-px">
        <div class="flex h-9 items-center rounded-md bg-black px-6">
          <router-link to="/access" class="bg-gradient-txt-clip min-w-max"
            >Poptat Smlouvu</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { anim } from "../dist"

const nav = ref(null)

onMounted(() => {
  anim({
    parent: nav.value,
    duration: 4,
    ease: "ease-in",
    delay: 2,
    change: {
      transform: ["translateY(-100%)", "translateY(0%)"],
    },
  })
})
</script>

<style scoped>
.bg-gradient-txt-clip {
  background: linear-gradient(to bottom, #1565c0, 45%, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient {
  background: linear-gradient(to bottom, #1565c0, 45%, #fff);
}
</style>
