<template>
  <div class="Content-Wrapper">
    <section class="full-height px-lg-5" id="landing">
      <landingComp/>
    </section>
    <section class="full-height px-lg-5" id="services">
      <ServicesComp/>
    </section>
    <section class="full-height px-lg-5" id="work">
      <WorkComp/>
    </section>
    <section class="full-height px-lg-5" id="about">
      <AboutComp/>
    </section>
    <section class="full-height px-lg-5" id="skills">
      <SkillsComp/>
    </section>
    <section class="full-height px-lg-5" id="testimonials">
      <TestiComp/>
    </section>
    <section class="full-height px-lg-5" id="contact"></section>
  </div>
</template>

<script>
import landingComp from "@/components/landingComp.vue";
import ServicesComp from "@/components/ServicesComp.vue";
import WorkComp from "@/components/WorkComp.vue";
import AboutComp from "@/components/AboutComp.vue";
import SkillsComp from "@/components/SkillsComp.vue";
import TestiComp from "@/components/TestiComp.vue";

export default {
  name: 'HomeView',
  components: {
    landingComp,
    ServicesComp,
    WorkComp,
    AboutComp,
    SkillsComp,
    TestiComp
  }
}
</script>
