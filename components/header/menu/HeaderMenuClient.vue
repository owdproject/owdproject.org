<template>
  <v-menu
      :close-on-content-click="false"
      nudge-bottom="66"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          v-bind="attrs"
          v-on="on"
          text class="ml-2" :icon="$vuetify.breakpoint.xsOnly"
      >
        <v-icon :left="$vuetify.breakpoint.smAndUp">mdi-hexagon-multiple-outline</v-icon>
        <span class="hidden-xs-only" v-text="`Client`" />
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
            <v-list-item-title>OWD Client</v-list-item-title>
            <v-list-item-subtitle v-text="repositoryLastTagNext" />
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-github</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider/>

      <v-list dense>
        <v-list-item-group
            color="primary"
        >
          <v-list-item :href="owdLinkRepository + '/tree/next'" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-open-in-new</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>OWD Client {{repositoryLastTagNext}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :href="owdLinkRepository" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-open-in-new</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>OWD Client {{repositoryLastTagCurrent}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider/>

      <v-card-actions>
        <v-spacer />

        <v-btn text :href="socialLinkPatreon" target="_blank">
          Patreon
        </v-btn>
        <v-btn text :href="socialLinkLiberaPay" target="_blank">
          LiberaPay
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import mixinLinks from "@/mixins/mixinLinks";

export default {
  mixins: [mixinLinks],
  computed: {
    repositoryLastTagCurrent() {
      const tag = this.$store.getters["repository/lastTagCurrent"]

      if (tag) {
        return tag.name.replace('v', '')
      }

      return ""
    },
    repositoryLastTagNext() {
      const tag = this.$store.getters["repository/lastTagNext"]

      if (tag) {
        return tag.name.replace('v', '')
      }

      return ""
    }
  }
}
</script>