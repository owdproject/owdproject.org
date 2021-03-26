<template>
  <div :class="['logo', {'logo--square': square, 'logo--small': small, 'logo--large': large}]">
    <div class="logo-content">

      <v-btn color="#2775a7">
        <v-icon>mdi-flask-outline</v-icon>
      </v-btn>

      <v-btn color="#2775a7">
        <v-icon>mdi-format-color-fill</v-icon>
      </v-btn>

      <v-btn color="#4c4c4c">
        <v-icon>mdi-radio</v-icon>
      </v-btn>

      <v-btn color="#f0584a">
        <v-icon>mdi-patreon</v-icon>
      </v-btn>
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

      .v-icon {
        color: white;

        &.mdi-format-color-fill {
          top: 5px;
          left: 1px;
          font-size: 29px;
        }

        &.mdi-patreon {
          font-size: 23px;
        }
      }
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

        .v-icon {
          font-size: 17px;

          &.mdi-format-color-fill {
            top: 3px;
            left: 1px;
            font-size: 22px;
          }

          &.mdi-radio {
            top: -1px;
            font-size: 20px;
          }

          &.mdi-patreon {
            font-size: 18px;
          }
        }
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

        .v-icon {
          font-size: 8px !important;

          &.mdi-format-color-fill {
            top: inherit;
            left: inherit;
          }
        }
      }
    }
  }
}
</style>