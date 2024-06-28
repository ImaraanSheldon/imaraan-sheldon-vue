<template>
  <div v-if="Sections[0]?.length">
    <p>{{ Sections.section_Name }}</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const Sections = computed(() => store.state.Sections);
onMounted(() => {
  store.dispatch("fetchSections");
  console.log(Sections);
});
</script>
