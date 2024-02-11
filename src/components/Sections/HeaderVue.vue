<template>
  <div class="  w-full flex justify-between align-text-bottom text-white gap-1 bg-gradient-to-r from-slate-950 via-transparent to-red-600    " style="flex-wrap: wrap;background: linear-gradient(90deg, rgba(182,0,0,0.5158263134355305) 4%, rgba(0,0,0,0.6614845767408526) 81%);">        
        <div class="py-1">
            <RouterLink to="/" class="text-4xl p-2" >Logo</RouterLink>    
        </div>
        <div class="py-1 flex flex-wrap">
            <RouterLink class="text-2xl font-semibold  rounded-lg p-4 hover:bg-gradient-to-r hover:from-slate-900 hover:to-transparent" to="/" >Home</RouterLink>
            <RouterLink class="text-2xl font-semibold  rounded-lg p-4 hover:bg-gradient-to-r hover:from-slate-900 hover:to-transparent" to="/about" >About</RouterLink>
            <RouterLink class="text-2xl font-semibold  rounded-lg p-4 hover:bg-gradient-to-r hover:from-slate-900 hover:to-transparent" to="/blog" >Blog</RouterLink>
            <RouterLink class="text-2xl font-semibold  rounded-lg p-4 hover:bg-gradient-to-r hover:from-slate-900 hover:to-transparent" to="/contact" >Contact</RouterLink>
            
        </div>
    
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

</script>

<style>

</style>