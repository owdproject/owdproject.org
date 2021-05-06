<template>
  <v-toolbar max-height="64px" height="64px" elevation="0">

    <v-toolbar-title
        class="font-weight-bold"
        v-text="$vuetify.breakpoint.smAndUp ? 'Open Web Desktop' : 'OWD'"
    />

    <v-spacer />

    <HeaderMenuClient />
    <HeaderMenuModules />

  </v-toolbar>
</template>

<script>
import mixinLinks from "@/mixins/mixinLinks";
import Logo from "~/components/Logo";
import HeaderMenuClient from "./menu/HeaderMenuClient";
import HeaderMenuModules from "./menu/HeaderMenuModules";

export default {
  name: "Header",
  components: {HeaderMenuModules, HeaderMenuClient, Logo},
  mixins: [mixinLinks],
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss">
  .theme--dark.v-toolbar.v-sheet {
    background: #1E1E1E;
    user-select: none;
  }

  .v-menu__content {
    width: 320px !important;
    min-width: auto !important;
    max-width: 100%;
  }
</style>