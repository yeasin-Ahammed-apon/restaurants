<template>
    <BackGroundImageTempleteVue
      :imgLocation="'/Img/pizza.jpg'"
      imgPostion="bg-center"
      bgGradient="gra-ltr-dark"
    >
      <div class="grid md:grid-cols-2 items-center">
        <div class="order-1">
          <img class="bg-cover" src="/Img/intario2.jpg" alt="" />
        </div>      
        <div v-motion-slide-visible-once-bottom class="order-2 duration-700">                      
             <div class=" grid md:grid-cols-2 grid-cols-1 justify-center content-center items-center gap-4">
                <div class="p-3 text-center">                    
                        <div  class=" text-xl text-yellow-400 md:my-6">QUALITY & BALANCE</div>
                        <div  class="md:text-3xl text-xl text-gray-50 font-extrabold uppercase md:my-6">
                            <span class="md:whitespace-nowrap">An Extraordinary</span> <br>
                            Experience for all                                                        
                    </div>  
                </div>
                <div class="">                    
                    <div class="w-fit">
                        <img class="px-10 md:px-20 animate-pulse rounded-lg " src="/Img/food1.jpg" alt="">                    
                    </div>
                </div>
                <div v-for="(data,index) in datas" :key="index" class="gra-dark-red p-1 md:m-3 rounded-lg mx-2 px-3 py-10">                    
                        
                            <div  class=" text-xl font-extrabold text-yellow-400 md:my-6">{{ data.name }}</div>
                            <div  class="  text-gray-50  md:my-6 text-wrap">
                                <span class="">{{ data.info }}</span> <br>                                
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
  const datas =  ref([
    {name:"Passionate Chef",info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta tenetur veritatis perferendis asperiores? Sunt minus hic nam nihil iure eius saepe asperiores adipisci quam architecto, quisquam quis alias quaerat exercitationem."},
    {name:"100% Fresh Food",info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta tenetur veritatis perferendis asperiores? Sunt minus hic nam nihil iure eius saepe asperiores adipisci quam architecto, quisquam quis alias quaerat exercitationem."},
    {name:"Memorable Ambience",info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta tenetur veritatis perferendis asperiores? Sunt minus hic nam nihil iure eius saepe asperiores adipisci quam architecto, quisquam quis alias quaerat exercitationem."},
    {name:"Special Dish for Occasion's",info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta tenetur veritatis perferendis asperiores? Sunt minus hic nam nihil iure eius saepe asperiores adipisci quam architecto, quisquam quis alias quaerat exercitationem."},        
  ])
  </script>
  
  <style>
  </style>