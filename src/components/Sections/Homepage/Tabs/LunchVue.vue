<template>
    <TempleteVue :datas="datas">    
        <template #image>
            <div class="flex justify-center">
                <img class="w-1/2 h-1/2" src="/Img/pizza.jpg" alt="">
            </div>
        </template>    
    </TempleteVue>
</template>

<script setup>
import { ref } from "vue";
import TempleteVue from "./Templete.vue";
const datas  = ref([
    {name:"Some Random Lunch",price:100,status:'recommended',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Lunch1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Lunch1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Lunch1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Lunch1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Lunch1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Lunch2",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Lunch3",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
])

</script>

<style>

</style>