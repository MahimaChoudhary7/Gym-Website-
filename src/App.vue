<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';
import Features from './components/Features.vue';
import Explore from './components/Explore.vue';
import Trainer from './components/Trainer.vue';

export default {
  components: {
    Navbar,
    Hero,
    Features,
    Explore,
    Trainer,
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
    <Footer/>
  </div>
</template>