import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'

const portURL = "https://imaraansheldon.github.io/EOMP/data"

export default createStore({
  state: {
    Home : null,
    Services_Head : null,
    Services : null,
    Work_Head : null,
    Work : null,
    About : null,
    Education: null,
    Experience: null,
    Skills_Head : null,
    Skills : null,
    Testimonials_Head : null,
    Testimonials : null,
  },
  getters: {
  },
  mutations: {
    setHome(state, value){
      state.Home = value
    },
    setServices_Head(state, value){
      state.Services_Head = value
    },
    setServices(state, value){
      state.Services = value
    },
    setWork_Head(state, value){
      state.Work = value
    },
    setWork(state, value){
      state.Work = value
    },
    setAbout(state, value){
      state.About = value
    },
    setEducation(state, value){
      state.Education = value
    },
    setExperience(state, value){
      state.Experience = value
    },
    setSkills_Head(state, value){
      state.Skills_Head = value
    },
    setSkills(state, value){
      state.Skills = value
    },
    setTestimonials(state, value){
      state.Testimonials = value
    },
    setTestimonials_Head(state, value){
      state.Testimonials_Head = value
    },
  },
  actions: {
    // Home or Landing Page
    async fetchHome(context){
      let {Home} = await (await axios.get(portURL)).data
      context.commit("setHome", Home)
    },
    async fetchServices_Head(context) {
      // Services Header
      try {
        const { Services_Head } = await (await axios.get(portURL)).data
        context.commit('setServices_Head', Services_Head);
        // console.log(Services_Head);
      } catch (e) {
          Swal.fire ({
            section_Name:"Name Not Found: Error ^(--)^",
            section_Sub:"Sub-name Not Found: Error ^(--)^"
          })
      }
    },
    async fetchServices(context) {
      // Services
      try {
        const { Services } = await (await axios.get(portURL)).data
        context.commit('setServices', Services);
        // console.log(Services);
      } catch (e) {
          Swal.fire ({
            services_Name:"Name Not Found: Error ^(--)^",
            services_Description:"Description Not Found: Error ^(--)^",
            services_Type:"Type Not Found: Error ^(--)^"
          })
      }
    },
    async fetchWork_Head(context) {
      // Work Head
      try {
        const { Work_Head } = await (await axios.get(portURL)).data
        context.commit('setWork_Head', Work_Head);
        console.log(Work_Head);
      } catch (e) {
          Swal.fire ({
            services_Name:"Name Not Found: Error ^(--)^",
            services_Description:"Description Not Found: Error ^(--)^",
            services_Type:"Type Not Found: Error ^(--)^"
          })
      }
    },
    async fetchWork(context) {
      // Work
      try {
        const { Work } = await (await axios.get(portURL)).data
        context.commit('setWork', Work);
        console.log(Work);
      } catch (e) {
          Swal.fire ({
            services_Name:"Name Not Found: Error ^(--)^",
            services_Description:"Description Not Found: Error ^(--)^",
            services_Type:"Type Not Found: Error ^(--)^"
          })
      }
    },
  },
  modules: {
  }
})
