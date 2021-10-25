<template>
  <div>

    <v-container class="block my-16">
      <v-row class="my-8">
        <v-col cols="12" md="5" class="text-center">
          <v-icon class="mt-n3 mb-4 mb-md-0" color="grey darken-2" :size="$vuetify.breakpoint.smAndUp ? 218 : 120">mdi-hexagon-multiple-outline</v-icon>
        </v-col>
        <v-col cols="12" md="7" class="text-md-left text-center">
          <h2 class="text-h2 mb-7">A modular web desktop made with Vue.js</h2>

          <v-btn class="grey--text text--lighten-1 mr-2 mb-3" large rounded :href="owdLinkRepository + '/blob/next/README.md'" target="_blank">
            Get started
          </v-btn>

          <v-btn class="grey--text text--lighten-1 mb-3" large rounded :href="owdLinkRepository + '/tree/next'" target="_blank">
            <v-icon color="white" left size="25" class="mr-3">mdi-github</v-icon> GitHub
          </v-btn>

        </v-col>
      </v-row>
    </v-container>

    <div style="background: #252525;" class="block py-16 grey--text">
      <v-container class="py-8 text-center">
        <p class="mb-8">Sponsors</p>

        <v-row class="mb-2">
          <v-col cols="12" md="6" offset-md="3">

            <v-row>
              <v-col cols="4">
                <v-btn color="#2C2C2C" :href="socialLinkPatreon" target="_blank" class="deep-orange--text text--darken-3" block height="110">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="#2C2C2C" :href="socialLinkPatreon" target="_blank" class="deep-orange--text text--darken-3" block height="110">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn color="#2C2C2C" :href="socialLinkPatreon" target="_blank" class="deep-orange--text text--darken-3" block height="110">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>

          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container class="py-lg-16 text-center grey--text" :fluid="$vuetify.breakpoint.mdAndDown" id="lol">

      <v-card>
        <v-responsive :aspect-ratio="16/9" class="iframe-container">
          <v-progress-circular indeterminate color="#444" class="iframe-loader" v-if="!iframeLoaded" />

          <iframe
              class="owd-desktop"
              :src="owdLinkDemo"
              v-show="iframeLoaded"
              @load="iframeLoaded = true"
          />
        </v-responsive>
      </v-card>

    </v-container>

  </div>
</template>

<script>
import Logo from "../components/Logo";
import mixinLinks from "../mixins/mixinLinks";
export default {
  components: {Logo},
  mixins: [mixinLinks],
  head() {
    return {
      titleTemplate: '%s - A fully modular web desktop in Vue.js',
    }
  },
  data() {
    return {
      iframeLoaded: false
    }
  },
  beforeMount() {
    this.$store.dispatch('repository/getTags')
  }
}
</script>

<style scoped lang="scss">
  .text-h2 {
    @media(max-width: 600px) {
      font-size: 40px !important;
      line-height: inherit !important;
    }
    @media(max-width: 480px) {
      font-size: 30px !important;
    }
  }

  .iframe-container {
    position: relative;
    background: #333;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;

    iframe {
      border: 0;
      width: 100%;
      height: 100%;
    }
  }

  .iframe-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -16px 0 0 -16px;
  }

  .v-btn.iframe-close {
    position: absolute;
    bottom: 9px;
    left: 50%;
    margin-left: -18px;
  }

  .owd-desktop {
    @media(max-width: 1264px) {
      min-height: calc(100vh - 24px) !important;
    }
  }

  .block {
    display: flex;
    align-items: center;
    min-height: 60vh;
  }

  .container {
    padding: 0;
  }
</style>