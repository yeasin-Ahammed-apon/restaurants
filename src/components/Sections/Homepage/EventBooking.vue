<template>
    <BackGroundImageTempleteVue
      :imgLocation="'/Img/pizza.jpg'"
      imgPostion="bg-center"
      bgGradient="gra-ltr-dark"
    >
      <div class="grid md:grid-cols-2 items-center">
        <div class="md:order-2">
          <img class="bg-cover" src="/Img/intario2.jpg" alt="" />
        </div>      
        <div v-motion
    :initial="{opacity:0,y:100}"
    :enter="{opacity:1,y:0}"     class="duration-700 md:order-1">                      
            <div class="p-3 ">                    
                        <div  class=" text-xl text-yellow-400 md:my-6">EVENT BOOKING</div>
                        <div  class="md:text-3xl text-xl text-gray-50 font-extrabold uppercase md:my-6">
                            <span class="md:whitespace-nowrap">Do you have any plan</span> <br>                            
                            for any Party or Events?                  
                        </div>  
                        <div  class=" text-gray-50 md:my-6">
                            Call for Reservation
                            <span class="text-yellow-400">
                                +01234 567 891                            
                            </span>
                        </div>  
                        <div  class="text-xl font-bold mt-4 text-gray-50 md:my-6">
                            Opening Hours
                        </div>                          
                        <div class="mt-3">
                            <div class="flex justify-between text-white mx-1">
                                <span>Monday - Saturday</span> <span>7.30 am  -  11.30 pm</span>                                
                            </div>
                            <div class="flex justify-between text-white mx-1">
                                <span>Sunday</span> <span>7.30 am  -  11.30 pm</span>                                
                            </div>
                            <div class="flex justify-between text-white mx-1">
                                <span>Happy Hour</span> <span>7.30 am  -  11.30 pm</span>                                
                            </div>
                        </div>
                        <div class="flex justify-center mt-4">
                        <button class="text-white font-bold text-xl px-4 py-1  border-2 border-slate-50 transition hover:scale-105 hover:bg-yellow-400 duration-200 delay-75 ">
                            Book Now
                        </button>
                        </div>
                        
            </div>
            <div class="p-3 ">                 
                
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