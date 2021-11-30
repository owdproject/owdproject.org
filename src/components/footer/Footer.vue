<template>
  <v-footer class="text-center">
    <v-row class="my-4">
      <v-col>

        <div class="footer-links mb-6">
          <a :href="owdLinkRepository" target="_blank">
            <v-icon size="28">mdi-github</v-icon>
          </a>
          <a :href="socialLinkTwitter" target="_blank">
            <v-icon size="32" style="vertical-align: -7px;">mdi-twitter</v-icon>
          </a>
          <a :href="socialLinkPatreon" target="_blank">
            <v-icon size="29" style="vertical-align: -7px;">mdi-patreon</v-icon>
          </a>
          <a :href="socialLinkDiscord" target="_blank">
            <v-icon size="26" style="vertical-align: -6px;">mdi-discord</v-icon>
          </a>
        </div>

        <div class="footer-copyright">
          <p class="mb-0">
            Released under the
            <a :href="`${owdLinkRepository}/blob/master/LICENSE`" target="_blank">GNU GPL 3.0 License</a>
            <br />
            Copyright &copy; 2021 hacklover#2552 / dxlliv
          </p>
        </div>

      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  import mixinLinks from "../../mixins/mixinLinks";

  export default {
    name: "Footer",
    mixins: [mixinLinks]
  }
</script>

<style scoped lang="scss">
.v-footer {
  user-select: none;
  background: #1E1E1E;

  .footer-links {
    a {
      display: inline-block;
      margin: 0 8px;
      color: #BBB;
    }
  }

  .footer-copyright {
    color: #AAA;

    a {
      color: #999;
    }

    a.credits {
      color: inherit;
    }
  }
}
</style>