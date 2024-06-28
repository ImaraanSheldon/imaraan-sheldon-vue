<template>
  <div class="container Content-Wrapper">
    <section class="full-height px-lg-5" id="landing">
      <landingComp/>
    </section>
    <section class="full-height px-lg-5" id="services"></section>
    <section class="full-height px-lg-5" id="work"></section>
    <section class="full-height px-lg-5" id="about"></section>
    <section class="full-height px-lg-5" id="skills"></section>
    <section class="full-height px-lg-5" id="testimonials"></section>
    <section class="full-height px-lg-5" id="contact"></section>
  </div>
</template>

<script>
import landingComp from "@/components/landingComp.vue";

export default {
  name: 'HomeView',
  components: {
    landingComp
  },
  computed:{
    Home() {
      return this.$store.state.Home
    }
  },
  mounted(){
    this.$store.dispatch('fetchHome')
  }
}
</script>
