<template>
  <div class="block py-16 grey--text">
    <v-container class="py-8 mb-16 text-center">
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
</template>

<script>
import mixinLinks from "~/mixins/mixinLinks";

export default {
  mixins: [mixinLinks],
}
</script>

<style scoped lang="scss">
.block {
  background: linear-gradient(#252525 90%, #212121);
}
</style>