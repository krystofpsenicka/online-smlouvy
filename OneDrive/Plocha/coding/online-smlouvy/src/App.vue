<script setup>
import Nav from "@/components/Nav.vue"
import Footer from "@/components/Footer.vue"
import { ref, onMounted } from "vue"

const page = ref(null)
//avoid FOUC
onMounted(() => {
  page.value.style.opacity = 0
  setTimeout(() => {
    page.value.style.opacity = 1
  }, 0)
})
</script>

<template>
  <div class="bg-black">
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
