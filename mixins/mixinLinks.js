export default {
  computed: {
    socialLinkTwitter() {
      return process.env.SOCIAL_LINK_TWITTER
    },
    socialLinkDiscord() {
      return process.env.SOCIAL_LINK_DISCORD
    },
    socialLinkLiberaPay() {
      return process.env.SOCIAL_LINK_LIBERAPAY
    },
    socialLinkPatreon() {
      return process.env.SOCIAL_LINK_PATREON
    },
    owdLinkNpm() {
      return process.env.SOCIAL_LINK_NPM
    },
    owdLinkRepository() {
      return process.env.SOCIAL_LINK_GITHUB
    },
    owdLinkModules() {
      return process.env.OWD_LINK_MODULES
    },
    owdLinkThemes() {
      return process.env.OWD_LINK_THEMES
    },
    owdLinkDemo() {
      return process.env.OWD_LINK_DEMO
    }
  }
}