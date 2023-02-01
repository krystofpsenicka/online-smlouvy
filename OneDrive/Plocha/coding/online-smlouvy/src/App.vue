<script setup>
import Nav from "@/components/Nav.vue"
import Footer from "@/components/Footer.vue"
import { ref, onMounted } from "vue"
import LocomotiveScroll from "locomotive-scroll"

const page = ref(null)
const app = ref(null)
//avoid FOUC
onMounted(() => {
  page.value.style.opacity = 0
  setTimeout(() => {
    page.value.style.opacity = 1
  }, 0)
  // const scroll = new LocomotiveScroll({
  //   el: app.value,
  //   smooth: true,
  // })
})
</script>

<template>
  <div class="bg-black" ref="app">
    <div ref="page">
      <Nav />
      <main>
        <router-view />
      </main>
      <Footer class="bg-footer" />
    </div>
  </div>
</template>

<style>
.bg-footer {
  background: linear-gradient(to bottom, black, #1565c0);
}
</style>
