<script setup lang="ts">
import Heading from "@/components/Heading.vue"
import svg1 from "@/components/svg-line1.vue"
import Step from "@/components/Step.vue"
import { onMounted, ref } from "vue"
import { lazyLoad } from "@/dist"

const processContent = {
  1: {
    text: [
      "Po kliknutí na tlačítko poptat smlouvu, se zobrazí kontaktní formulář, po jeho vyplnění budete kontaktováni advokátem. Spojit se s námi můžete také e-mailem.",
    ],
    pic: "/img/process1",
    reverse: "",
  },
  2: {
    text: [
      "Advokát se s vámi telefonicky spojí, probere potřebné podrobnosti a v emailu vám zašle podrobnější formulář, ve kterém upřesníte parametry smlouvy.",
    ],
    reverse: "-reverse",
    pic: "/img/process2",
  },
  3: {
    text: [
      "Vypracujeme smlouvu podle Vašich potřeb, zašleme Vám její návrh. Poté telefonickou nebo emailovou konzultací vyřešíme případné detaily a finalizujeme ji.",
    ],
    pic: "/img/process3",
    reverse: "",
  },
  4: {
    text: [
      "Smlouvu podepíšete s ověřeným podpisem a s návrhem na vklad, který vám také zašleme. Předáte listiny příslušnému katastrálnímu pracovišti. Pokud nevyužijete možnosti úschovy kupní ceny advokátem, proces tímto krokem končí.",
      "Pokud využijete možnost úschovy kupní ceny advokátem, zašleme Vám smlouvu o advokátní úschově, kterou na czech pointu podepíšete současně s ověřením vaší totožnosti a zašlete nám ji zpět.",
    ],
    pic: "/img/process4",
    reverse: "",
  },
  5: {
    text: [
      "Advokát smlouvu o úschově podepíše a pošle vám ji zpět. Po doručení smlouvy převedete peníze na účet u renomované české banky. Po připsání kupní ceny na účet advokátní úschovy předá kupní smlouvu katastrálnímu pracovišti.",
    ],
    pic: "/img/process5",
    reverse: "-reverse",
  },
  6: {
    text: [
      "Po provedení převodu vlastnického práva, advokát ověří, zda jsou plněny podmínky pro vyplacení peněz z úschovy a vyplatí je.",
    ],
    pic: "/img/process6",
    reverse: "",
  },
}

const heading = ref(null)
onMounted(() => {
  console.log(heading.value)
  lazyLoad({
    element: heading.value,
    margin: "10%",
    stagger: 0,
  })
})
</script>
<template>
  <div
    class="relative flex h-fit flex-col items-center justify-center px-[8vw]"
  >
    <div ref="heading">
      <Heading :text="'Jak to funguje'" />
    </div>
    <svg1 class="z-0 mx-auto my-80 hidden w-3/4 text-center xl:block" />
    <div
      class="static top-0 left-0 z-20 mt-20 flex w-full flex-col xl:absolute"
    >
      <Step :n="'01'" :content="processContent[1]" :margin="'20%'" />
      <Step
        class="mt-[-7%]"
        :n="'02'"
        :content="processContent[2]"
        :margin="'0%'"
      />
      <Step class="" :n="'03'" :content="processContent[3]" :margin="'0%'" />
      <Step
        class="mt-[16%]"
        :n="'04'"
        :content="processContent[4]"
        :margin="'40%'"
      />
      <Step
        class="mt-[8%]"
        :n="'05'"
        :content="processContent[5]"
        :margin="'20%'"
      />
      <Step
        class="mt-[-4%]"
        :n="'06'"
        :content="processContent[6]"
        :margin="'20%'"
      />
    </div>
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
