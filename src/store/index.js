import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2";

const portURL = "https://imaraansheldon.github.io/EOMP/data";

export default createStore(
  {
    state: {
      Home: null,
      Services_Head: null,
      Services: null,
      Work: null,
      Education: null,
      Experience: null,
      Skills: null,
      Testimonials: null,
    },
    getters: {},
    mutations: {
      setHome(state, value) {
        state.Home = value;
      },
      setServices_Head(state, value) {
        state.Services_Head = value;
      },
      setServices(state, value) {
        state.Services = value;
      },
      setWork(state, value) {
        state.Work = value;
      },
      setEducation(state, value) {
        state.Education = value;
      },
      setExperience(state, value) {
        state.Experience = value;
      },
      setSkills(state, value) {
        state.Skills = value;
      },
      setTestimonials(state, value) {
        state.Testimonials = value;
      },
    },
    actions: {
      // Home or Landing Page
      async fetchHome(context) {
        let { Home } = await (await axios.get(portURL)).data;
        context.commit("setHome", Home);
      },
      async fetchServices_Head(context) {
        // Services Header
        try {
          const { Services_Head } = await (await axios.get(portURL)).data;
          context.commit("setServices_Head", Services_Head);
          // console.log(Services_Head);
        } catch (e) {
          Swal.fire({
            section_Name: "Name Not Found: Error ^(--)^",
            section_Sub: "Sub-name Not Found: Error ^(--)^",
          });
        }
      },
      async fetchServices(context) {
        // Services
        try {
          const { Services } = await (await axios.get(portURL)).data;
          context.commit("setServices", Services);
          // console.log(Services);
        } catch (e) {
          Swal.fire({
            services_Name: "Name Not Found: Error ^(--)^",
            services_Description: "Description Not Found: Error ^(--)^",
            services_Type: "Type Not Found: Error ^(--)^",
          });
        }
      },
      async fetchWork(context) {
        // Work
        try {
          const { Work } = await (await axios.get(portURL)).data;
          context.commit("setWork", Work);
          // console.log(Work);
        } catch (e) {
          Swal.fire({
            services_Name: "Name Not Found: Error ^(--)^",
            services_Description: "Description Not Found: Error ^(--)^",
            services_Type: "Type Not Found: Error ^(--)^",
          });
        }
      },
      async fetchSkills(context) {
        try {
          const { Skills } = await (await axios.get(portURL)).data;
          context.commit("setSkills", Skills);
          console.log(Skills);
        } catch (e) {
          Swal.fire({
            services_Name: "Name Not Found: Error ^(--)^",
            services_Description: "Description Not Found: Error ^(--)^",
            services_Type: "Type Not Found: Error ^(--)^",
          });
        }
      },
      async fetchEducation(context) {
        // Education
        try {
          const { Education } = await (await axios.get(portURL)).data;
          context.commit("setEducation", Education);
          console.log(Education);
        } catch (e) {
          Swal.fire({
            services_Name: "Name Not Found: Error ^(--)^",
            services_Description: "Description Not Found: Error ^(--)^",
            services_Type: "Type Not Found: Error ^(--)^",
          });
        }
      },
      async fetchExperience(context) {
        // Experience
        try {
          const { Experience } = await (await axios.get(portURL)).data;
          context.commit("setExperience", Experience);
          console.log(Experience);
        } catch (e) {
          Swal.fire({
            services_Name: "Name Not Found: Error ^(--)^",
            services_Description: "Description Not Found: Error ^(--)^",
            services_Type: "Type Not Found: Error ^(--)^",
          });
        }
      },
      async fetchTestimonials(context) {
        // Testimonials
        try {
          const { Testimonials } = await (await axios.get(portURL)).data;
          context.commit("setTestimonials", Testimonials);
          console.log(Testimonials);
        } catch (e) {
          Swal.fire({
            services_Name: "Name Not Found: Error ^(--)^",
            services_Description: "Description Not Found: Error ^(--)^",
            services_Type: "Type Not Found: Error ^(--)^",
          });
        }
      },
    },
  }
  //       modules:{
  // }
);
