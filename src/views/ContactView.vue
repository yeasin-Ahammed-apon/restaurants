
<template>
  <BackGroundImageTempleteVue
    :imgLocation="'/Img/pizza.jpg'"
    imgPostion="bg-center"
    bgGradient="gra-ltr-dark"
    style="background-attachment:fixed"
  >
  <div class="flex justify-center items-center h-screen">
    <span v-motion
    :initial="{opacity:0,y:100,scale:.8}"
    :enter="{opacity:1,y:0,scale:1}"       
    class="text-2xl md:text-9xl text-white font-extrabold">
        Contact Page
    </span>
  </div>
  </BackGroundImageTempleteVue>
</template>

<script setup>
import BackGroundImageTempleteVue from "@/components/BackGroundImageTemplete.vue";
</script>

