<template>
    <TempleteVue :datas="datas">    
        <template #image>
            <div class="flex justify-center">
                <img class="w-1/2 h-1/2" src="/src/assets/Img/pizza.jpg" alt="">
            </div>
        </template>    
    </TempleteVue>
</template>

<script setup>
import { ref } from "vue";
import TempleteVue from "./Templete.vue";
const datas  = ref([
    {name:"Some Random Dinner",price:100,status:'recommended',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Dinner1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Dinner1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Dinner1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Dinner1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Dinner1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Dinner2",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Dinner3",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
])

</script>

<style>

</style>