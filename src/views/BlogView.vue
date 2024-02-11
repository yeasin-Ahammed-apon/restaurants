<template>
    <div>
      <BackGroundImageTempleteVue
      :imgLocation="'/Img/pizza.jpg'"
      imgPostion="bg-center"
      bgGradient="gra-ltr-dark"
      
    >
    <div class="flex justify-center items-center h-screen">
        <span v-motion-slide-visible-once-bottom class="duration-700 text-2xl md:text-9xl text-white font-extrabold">
          Blog Page
      </span>
    </div>
    </BackGroundImageTempleteVue>
  <BlogVueVue class="bg-fixed"/>    
    </div>
  </template>
  <script setup>
  import BackGroundImageTempleteVue from '@/components/BackGroundImageTemplete.vue';
import BlogVueVue from '@/components/Sections/Homepage/BlogVue.vue';
  
  </script>