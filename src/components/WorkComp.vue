<template>
    <div class="container">
      <div class="row pb-4 text-center text-md-start" data-aos="fade-up" data-aos-duration="1000">
        <div class="col-lg-8">
          <h6 class="text-brand">Work</h6>
          <h1>My Recent Projects</h1>
        </div>
      </div>
  
      <div class="row gy-4" v-if="Work?.length">
  
        <div class="col-md-6 mb-4" v-for="x in Work" :key="x.id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <div class="custom-card rounded-4 p-2 bg-base shadow-effect">
            <div class="custom-card-image rounded-4">
              <img :src="x.img" alt="Ikumi<3">
            </div>
            <div class="custom-card-content">
                <h4 class="my-3">{{ x.title }}</h4>
                <p>{{ x.description }}</p>
                <div class="d-flex justify-content-evenly">
                    <a :href="x.github" class="btn btn-brand" target="_blank">View Github</a>
                    <a :href="x.hosted" class="btn btn-brand" target="_blank">View Project</a>
                </div>
            </div>
            <!-- <a href="#About" class="link-custom">{{ x.services_Type }}</a> -->
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
  const Work = computed(() => store.state.Work)
  onMounted(() => {
    store.dispatch('fetchWork')
    console.log(Work);
  
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
      color: var(--Color-Background2-Juniper);
    }
  
  </style>
  