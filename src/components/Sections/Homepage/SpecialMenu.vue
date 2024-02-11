<template>
    <BackGroundImageTempleteVue
      :imgLocation="'/src/assets/Img/burger.jpg'"
      imgPostion="bg-center"
      bgGradient="gra-dark-dark"
      
    >
    <div>      
      <div v-motion-slide-visible-once-bottom class=" flex justify-center text-center duration-700  pt-10 ps-6  md:ps-9">          
            <div>
              <div  class=" text-xl text-yellow-300 md:my-6">TEST A LITTLE BIT</div>
            <div  class="md:text-3xl text-4xl text-gray-50 font-extrabold uppercase md:my-6">
              Our Special Menu
            </div>            
            </div>
        </div>              
      <div class="flex justify-center flex-wrap  pt-10 ">
        <button @click="activeTab=BreakFastTab" :class="`m-1 px-5 md:px-16 font-extrabold text-xl md:text-2xl py-2 text-white transition duration-500 delay-75 hover:bg-yellow-400 border-2 border-rose-100 mx-1` ">Break Fast</button>
        <button @click="activeTab=DinnerTab" :class="`m-1 px-5 md:px-16 font-extrabold text-xl md:text-2xl py-2 text-white transition duration-500 delay-75 hover:bg-yellow-400 border-2 border-rose-100 mx-1` ">Dinner</button>
        <button @click="activeTab=LunchVueTab" :class="`m-1 px-5 md:px-16 font-extrabold text-xl md:text-2xl py-2 text-white transition duration-500 delay-75 hover:bg-yellow-400 border-2 border-rose-100 mx-1` ">Lunch</button>        
      </div>
        <component v-motion-fade-visible-once class="duration-500 pb-20" :is="activeTab" />
    </div>      
    </BackGroundImageTempleteVue>
  </template>
  
  <script setup>
    import { ref, shallowRef } from "vue";
    import BackGroundImageTempleteVue from "@/components/BackGroundImageTemplete.vue";
    import BreakFastTab from '@/components/Sections/Homepage/Tabs/BreakFast.vue'
    import DinnerTab from '@/components/Sections/Homepage/Tabs/Dinner.vue'
    import LunchVueTab from '@/components/Sections/Homepage/Tabs/LunchVue.vue'
    
    
    
    const activeTab =  shallowRef(BreakFastTab)
    
  </script>
  
  <style>
  </style>