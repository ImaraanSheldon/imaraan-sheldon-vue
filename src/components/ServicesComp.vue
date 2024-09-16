<template>
  <div class="container">
    <div class="row pb-4 text-center text-md-start" data-aos="fade-up" data-aos-duration="1000">
      <div class="col-lg-8" v-if="Services_Head">
        <h6 class="text-brand">{{ Services_Head.section_Name }}</h6>
        <h1>{{ Services_Head.section_Sub }}</h1>
      </div>
    </div>
    
    <div class="d-flex justify-content-center text-brand text-start lead mb-5">Imraan Sheldon, originally from Cape Town, is a dedicated full-stack developer with a deep passion for programming. With a solid foundation in both front-end and back-end technologies, Imraan combines his technical expertise with a creative approach to problem-solving. His love for coding drives him to continually explore new tools and techniques, aiming to craft innovative solutions and build dynamic web applications.</div>
    
    
    <div class="row py-4 text-center text-md-start" data-aos="fade-up" data-aos-duration="1000">
      <div class="col-lg-8">
        <h6 class="text-brand">Skills</h6>
        <h1>My Skills</h1>
      </div>
    </div>
    
    <div class="row gy-4 pb-5" v-if="Services?.length">

      <div class="col-md-4" v-for="x in Services" :key="x.id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <div class="service h-100 p-4 bg-base rounded-4 shadow-effect">
          <div class="iconbox mb-4 rounded-4">
            <i class="p-3 las la-feather"></i>
          </div>
          <h3 class="mb-4">{{ x.services_Name }}</h3>
          <p>{{ x.services_Description }}</p>
          <!-- <a href="#work" class="link-custom">{{ x.services_Type }}</a> -->
        </div>
      </div>
    </div>
    <div v-else class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

    <div class="row gy-2" v-if="Skills?.length">
      
      <div class="col-md-4" v-for="x in Skills" :key="x.id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div class="d-flex justify-content-start align-items-baseline">
                <div class="iconbox mb-4 rounded-4 me-2">
                  <i :class="x.logo"></i>
                </div>
                <h3 class="mb-4">{{ x.name }}</h3>
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
const store = useStore()
const Services_Head = computed(() => store.state.Services_Head)
const Services = computed(() => store.state.Services)
const Skills = computed(() => store.state.Skills)
onMounted(() => {
  store.dispatch('fetchServices_Head')
  console.log(Services_Head);
  store.dispatch('fetchServices')
  console.log(Services);
  store.dispatch('fetchSkills')

})
</script>

<style scoped>
.service {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service > :last-child {
  margin-top: auto; /* Pushes the last child (the link) to the bottom */
}
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
