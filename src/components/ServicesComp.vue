<template>
  <div class="container">
    <div class="row pb-4 text-center text-md-start" data-aos="fade-up" data-aos-duration="1000">
      <div class="col-lg-8" v-if="Services_Head">
        <h6 class="text-brand">{{ Services_Head.section_Name }}</h6>
        <h1>{{ Services_Head.section_Sub }}</h1>
      </div>
    </div>

    <div class="row gy-4" v-if="Services?.length">

      <div class="col-md-4" v-for="x in Services" :key="x.id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <div class="service h-100 p-4 bg-base rounded-4 shadow-effect">
          <div class="iconbox mb-4 rounded-4">
            <i class="p-3 las la-feather"></i>
          </div>
          <h3 class="mb-4">{{ x.services_Name }}</h3>
          <p>{{ x.services_Description }}</p>
          <a href="#About" class="link-custom">{{ x.services_Type }}</a>
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
const Services_Head = computed(() => store.state.Services_Head)
const Services = computed(() => store.state.Services)
onMounted(() => {
  store.dispatch('fetchServices_Head')
  console.log(Services_Head);
  store.dispatch('fetchServices')
  console.log(Services);

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
  /* @media (min-width: 768px){
    .min{
      min-height: auto; 
      min-height: 500px
    }

  } */

</style>
