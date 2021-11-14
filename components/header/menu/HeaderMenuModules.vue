<template>
  <v-menu
      :close-on-content-click="false"
      nudge-bottom="56" bottom left
      min-width="360"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          v-bind="attrs"
          v-on="on"
          text class="ml-2" :icon="$vuetify.breakpoint.xsOnly"
      >
        <v-icon :left="$vuetify.breakpoint.smAndUp">mdi-puzzle</v-icon>
        <span class="hidden-xs-only" v-text="`Extensions`" />
      </v-btn>
    </template>

    <v-card>
      <v-list>

        <v-list-item :href="owdLinkModules" target="_blank">
          <v-list-item-avatar tile>
            <img
                src="favicon.png"
                alt="Open Web Desktop"
            >
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>OWD Modules</v-list-item-title>
            <v-list-item-subtitle>Extend your client</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-github</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-list-item :href="owdLinkThemes"  target="_blank">
          <v-list-item-avatar tile>
            <img
                src="favicon.png"
                alt="Open Web Desktop"
            >
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>OWD Themes</v-list-item-title>
            <v-list-item-subtitle>Customize your client</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-github</v-icon>
          </v-list-item-action>
        </v-list-item>

      </v-list>

    </v-card>
  </v-menu>
</template>

<script>
  import mixinLinks from "@/mixins/mixinLinks";

  export default {
    mixins: [mixinLinks]
  }
</script>