<template>
  <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:mt-20">
    <div class="m-5 order-1"><slot name="image"/></div>
    <div class="order-2">
      <ul>
            <li v-for="data in datas" :key="data" class="text-white mx-4">
              <div class="flex align-baseline">
                <h1 class="text-lg whitespace-nowrap font-extrabold "> {{ data.name }} </h1>
                  <span class="overflow-hidden mx-5">
                    <span v-for="d in 600" :key="d">.</span>
                  </span>
              <h3>  ${{ data.price }} </h3>
              </div>
              <div class="font-semibold ">
                {{ data.info }}
              </div>
                                
              </li>            
        </ul>        
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["datas"]);

</script>

<style>

</style>