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