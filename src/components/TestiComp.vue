<template>
  <div class="container">
    <div class="row pb-4 text-center text-md-start" data-aos="fade-up" data-aos-duration="1000">
      <div class="col-lg-8">
        <h6 class="text-brand">Testimonials</h6>
        <h1>What People Think of Me</h1>
      </div>
    </div>

    <div class="row gy-4 mx-1" v-if="Testimonials?.length">
      <div v-for="x in Testimonials" :key="x.id" class="col-md-6 col-lg-4">
        <div class="card h-100 testimonial-card" data-aos="fade-up" data-aos-duration="1000">
          <div class="card-head">
            <img :src="x.profile" :alt="x.name">
          </div>
          <div class="card-body">
            <p class="card-text">{{ x.name }}</p>
            <h5 class="card-title">{{ x.relationship }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ x.testimonial }}</h6>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import AOS from 'aos'
import 'aos/dist/aos.css'

const store = useStore()
const Testimonials = computed(() => store.state.Testimonials)

onMounted(() => {
  store.dispatch('fetchTestimonials')
  AOS.init()
})
</script>

<style scoped>
/* Base styling on Header tags */
h1, h2, h3, h4, h5, h6 {
  color: var(--Color-Header-Blossom);
  font-weight: 700;
}

/* Button */
.btn {
  padding: 12px 28px;
  font-weight: 700;
  color: var(--Color-Text-Fondant);
}

.btn-brand {
  background-color: var(--Color-Accent-Pinot);
  color: var(--Color-Header-Blossom);
  border-color: var(--Color-Header-Blossom);
}
.btn-brand:hover,
.btn-brand:focus {
  background-color: var(--Color-Background-Charcoal);
  color: var(--Color-Header-Blossom);
  border-color: var(--Color-Header-Blossom);
}

/* Anchor tag */
a {
  text-decoration: none;
  color: var(--Color-Text-Fondant);
  transition: all 0.4s ease;
  font-family: var(--Font-Main-Hammersmith);
}
a:hover {
  color: var(--Color-Header-Blossom);
}

/* Testimonial card styling */
.testimonial-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border:4px solid var(--Color-Background2-Juniper);
  background-color:var(--Color-Background2-Juniper);
}
.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.testimonial-card .card-body {
  padding: 20px;
  text-align: center;
}
.testimonial-card .card-text {
  font-size: 1.1em;
  margin-bottom: 15px;
}
.testimonial-card .card-title {
  font-size: 1.25em;
  margin-bottom: 5px;
}
.testimonial-card .card-subtitle {
  font-size: 1em;
  color: var(--Color-Text-Fondant);
}
</style>
  