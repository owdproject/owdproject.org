<template>
  <div class="block py-16">

    <v-container class="mb-16">
      <v-row class="my-8">
        <v-col cols="12" md="5" class="text-center">
          <v-icon
              class="mt-n3 mb-4 mb-md-0"
              color="grey darken-2"
          >
            mdi-application-cog-outline
          </v-icon>
        </v-col>
        <v-col cols="12" md="7" class="text-md-left text-center">
          <h2 class="text-h2 mb-7">A modular web desktop made with Vue.js</h2>

          <v-btn color="#2f2f2f" class="grey--text text--lighten-1 mr-2 mb-3" large rounded :href="owdLinkRepository + '/blob/next/README.md'" target="_blank">
            Get started
          </v-btn>

          <v-btn color="#2f2f2f" class="grey--text text--lighten-1 mb-3" large rounded :href="owdLinkRepository + '/tree/next'" target="_blank">
            <v-icon color="white" left size="25" class="mr-3">mdi-github</v-icon> GitHub
          </v-btn>

        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import mixinLinks from "~/mixins/mixinLinks";

export default {
  mixins: [mixinLinks]
}
</script>

<style scoped lang="scss">
.block {
  background: #252525;
}

.text-h2 {
  @media(max-width: 1300px) {
    font-size: 48px !important;
  }
  @media(max-width: 951px) {
    font-size: 44px !important;
    max-width: 100%;
    width: 450px;
    margin: 0 auto;
  }
  @media(max-width: 600px) {
    font-size: 40px !important;
    line-height: inherit !important;
  }
  @media(max-width: 480px) {
    font-size: 37px !important;
  }
}

.v-icon {
  font-size: 218px;

  @media(max-width: 800px) {
    font-size: 150px;
  }
}
</style>