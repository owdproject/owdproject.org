<template>
  <div>

    <Hero />

    <v-divider />

    <Preview />
    <Features />

  </div>
</template>

<script>
import Hero from "./components/Hero";
import Features from "./components/Features";
import Preview from "./components/Preview";

export default {
  components: {Hero, Features, Preview},
  head() {
    return {
      titleTemplate: '%s - A fully modular web desktop in Vue.js',
    }
  },
  beforeMount() {
    this.$store.dispatch('repository/getTags')
  }
}
</script>

<style lang="scss">
  .block {
    display: flex;
    align-items: center;
    min-height: 75vh;
  }

  .container {
    padding: 0;
  }
</style>