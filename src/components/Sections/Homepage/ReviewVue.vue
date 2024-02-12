<template>
  <BackGroundImageTempleteVue
    :imgLocation="'/Img/pizza.jpg'"
    imgPostion="bg-center"
    bgGradient="gra-ltr-dark"    
  >
    <div>
      <div
        data-aos="fade-up"   
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 pb-10">
        <div class="relative gra-dark-red p-4 mx-2 rounded-lg " v-for="data in datas" :key="data">          
            <div class="z-20 relative">
              <div class="text-white text-xl font-light">
                <span class="text-4xl font-extrabold">"</span>
                {{ data.comment }}
                <span class="text-xl font-extrabold">"</span>
              </div>     
              <div class="text-yellow-300 font-bold text-xl">{{ data.name }}</div>     
              <div class="text-white text-sm">{{ data.designation }}</div>                     
            </div>
            <div class="mx-5 p-5 z-10">
              <img class="border-2 border-white rounded-full gra-red-dark  absolute bottom-10 right-10  h-1/3 " :src="data.img" alt="">              
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
    {name:"Some Random name",designation:"CEO, Reputed Company",img:"/Img/avatar.png",comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, non? Facilis culpa magnam labore libero, explicabo natus animi optio consectetur repudiandae nihil perferendis laborum dolore enim itaque vel illo quos!"},
    {name:"Some Random name1",designation:"CEO, Reputed Company",img:"/Img/avatar.png",comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, non? Facilis culpa magnam labore libero, explicabo natus animi optio consectetur repudiandae nihil perferendis laborum dolore enim itaque vel illo quos!"},
    {name:"Some Random name2",designation:"CEO, Reputed Company",img:"/Img/avatar.png",comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, non? Facilis culpa magnam labore libero, explicabo natus animi optio consectetur repudiandae nihil perferendis laborum dolore enim itaque vel illo quos!"},
    {name:"Some Random name3",designation:"CEO, Reputed Company",img:"/Img/avatar.png",comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, non? Facilis culpa magnam labore libero, explicabo natus animi optio consectetur repudiandae nihil perferendis laborum dolore enim itaque vel illo quos!"},
])
</script>
  
  <style>
</style>