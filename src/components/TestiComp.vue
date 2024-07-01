<template>
    <div class="container">
      <div class="row pb-4 text-center text-md-start" data-aos="fade-up" data-aos-duration="1000">
        <div class="col-lg-8">
          <h6 class="text-brand">Testimonials</h6>
          <h1>What People Think of Me</h1>
        </div>
      </div>
  
      <div class="row gy-2" v-if="Testimonials?.length">
  
        <div class="col-md-4" v-for="x in Testimonials" :key="x.id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div class="d-flex justify-content-start align-items-baseline">
                <div class="iconbox mb-4 rounded-4 me-2">
                  <i :class="x.logo"></i>
                </div>
                <h3 class="mb-4">{{ x.name }}</h3>
              </div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
    </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  const Testimonials = computed(() => store.state.Testimonials)
  onMounted(() => {
    store.dispatch('fetchTestimonials')
    console.log(Testimonials);
  
  })
  </script>
  
  <style scoped>
  /* Base styling on Header tags */
  h1,h2,h3,h4,h5,h6{
      color: var(--Color-Header-Blossom);
      font-weight: 700;
    }
   /* btn */
   .btn{
      padding: 12px 28px;
      font-weight: 700;
      color: var(--Color-Text-Fondant);
    }
  
    .btn-brand{
      background-color: var(--Color-Accent-Pinot);
      color: var(--Color-Header-Blossom);
      border-color: var(--Color-Header-Blossom);
      &:hover,
       :focus{
        background-color: var(--Color-Background-Charcoal);
        color: var(--Color-Header-Blossom);
        border-color: var(--Color-Header-Blossom);
       }
    }
    /* Base styling on achor tag */
    a{
      text-decoration: none;
      color: var(--Color-Text-Fondant);
      transition: all 0.4s ease;
      font-family: var(--Font-Main-Hammersmith);
    }
    a:hover{
      color: var(--Color-Header-Blossom);
    }
  
  </style>
  