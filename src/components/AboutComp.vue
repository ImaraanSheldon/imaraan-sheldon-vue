<template>
    <div class="">
        <div class="row pb-4 text-center text-md-start" data-aos="fade-up" data-aos-duration="1000">
            <div class="col-lg-8">
                <h6 class="text-brand">Education & Experience</h6>
                <h1>History</h1>
            </div>
        </div>

        <div class="row gy-4 mx-1 align-items-baseline" v-if="Education?.length && Experience?.length">

            <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Education</h4>
                <div class="rounded-4 bg-base shadow-effect mb-4 p-4" v-for="x in Education" :key="x.id" data-aos="fade-up" data-aos-duration="1000"
                    data-aos-delay="300">
                    <h4 class="headerTxt">{{ x.degree }}</h4>
                    <p class="text-brand mb-2">{{ x.school }}</p>
                    <p class="text-brand mb-0">
                        {{ x.degree_Description }}</p>
                </div>
            </div>

                <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                    <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Experience</h4>
                    <div class="rounded-4 bg-base shadow-effect mb-4 p-4" v-for="x in Experience" :key="x.id" data-aos="fade-up" data-aos-duration="1000"
                        data-aos-delay="300">
                        <h4 class="headerTxt">{{ x.job_Title }}</h4>
                        <p class="text-brand mb-2">{{ x.workplace }}</p>
                        <p class="text-brand mb-0">
                            {{ x.job_Description }}</p>
                    </div>
                </div>
        </div>
        <div v-else class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

        <!--<div class="row pb-4 text-center text-md-start" data-aos="fade-up" data-aos-duration="1000">
        <div class="col-lg-8" v-if="About">
          <h6 class="text-brand">{{ About.about_Name }}</h6>
          <p class="mx-auto">{{ About.about_Description }}</p>
          <h1>{{ About.about_Sub }}</h1>
        </div>
      </div>
  
      <div class="row gy-4" v-if="Education?.length">
  
        <div class="col-md-4" v-for="x in Education" :key="x.id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          <div class="service p-4 bg-base rounded-4 shadow-effect">
            <div class="iconbox mb-4 rounded-4">
              <i class="p-3 las la-feather"></i>
            </div>
            <h3 class="mb-4">{{ x.degree }}</h3>
            <p>{{ x.degree_Description }}</p>
            <a href="#About" class="link-custom">{{ x.school}}</a>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
    </div>-->
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const Education = computed(() => store.state.Education)
const Experience = computed(() => store.state.Experience)
onMounted(() => {
    store.dispatch('fetchEducation')
    console.log(Education);
    store.dispatch('fetchExperience')
    console.log(Experience);

})
</script>

<style scoped>
/* Base styling on Header tags */
h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--Color-Header-Blossom);
    font-weight: 700;
}

/* btn */
.btn {
    padding: 12px 28px;
    font-weight: 700;
    color: var(--Color-Text-Fondant);
}

.btn-brand {
    background-color: var(--Color-Accent-Pinot);
    color: var(--Color-Header-Blossom);
    border-color: var(--Color-Header-Blossom);

    &:hover,
    :focus {
        background-color: var(--Color-Background-Charcoal);
        color: var(--Color-Header-Blossom);
        border-color: var(--Color-Header-Blossom);
    }
}

/* Base styling on achor tag */
a {
    text-decoration: none;
    color: var(--Color-Text-Fondant);
    transition: all 0.4s ease;
    font-family: var(--Font-Main-Hammersmith);
}

a:hover {
    color: var(--Color-Header-Blossom);
}
</style>