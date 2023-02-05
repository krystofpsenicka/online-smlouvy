<script setup lang="ts">
import LandingSection from "@/components/LandingSection.vue"
import Info from "@/components/Info.vue"
import Process from "@/components/Process.vue"
import { onMounted } from "vue"
import { svgAnim } from "../dist"

onMounted(() => {
  const path = document.querySelector("path")
  svgAnim(path)
})

const infoContent = [
  {
    img: "/img/coffee",
    heading: `Rychlejší a jednodušší`,
    info: "Svoji poptávku zadáte jednoduše elektronicky pomocí formuláře nebo emailu a my se s vámi obratem spojíme.",
  },
  {
    img: "/img/sofa",
    heading: "Z pohodlí domova",
    info: "Vše si rozmyslíte a prostudujete v pohodlí domova.",
  },
  {
    img: "/img/expert",
    heading: "Přes dvacet let praxe",
    info: "Advokátní kancelář s více  než dvacetiletou praxí se postará o to, aby vše proběhlo, jak má a k vaší maximální spokojenosti.",
  },
]
</script>

<template>
  <div class="relative overflow-hidden bg-black">
    <LandingSection />
    <Info :mirror="false" :content="infoContent[0]" />
    <Info mirror :content="infoContent[1]" />
    <Info :mirror="false" :content="infoContent[2]" />
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
</style>
