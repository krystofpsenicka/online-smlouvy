<script setup>
import Nav from "@/components/Nav.vue"
import Footer from "@/components/Footer.vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { onMounted, ref, reactive } from "vue"
import LogRocket from "logrocket"
gsap.registerPlugin(ScrollTrigger)
LogRocket.init("omdozw/vr-team")

const hidden = ref(true)

window.onload = function () {
  hidden.value = false
}
</script>

<template>
  <div class="bg-black">
    <Nav />
    <main>
      <router-view />
    </main>
    <Footer class="bg-footer" />
  </div>
</template>

<style>
.bg-footer {
  background: linear-gradient(to bottom, black, #1565c0);
}
</style>
