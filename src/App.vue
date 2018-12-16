<template>
  <div id="app">
    <v-app>
      <navigation></navigation>
      <router-view class="main-content"></router-view>
      <footnote></footnote>
    </v-app>
  </div>
</template>

<script>
import Navigation from './components/pages/frame/Navigation.vue';
import Footnote from './components/pages/frame/Footnote.vue';

export default {
    name: 'app',
    components: {
        Navigation,
        Footnote
    }
};
</script>

<style lang="less">
@import './style/variables';

  #app {
      font-family: @body-font--serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;

      display: flex;
      height: 100%;
      width: 100%;

      img {
          max-width: 100%;
          height: auto;
      }
  }

  .main-content {
      display: flex;
      flex: 1 0 auto;
      align-items: center;
      justify-content: center;
  }

  // Dropdown menu
  .menu__content {
    // Makes the menu not take up the full width of the dropdown (target the date picker, ignore normal selects)
    &:not(.menu__content--select) {
      min-width: 0 !important;
    }

    // Dropdown list
    .list {
      padding: 0;
    }
  }

  // Dropdown items
  .list__tile--link{
    font-size: 14px;
  }
</style>
