<template>
  <v-app dark class="text-center">
    <div class="error-content">
      <div class="mb-2">
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
      </div>

      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped lang="scss">
.error-content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  margin: -30px 0 0 -100px;
  user-select: none;

  h1 {
    font-size: 20px;
  }

  a {
    color: #999;
  }
}
</style>
