<template>
    <section class="container">

        <div class="row">
            <div class="col-lg-8" v-if="Home">
              <h1 class="display-4 fw-bold">{{ Home.home_Title }}</h1>
              <p class="lead mt-2 mb-4">{{ Home.home_Summary }}</p>
              <div>
                <a href="#work" class="btn btn-brand">View My Work</a>
              <a href="#contact" class="link-custom px-2">Call (+27)081 319 8477</a>
              </div>
            </div>
          </div>
        <!-- <div class="row">
            <h1>Hi I'm Alive</h1>
        </div>
        <div class="row">
            <img src="../assets/logo.png" alt="#">
            <p v-if ="Home">
                <span>{{ Home?.home_Title }}</span>
            </p>
            <div v-else>
                <div class="spinner-border" role="status"></div>
            </div>
        </div>-->
    </section>
</template>
<script setup>
import{computed, onMounted} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
const Home = computed( ()=> store.state.Home)
onMounted(()=>{
    store.dispatch('fetchHome')
    console.log(Home);

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

  /* /btn/ */

  .link-custom{
    font-weight: 700;
    position: relative;
    
    &:hover{
      color: var(--Color-Header-Blossom);
    }
      
    }   
  .link-custom::after{
    content: "";
    width: 0%;
    height: 2px;
    background-color: var(--Color-Header-Blossom);
    position: absolute;
    left:0;
    top: 110%;
    transition: all 0.5s ease;
    }
    .link-custom:hover::after{
      width:100%;
      transition: all 0.5 ease-in;
    }
</style>