<template>
    <TempleteVue :datas="datas">    
        <template #image>
            <img src="/Img/intario.jpg" alt="">
        </template>    
    </TempleteVue>
</template>

<script setup>
import { ref } from "vue";
import TempleteVue from "./Templete.vue";
const datas  = ref([
    {name:"Some Random Breakfast",price:100,status:'recommended',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Breakfas1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Breakfas1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Breakfas1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Breakfas1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Breakfas1",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Breakfas2",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
    {name:"Some Random Breakfas3",price:100,status:'',info:'Ricotta, radicchio, prosciutto salad, cabernet.'},
])

</script>

<style>

</style>