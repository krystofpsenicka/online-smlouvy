<script setup lang="ts">
import LandingSection from "@/components/LandingSection.vue"
import Info from "@/components/Info.vue"
import Process from "@/components/Process.vue"
import { onMounted } from "vue"

onMounted(() => {
  const paths = document.querySelectorAll("path")
  paths.forEach((path) => {
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

      const drawLength =
        pathLength * scrollPercentage * Number(path.dataset.speed)
      const drawOffset = pathLength - Number(path.dataset.offset) - drawLength

      path.style.strokeDashoffset = drawOffset.toString()
    })
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
  <div class="relative overflow-hidden bg-black">
    <div id="contract" class="video z-0"></div>

    <LandingSection />
    <Info :mirror="false" class="h-section" :content="infoContent.first" />
    <Info class="h-section" mirror :content="infoContent.second" />
    <Info :mirror="false" class="h-section" :content="infoContent.third" />
    <Process />
  </div>
</template>

<style>
.h-section {
  height: 80vh;
}

.h-info {
  height: 285vh;
}

.video {
  width: 50vw;
  top: 0;
  left: 0;
}
</style>
