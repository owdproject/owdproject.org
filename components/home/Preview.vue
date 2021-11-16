<template>
  <div class="block hidden-md-and-down">
    <v-container
        class="owd-preview text-center grey--text mb-16"
        :fluid="$vuetify.breakpoint.mdAndDown"
    >

      <img
          class="owd-preview__laptop"
          src="media/owd-laptop.png"
      />

      <v-responsive class="owd-preview__iframe-container" :aspect-ratio="16/9" v-intersect="onIntersect">
        <v-progress-circular indeterminate color="#444" class="owd-preview__iframe-loader" v-if="!iframeLoaded" />

        <iframe
            v-if="isIntersecting"
            v-show="iframeLoaded"
            class="owd-desktop"
            :src="owdLinkDemo"
            @load="iframeLoaded = true"
        />
      </v-responsive>

    </v-container>
  </div>
</template>


<script>
import mixinLinks from "~/mixins/mixinLinks";

export default {
  mixins: [mixinLinks],
  data() {
    return {
      iframeLoaded: false,
      isIntersecting: false,
    }
  },
  methods: {
    onIntersect (entries) {
      if (!this.isIntersecting) {
        this.isIntersecting = entries[0].isIntersecting
      }
    }
  }
}
</script>

<style scoped lang="scss">
.block {
  background: linear-gradient(#212121 90%, #252525);
}

.owd-preview {
  position: relative;
  padding: 150px 0 !important;

  &__laptop {
    max-width: 100%;
  }

  &__iframe-container {
    position: absolute;
    top: 177px;
    left: 141px;
    right: 141px;
    bottom: 238px;
    background: #0b0b0c;
    border-radius: 2px;
    overflow: hidden;

    iframe {
      border: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__iframe-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -16px 0 0 -16px;
  }
}

.owd-desktop {
  @media(max-width: 1264px) {
    min-height: calc(100vh - 24px) !important;
  }
}
</style>