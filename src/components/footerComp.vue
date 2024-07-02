<template>
  <footer class="container">
    <div class="row">
      <p class="lead name text-center">
        Imaraan Sheldons' Portfolio &copy;
        <span>{{ cYear }}</span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scoped>
.container{
  background-color:var(--Color-Accent-Pinot);
  margin-left:240px;
}
</style>
