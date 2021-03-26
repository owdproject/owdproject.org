<template>
  <v-toolbar max-height="64px" height="64px" elevation="0">

    <Logo large class="mr-12" style="pointer-events: none;">
      <v-toolbar-title class="font-weight-bold hidden-md-and-down">Open Web Desktop</v-toolbar-title>
    </Logo>

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

<style scoped lang="scss">
  .theme--dark.v-toolbar.v-sheet {
    background: #1E1E1E;
    user-select: none;
  }
</style>