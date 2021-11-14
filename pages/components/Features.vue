<template>
  <div class="block py-16 grey--text">
    <v-container class="py-8">

      <v-row class="mb-2">
        <v-col md="2">
          <menu>
            <v-row>
              <v-col
                  v-for="(section, k) of sections" :key="k"
                  cols="3" md="12"
              >
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <a
                        v-bind="attrs" v-on="on"
                        :class="{active: sectionActive === section.name}"
                        @click="sectionActive = section.name"
                    >
                      <v-icon :size="section.icon.size">{{section.icon.name}}</v-icon>
                    </a>
                  </template>
                  <span v-text="section.title" />
                </v-tooltip>
              </v-col>
            </v-row>
          </menu>
          <br class="hidden-md-and-up" />
        </v-col>
        <v-col md="1" class="hidden-sm-and-down">
          <v-divider vertical />
        </v-col>
        <v-col md="9" cols="12">
          <p>
            Open Web Desktop is a project that aims to provide a simple environment to create your own web desktop,
            extendable through a series of modules and integrations. OWD Client is based on Vue.js 3 and TypeScript.
          </p>

          <p>
            <a href="https://demo.owdproject.org" target="_blank">Check the demo</a>
            of the <code style="vertical-align: 1px;">owd-client</code> base repository, decked out with some modules.
          </p>

          <br />

          <section>
            <template v-if="sectionActive === 'introduction'">
              <h3>Features</h3>

              <ul class="mt-6">
                <li>Open-source web desktop client based on Vue.js 3</li>
                <li>Fully extendable through app and desktop modules</li>
                <li>Fully extendable through pages and Vue components</li>
                <li>Notifications, terminal commands, multiple themes</li>
                <li>Vuex, Vue Router and Vue i18n implemented by default</li>
                <li>Vuetify.js and Moment.js implemented by default</li>
                <li>TypeScript and Vite support</li>
              </ul>
            </template>

            <template v-if="sectionActive === 'quick-start'">
              <h3>Quick start</h3>

              <ul>
                <li>
                  <p class="mt-6">Bootstrap a new instance by running:</p>

<pre>
npx create-owd-app &lt;app-name&gt;
</pre>
                </li>
                <li>
                  <p class="mt-6">Once the process is complete, you can start with the client development:</p>

<pre>
npm run serve
</pre>
                </li>
              </ul>
            </template>
          </section>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import mixinLinks from "~/mixins/mixinLinks";

export default {
  mixins: [mixinLinks],
  data() {
    return {
      sectionActive: 'introduction',
      sections: [
        {
          name: 'introduction',
          title: 'Introduction',
          icon: {
            name: 'mdi-information-outline',
            size: 30
          }
        },
        {
          name: 'quick-start',
          title: 'Quick start',
          icon: {
            name: 'mdi-cog-play-outline',
            size: 30
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.block {
  background: #252525;
  font-size: 17px;

  menu {
    a {
      opacity: 0.4;

      &.active {
        opacity: 1;
      }
    }
  }

  section {
    @media(min-width: 900px) {
      height: 230px;
    }

    h3 {
      color: #bbb;
    }
  }
}
</style>