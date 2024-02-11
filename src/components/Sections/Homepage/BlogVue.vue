<template>
    <BackGroundImageTempleteVue
      :imgLocation="'/public/Img/pizza.jpg'"
      imgPostion="bg-center"
      bgGradient="gra-ltr-dark"    
    >
      <div>
        <div
          v-motion-slide-visible-once-bottom
          class="flex justify-center items-center duration-700 pt-10 md:pt-20"
        >
          <div>
            <div class="text-xl text-yellow-300 md:my-6">FRESH & TASTY FOOD</div>
            <div
              class="md:text-3xl text-4xl text-gray-50 font-extrabold uppercase md:my-6"
            >
              A Sophisticated and <br />
              Traditional Cuisine
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 pb-10">
          <div class=" gra-dark-red p-4 mx-2 rounded-lg " v-for="data in datas" :key="data">          
              <div>
                    <img class="rounded-lg" :src="data.img" alt="">
                    <div class="my-2 text-lg text-yellow-300 font-bold ">{{ data.time }}{{data.name  }}</div>
                    <div class="text-white">{{ data.details }} ...</div>
                    <div class="flex justify-center">
                        <button class="text-white font-bold text-xl px-4 py-1  border-2 border-slate-50 transition hover:scale-105 hover:bg-yellow-400 duration-200 delay-75 ">
                            Book Now
                        </button>
                    </div>
              </div>
          </div>        
        </div>
      </div>
    </BackGroundImageTempleteVue>
  </template>
    
    <script setup>
  import BackGroundImageTempleteVue from "@/components/BackGroundImageTemplete.vue";
  import { ref } from "vue";
  const datas = ref([
      {name:"Some Random name",time:"Date:November 9, 2023 By: ",img:"/public/Img/intario.jpg",details:"It is very important to make healthy kitchen for fresh food"},
      {name:"Some Random name1",time:"Date:November 9, 2023 By: ",img:"/public/Img/intario.jpg",details:"It is very important to make healthy kitchen for fresh food"},
      {name:"Some Random name2",time:"Date:November 9, 2023 By: ",img:"/public/Img/intario.jpg",details:"It is very important to make healthy kitchen for fresh food"},      
  ])
  </script>
    
    <style>
  </style>