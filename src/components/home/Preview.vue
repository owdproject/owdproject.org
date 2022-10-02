<template>
  <div v-if="$store.getters['featured/featuredActive']">
    <v-container
      class="owd-preview block text-center grey--text mb-16"
      :fluid="$vuetify.breakpoint.mdAndDown"
    >

      <!--
      <img
          class="owd-preview__laptop"
          src="media/owd-laptop.png"
      />
      -->

      <template v-if="$store.getters['featured/featuredCount'] > 1">
        <a @click="featuredPrev" class="owd-preview__arrow owd-preview__arrow-left">
          <v-icon>mdi-arrow-left</v-icon>
        </a>

        <a @click="featuredNext" class="owd-preview__arrow owd-preview__arrow-right">
          <v-icon>mdi-arrow-right</v-icon>
        </a>
      </template>

      <v-responsive class="owd-preview__iframe-container" :aspect-ratio="16/9" v-intersect="onIntersect">
        <v-progress-circular indeterminate color="#444" class="owd-preview__iframe-loader" v-if="!iframeLoaded"/>

        <iframe
          v-if="isIntersecting"
          v-show="iframeLoaded"
          class="owd-desktop"
          src="https://demo.owdproject.org"
          @load="iframeLoaded = true"
        />
        <!--
        :src="$store.getters['featured/featuredActive'].url"
        -->
      </v-responsive>

    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      iframeLoaded: false,
      isIntersecting: false,
    }
  },
  methods: {
    onIntersect(entries) {
      if (!this.isIntersecting) {
        this.isIntersecting = entries[0].isIntersecting
      }
    },
    featuredPrev() {
      this.iframeLoaded = false
      this.$store.commit('featured/PREV')
    },
    featuredNext() {
      this.iframeLoaded = false
      this.$store.commit('featured/NEXT')
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
  margin: 0 auto;
  height: 70vh;
  min-height: 600px;
  border-radius: 24px 24px 0 0;

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20vh;
    background: linear-gradient(transparent, #252525);
    pointer-events: none;
    content: '';
  }

  &__laptop {
    max-width: 100%;
  }

  &__iframe-container {
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 0;
    background: #0b0b0c;
    border-radius: 10px;
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

  &__arrow {
    position: absolute;
    top: 50%;
    margin-top: -42px;
    opacity: 0.2;

    &-left {
      left: 20px;
    }

    &-right {
      right: 20px;
    }
  }
}

@media(max-width: 1264px) {
  .owd-preview {
    width: calc(100vw - 48px);
  }

  .owd-desktop {
    min-height: calc(100vh - 24px) !important;
  }
}
</style>