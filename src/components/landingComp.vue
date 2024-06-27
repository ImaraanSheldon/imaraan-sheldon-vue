<template>
    <div class="container">
        <div class="row">
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
        </div>
    </div>
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