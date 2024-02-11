<template>
 <div>
    <LandingVueVue class="bg-fixed" />        
    <ShortIntorVueVue/>
    <SpecialMenuVue class="bg-fixed"/>
    <QualityVueVue/>
    <EventBookingVue class="bg-fixed"/>
    <ReviewVue/>
    <BlogVueVue class="bg-fixed"/>
    

    

 </div>
</template>
<script setup>

import BlogVueVue from '@/components/Sections/Homepage/BlogVue.vue';
import EventBookingVue from '@/components/Sections/Homepage/EventBooking.vue';
import LandingVueVue from '@/components/Sections/Homepage/LandingVue.vue';
import QualityVueVue from '@/components/Sections/Homepage/QualityVue.vue';
import ReviewVue from '@/components/Sections/Homepage/ReviewVue.vue';
import ShortIntorVueVue from '@/components/Sections/Homepage/ShortIntorVue.vue';
import SpecialMenuVue from '@/components/Sections/Homepage/SpecialMenu.vue';


</script>