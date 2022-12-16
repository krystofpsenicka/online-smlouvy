<script setup>
import Heading from "@/components/Heading.vue"
import svg1 from "@/components/svg-line1.vue"
import svg2 from "@/components/svg-line2.vue"
import { ref } from "vue"
</script>
<template>
  <div class="overflow-hidden px-32">
    <Heading :text="'Jak to funguje'" />
    <svg1 class="svg-container mx-auto my-80 w-3/4 text-center" />
    <!-- <svg2
      class="absolute left-0 right-0 z-20 mx-auto my-80 w-4/5 -translate-y-full"
    /> -->
  </div>
</template>
<style>
.h-process {
  height: 350vh;
}

/* path {
  stroke-dasharray: 30 30;
  animation: dash 20s linear reverse infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: 2000;
  }
} */
</style>
