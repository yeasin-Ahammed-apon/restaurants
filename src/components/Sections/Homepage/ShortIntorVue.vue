<template>
  <BackGroundImageTempleteVue
    :imgLocation="'/Img/pizza.jpg'"
    imgPostion="bg-center"
    bgGradient="gra-ltr-dark"
  >
    <div class="grid md:grid-cols-2">
      <div class="order-1 p-10 md:p-24">
        <img src="/Img/intario.jpg" class="border-4 p-4  border-yellow-300" alt="" />
      </div>      
      <div v-motion
    :initial="{opacity:0,y:100}"
    :visible="{opacity:1,y:0}"    class="order-2 duration-700 mt-10 ps-6 md:mt-20 md:pe-9">          
            <div  class=" text-xl text-yellow-300 md:my-6">FRESH & TASTY FOOD</div>
            <div  class="md:text-3xl text-4xl text-gray-50 font-extrabold uppercase md:my-6">
              A Sophisticated and <br>
              Traditional Cuisine
            </div>
            <div  class="text-xl text-gray-50   md:my-6">
              Logo is one of the most popular Restaurants with unique
              & special menu made by our passionate chefs with love and quality with can impress you
            </div>          
        </div>              
    </div>
  </BackGroundImageTempleteVue>
</template>

<script setup>
import BackGroundImageTempleteVue from "@/components/BackGroundImageTemplete.vue";
</script>

<style>
</style>