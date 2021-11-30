<template>
  <div>

    <Hero />

    <v-divider />

    <Preview />
    <Details />

  </div>
</template>

<script>
import Hero from "../components/home/Hero";
import Details from "../components/home/Details";
import Preview from "../components/home/Preview";

export default {
  components: {Hero, Details, Preview},
  head() {
    return {
      titleTemplate: '%s - A fully modular web desktop in Vue.js',
    }
  },
  beforeMount() {
    this.$store.dispatch('featured/loadFeaturedList')
    this.$store.dispatch('repository/loadTags')
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