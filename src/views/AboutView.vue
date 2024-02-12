<template>
  <div>
    <BackGroundImageTempleteVue
    :imgLocation="'/Img/pizza.jpg'"
    imgPostion="bg-center"
    bgGradient="gra-ltr-dark"
    
  >
  <div class="flex justify-center items-center h-screen">
    <span v-motion
    :initial="{opacity:0,y:100}"
    :enter="{opacity:1,y:0}"     class="duration-700 text-2xl md:text-9xl text-white font-extrabold">
        About Page
    </span>
  </div>
  </BackGroundImageTempleteVue>
    <ShortIntorVueVue style="background-attachment:fixed"/>
  </div>
</template>
<script setup>
import BackGroundImageTempleteVue from '@/components/BackGroundImageTemplete.vue';
import ShortIntorVueVue from '@/components/Sections/Homepage/ShortIntorVue.vue';
</script>