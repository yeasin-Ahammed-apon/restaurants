
<template>
  <BackGroundImageTempleteVue
    :imgLocation="'/Img/pizza.jpg'"
    imgPostion="bg-center"
    bgGradient="gra-ltr-dark"
    style="background-attachment:fixed"
  >
  <div class="flex justify-center items-center h-screen">
    <span data-aos="fade-up"       
    class="duration-700 text-2xl md:text-9xl text-white font-extrabold">
        Contact Page
    </span>
  </div>
  </BackGroundImageTempleteVue>
</template>

<script setup>
import BackGroundImageTempleteVue from "@/components/BackGroundImageTemplete.vue";
</script>

