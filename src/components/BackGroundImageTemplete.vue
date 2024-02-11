<template>
  <div
    :class="`border-blur ${imgPostion} bg-repeat-y`"
    :style="`background-image: url(${imgLocation})`"
  >
    <div :class="` w-full ${bgGradient||''}  `">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["imgLocation", "imgPostion","bgGradient"]);
</script>