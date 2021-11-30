<template>
  <v-container>
    <v-toolbar max-height="72px" height="72px" elevation="0">

      <v-toolbar-title>
        Open Web Desktop
      </v-toolbar-title>

      <v-spacer />

      <HeaderMenuClient />
      <HeaderMenuModules />

    </v-toolbar>
  </v-container>
</template>

<script>
import mixinLinks from "@/mixins/mixinLinks";
import HeaderMenuClient from "./menu/HeaderMenuClient";
import HeaderMenuModules from "./menu/HeaderMenuModules";

export default {
  components: {HeaderMenuModules, HeaderMenuClient},
  mixins: [mixinLinks],
  data() {
    return {
      visible: false
    }
  }
}
</script>