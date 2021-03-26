<template>
  <v-menu
      :close-on-content-click="false"
      :min-width="320"
      nudge-bottom="66"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          v-bind="attrs"
          v-on="on"
          text class="ml-2" :icon="$vuetify.breakpoint.xsOnly"
      >
        <v-icon :left="$vuetify.breakpoint.smAndUp">mdi-puzzle</v-icon>
        <span class="hidden-xs-only" v-text="`Modules`" />
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar tile>
            <img
                src="favicon.png"
                alt="Open Web Desktop"
            >
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>OWD Modules</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-github</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider/>

      <v-card-actions class="text-center">
        <v-spacer />

        <v-btn text block :href="owdLinkModules" target="_blank">
          View #owd-modules on GitHub
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
  import mixinLinks from "@/mixins/mixinLinks";

  export default {
    mixins: [mixinLinks]
  }
</script>

<style scoped lang="scss">

</style>