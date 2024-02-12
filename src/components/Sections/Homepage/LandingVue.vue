<template>  
    <BackGroundImageTempleteVue imgLocation='/Img/pizza.jpg'
      imgPostion="bg-center" bgGradient="gra-rtl-dark"
    >          
    <div 
    data-aos="fade-up"
     class=" duration-700 delay-200 h-screen pt-40 ps-6 md:pt-40 md:ps-9">          
            <div  class=" text-xl text-yellow-400 md:my-6">GET 35% DISCOUNT</div>
            <div  class="md:text-6xl text-4xl text-gray-50 font-extrabold uppercase md:my-6">
              Delicious & Mouth <br />
              Watering Test
            </div>
            <div  class="text-2xl text-gray-50 font-extrabold uppercase md:my-6">
              Best food made by our Passionate Ch1efs
            </div>          
        </div>              
    </BackGroundImageTempleteVue>  
</template>

<script setup>
import BackGroundImageTempleteVue from "@/components/BackGroundImageTemplete.vue";
</script>

<style>
</style>