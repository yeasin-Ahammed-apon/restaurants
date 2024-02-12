<template>
    <BackGroundImageTempleteVue
      :imgLocation="'/Img/pizza.jpg'"
      imgPostion="bg-center"
      bgGradient="gra-ltr-dark"
    >
      <div class="grid md:grid-cols-2 items-center pb-10">        
          <img class="bg-cover" src="/Img/intario2.jpg" alt="" />        
        <div v-motion
    :initial="{opacity:0,y:100}"
    :visible="{opacity:1,y:0}"    class="duration-700  flex justify-center text-center">                      
            <div class="p-3 ">                    
                        <div  class=" text-xl text-yellow-400 md:my-6">NEWSLETTER</div>
                        <div  class="md:text-3xl text-xl text-gray-50 font-extrabold uppercase md:my-6">
                            <span class="md:whitespace-nowrap">Subscribe our Newsletter</span>                             
                        </div>  
                        <div  class=" text-xl text-white md:my-6">To get latest updates, offers and promotions</div>
                        <div class="flex justify-center mt-4">
                            <input type="text" class="w-full" placeholder="Email">
                            <button class="text-white font-bold text-xl px-4 py-1  border-2 border-slate-50 transition hover:scale-105 hover:bg-yellow-400 duration-200 delay-75 ">
                                Subscribe
                            </button>
                        </div>
                        <div  class=" text-gray-50 md:my-6">
                            Call for Reservation
                            <span class="text-yellow-400">
                                +01234 567 891                            
                            </span>
                        </div>                          
                        
                        
                        
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