<template>
  <div>
    <Title />
    <About />
    <HotLine/>
    <Transfer/>
    <Map/>
    <Reviews />
    <Slider />
    <Footer />
  </div>
</template>

<script>
import Slider from '../components/Slider.vue';
import Title from "@/components/Title.vue";
import About from "@/components/About.vue";
import HotLine from "@/components/HotLine.vue";
import Transfer from "@/components/Transfer.vue";
import Map from "@/components/Map.vue";
import Reviews from "@/components/Reviews.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: 'Home',
  components: {
    Footer,
    Reviews,
    Map,
    HotLine,
    Transfer,
    About,
    Title,
    Slider
  }
};
</script>

<style>
h1 {
  color: #333;
}

p {
  color: #666;
}


</style>
