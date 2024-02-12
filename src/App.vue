<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "@/components/Sections/HeaderVue.vue";
import FooterVueVue from "./components/Sections/FooterVue.vue";
import NewsLetterVue from "./components/Sections/Homepage/NewsLetter.vue";


</script>
<template  >
  <div>
    <div class="fixed top-0 z-50 w-full" >
      <HeaderVue  />
    </div>
    <div>
      <RouterView />
    </div>
    <div>
      <NewsLetterVue/>
      <FooterVueVue style="background-attachment:fixed"/>
    </div>
  </div>
</template>

