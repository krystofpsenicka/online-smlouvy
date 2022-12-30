<script setup lang="ts">
import LandingSection from "@/components/LandingSection.vue"
import Info from "@/components/Info.vue"
import Process from "@/components/Process.vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { onMounted, ref } from "vue"
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const path = document.querySelector("path")
  const pathLength = path.getTotalLength()
  const pathOffset =
    (path.getBoundingClientRect().top + window.scrollY) /
      document.body.getBoundingClientRect().height -
    0.005

  path.style.strokeDasharray = pathLength + " " + pathLength
  path.style.strokeDashoffset = pathLength.toString()

  window.addEventListener("scroll", () => {
    const scrollPercentage =
      ((document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight) -
        pathOffset) *
      (1 / pathOffset)

    const drawLength = pathLength * scrollPercentage
    const drawOffset = pathLength - drawLength
    path.style.strokeDashoffset = drawOffset.toString()
  })
})

const infoContent = {
  first: {
    img: "/img/coffee.webp",
    heading: `Rychlejší a jednodušší`,
    info: "Svoji poptávku zadáte jednoduše elektronicky pomocí formuláře nebo emailu a my se s vámi obratem spojíme.",
  },
  second: {
    img: "/img/sofa.webp",
    heading: "Z pohodlí domova",
    info: "Vše si rozmyslíte a prostudujete v pohodlí domova.",
  },
  third: {
    img: "/img/expert.webp",
    heading: "Přes dvacet let praxe",
    info: "Advokátní kancelář s více  než dvacetiletou praxí se postará o to, aby vše proběhlo, jak má a k vaší maximální spokojenosti.",
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
    <Info :mirror="false" class="h-section" :content="infoContent.first" />
    <Info class="h-section" mirror :content="infoContent.second" />
    <Info :mirror="false" class="h-section" :content="infoContent.third" />
    <Process />
  </div>
</template>

<style>
.bg-radial {
  background: radial-gradient(rgb(22, 22, 22), black);
}

.h-section {
  height: 80vh;
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
