<template>
  <v-app>
    <Header />

    <v-main>
      <nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
export default {
  components: {Header, Footer}
}
</script>

<style lang="scss">
.v-application {
  .v-main {
    position: relative;
    min-height: 402px;
    border-top: 1px solid rgba(255,255,255,0.05) !important;

    a {
      color: #f0584a;
      transition: color 0.5s ease-in-out;

      &:hover {
        color: #666;
      }
    }

    .row {
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }
  }
}
</style>