<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';
import Features from './components/Features.vue';
import Explore from './components/Explore.vue';
import Trainer from './components/Trainer.vue';
import Testimonial from './components/Testimonial.vue';

export default {
  components: {
    Navbar,
    Hero,
    Features,
    Explore,
    Trainer,
    Testimonial,
    Footer
  }
};

</script>

<template>
  <div>
    <Navbar />
    <Hero />
    <Features/>
    <Explore/>
    <Trainer/>
    <Testimonial/>
    <Footer/>
  </div>
</template>