<script setup>
import LandingSection from "@/components/LandingSection.vue"
import Info from "@/components/Info.vue"
import Process from "@/components/Process.vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { onMounted, ref } from "vue"
gsap.registerPlugin(ScrollTrigger)

const video = ref(null)

onMounted(() => {
  gsap.from(video.value, {
    delay: 3,
    duration: 4,
    autoAlpha: 0,
  })
})

const infoContent = {
  first: {
    img: "/img/coffee.webp",
    heading: `Rychlejší a jednodušší`,
    info: "Sagittis, molestie felis non justo etiam commodo amet. Sed et vitae eu, sit egestas a laoreet nullam. Dolor nisl adipiscing aliquam venenatis sociis. Vestibulum, dolor enim ut eget ultrices ullamcorper vulputate. Scelerisque luctus urna, est purus ac mattis sit. Ac a eu euismod mollis.",
  },
  second: {
    img: "/img/sofa.webp",
    heading: "Z pohodlí domova",
    info: "Sagittis, molestie felis non justo etiam commodo amet. Sed et vitae eu, sit egestas a laoreet nullam. Dolor nisl adipiscing aliquam venenatis sociis. Vestibulum, dolor enim ut eget ultrices ullamcorper vulputate. Scelerisque luctus urna, est purus ac mattis sit. Ac a eu euismod mollis.",
  },
  third: {
    img: "/img/expert.webp",
    heading: "Přes dvacet let praxe",
    info: "Sagittis, molestie felis non justo etiam commodo amet. Sed et vitae eu, sit egestas a laoreet nullam. Dolor nisl adipiscing aliquam venenatis sociis. Vestibulum, dolor enim ut eget ultrices ullamcorper vulputate. Scelerisque luctus urna, est purus ac mattis sit. Ac a eu euismod mollis.",
  },
}
</script>

<template>
  <div class="bg-radial relative overflow-hidden">
    <video
      ref="video"
      id="AIanimation"
      class="video absolute z-0"
      autoplay
      loop
      muted
    >
      <source src="/video/VR-anim.mp4" type="video/mp4" />
    </video>

    <LandingSection />
    <Info class="h-section" :content="infoContent.first" />
    <Info class="h-section" mirror :content="infoContent.second" />
    <Info class="h-section" :content="infoContent.third" />
    <Process />
  </div>
</template>

<style>
.bg-radial {
  background: radial-gradient(rgb(22, 22, 22), black);
}

.h-section {
  height: 90vh;
}

.h-info {
  height: 285vh;
}

.video {
  width: 100%;
  top: -7%;
  left: 6%;
}
</style>
