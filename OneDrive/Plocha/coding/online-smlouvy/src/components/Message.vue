<script setup lang="ts">
interface MessageProps {
  message: string
  img: string
  corner_side: string
}

const props = defineProps<MessageProps>()
</script>

<template>
  <div class="absolute">
    <div
      class="block min-w-max rounded-md bg-gray-400 bg-opacity-40 px-8 py-5 text-2xl font-bold text-white"
    >
      {{ message }}
    </div>

    <div
      class="relative left-32 h-6 w-6 bg-gray-400 bg-opacity-40"
      :class="'corner-' + corner_side"
    ></div>

    <div class="relative -top-32 left-4 h-12 w-12">
      <img class="rounded-full" :src="img" alt="profile-pic-2" />
    </div>
  </div>
</template>

<style>
.corner-right {
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%);
}

.corner-left {
  clip-path: polygon(0% 0%, 90% 0%, 0% 100%);
}
</style>
