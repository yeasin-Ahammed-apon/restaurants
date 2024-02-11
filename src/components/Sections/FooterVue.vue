<template>
    <BackGroundImageTempleteVue
      :imgLocation="'/Img/pizza.jpg'"
      imgPostion="bg-center"
      bgGradient="gra-ltr-dark"
    >
      <div class="text-white grid grid-cols-1  md:grid-cols-4 pt-10 pb-20 px-2 md:px-10">            
        <div class="md:mt-0 mt-10">
          <div class="text-4xl">logo</div>
          <div class="mt-4">
            Logo is one of the most popular <br> Restaurant & special menu made <br> by our passionate chefs
          </div>
          <div class="font-bold mt-6">                        
            <i class="me-4 border-2 border-white p-2 rounded-full bi bi-facebook"></i>
            <i class="me-4 border-2 border-white p-2 rounded-full bi bi-whatsapp"></i>
            <i class="me-4 border-2 border-white p-2 rounded-full bi bi-instagram"></i>
          </div>

        </div>  
        <div class="md:mt-0 mt-10">
          <div class="text-4xl font-bold">Restaurant</div>
          <div class="my-4" ><a href="#">About us</a></div>
          <div class="my-4" ><a href="#">Our Menu</a></div>
          <div class="my-4" ><a href="#">Book a Table</a></div>
          <div class="my-4" ><a href="#">Blog Post</a></div>
          <div class="my-4" ><a href="#">Contact</a></div>
        </div>
        <div class="md:mt-0 mt-10">          
          <div class="text-4xl font-bold">Information</div>
          <div class="my-4">
            <a href="#">    Terms & Conditions</a>
          </div>
          <div class="my-4">
            <a href="#">    24/7 Service</a>
          </div>
          <div class="my-4">
            <a href="#">    Style Guide</a>
          </div>
          <div class="my-4">
            <a href="#">    Licenses</a>
          </div>
          <div class="my-4">
            <a href="#">    Change Log</a>
          </div>

          
        </div>
        <div class="md:mt-0 mt-10">          
          <div class="text-4xl font-bold">Contact info</div>
          <div class="my-4">            
            245 D, South City,<br> Mixed Tower Main town,<br> New York, USA            
          </div>
          <div class="my-4">            
            info@examplesite.com
            admin@examplesite.com            
          </div>
          <div class="my-4">            
            +12345 678 910          
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