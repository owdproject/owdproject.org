<template>
  <div>
    <v-row justify="center" align="center" class="my-12">

      <v-col lg="7" cols="12" class="hidden-md-and-down">

        <div class="iframe-container">
          <v-progress-circular indeterminate color="#444" class="iframe-loader" v-if="!iframeLoaded" />

          <iframe
            :src="owdLinkDemo"
            v-show="iframeLoaded"
            @load="iframeLoaded = true"
          />
        </div>

      </v-col>

      <v-col lg="5" cols="12" class="owd-intro text-center">

        <v-img src="favicon.png" width="180" height="180" class="mx-auto" />

        <h2 class="mt-8 mb-1" v-text="$vuetify.breakpoint.mdAndDown ? 'Open Web Desktop' : 'OWD Client'" />

        <p>
          A fully modular open-source web desktop<br class="hidden-xs-only" />
          made with Vue.js 3 and TypeScript
        </p>

Fix         <p class="mx-auto mb-0 shields-io">

          <a :href="owdLinkRepository + '/tree/next'" target="_blank">
            <img src="https://img.shields.io/badge/owd-client-blue" />
          </a>

          <a :href="owdLinkRepository + '/tree/next'" target="_blank" class="ml-1">
            <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/owdproject/owd-client?style=social">
          </a>
        </p>
      </v-col>

    </v-row>
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
  .owd-intro {
    p.shields-io {
      user-select: none;
    }

    p {
      color: #999;

      .v-icon {
        margin-left: 7.5px;
        vertical-align: -3px;
        opacity: 0.25;
      }
    }

    .v-tooltip__content {
      position: absolute !important;
      left: 0 !important;
      right: 0 !important;
      min-width: 480px;
      margin-top: 10px;
      margin-left: 50%;
      transform: translateX(-50%);
      padding: 12px;

      @media(max-width: 560px) {
        min-width: 80vw;

        br {
          display: none;
        }
      }
    }
  }

  .iframe-container {
    position: relative;
    background: #333;
    width: 100%;
    height: 480px;
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
</style>