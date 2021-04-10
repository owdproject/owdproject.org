<template>
  <div :class="['logo', {'logo--square': square, 'logo--small': small, 'logo--large': large}]">
    <div class="logo-content">

      <v-btn color="#3375a5" />

      <v-btn color="#3375a5" />

      <v-btn color="#e8594f" />

      <v-btn color="#4c4c4c" />

    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    square: Boolean,
    small: Boolean,
    large: Boolean,
  }
}
</script>

<style scoped lang="scss">
.logo {
  .logo-content {
    display: inline-block;
    margin: 0 auto;
    border-radius: 7px;
    user-select: none;
    overflow: hidden;

    .v-btn {
      box-sizing: border-box;
      width: 48px;
      min-width: auto !important;
      min-height: 48px;
      margin: 3px 1px;
      cursor: default;
      box-shadow: none;
    }
  }

  &--large {
    display: inline-block;

    .logo-content {
      display: inline-block;
      vertical-align: -6px;
      margin-right: 10px;

      .v-btn {
        box-sizing: border-box;
        width: 28px;
        min-width: auto !important;
        min-height: 28px;
      }
    }

    .v-toolbar__title {
      display: inline-block;
    }
  }

  &--square {
    .logo-content {
      width: 115px;
    }
  }

  &--small {
    width: 40px;

    .logo-content {
      display: inline-block;
      width: 34px;
      height: 34px;
      line-height: 16px;
      padding: 0;
      border-radius: 0;

      .v-btn {
        width: 14px;
        height: 14px;
        min-height: 14px;
        margin: 1px -2px 0 0;
        padding: 0;
        border-radius: 2px;
      }
    }
  }
}
</style>