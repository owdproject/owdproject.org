<template>
  <v-toolbar color="transparent" max-height="64px" height="64px" elevation="0">

    <v-toolbar-title
        v-text="`Open Web Desktop`"
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
  .theme--dark.v-toolbar {
    border: 0 !important;
    box-shadow: none !important;

    & .v-sheet {
      user-select: none;
      border: 0;
    }
  }

  .v-menu__content {
    width: 320px !important;
    min-width: auto !important;
    max-width: 100%;
  }
</style>