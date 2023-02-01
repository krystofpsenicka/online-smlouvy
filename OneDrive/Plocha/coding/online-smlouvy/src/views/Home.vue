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
    img: "/img/coffee.webp",
    heading: `Rychlejší a jednodušší`,
    info: "Svoji poptávku zadáte jednoduše elektronicky pomocí formuláře nebo emailu a my se s vámi obratem spojíme.",
  },
  {
    img: "/img/sofa.webp",
    heading: "Z pohodlí domova",
    info: "Vše si rozmyslíte a prostudujete v pohodlí domova.",
  },
  {
    img: "/img/expert.webp",
    heading: "Přes dvacet let praxe",
    info: "Advokátní kancelář s více  než dvacetiletou praxí se postará o to, aby vše proběhlo, jak má a k vaší maximální spokojenosti.",
  },
]
</script>

<template>
  <div class="relative overflow-hidden bg-black">
    <div id="contract" class="video z-0"></div>

    <LandingSection />
    <Info
      :mirror="false"
      class="h-section"
      :content="infoContent[0]"
      :margin="'10%'"
    />
    <Info class="h-section" mirror :content="infoContent[1]" :margin="'10%'" />
    <Info
      :mirror="false"
      class="h-section"
      :content="infoContent[2]"
      :margin="'10%'"
    />
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
