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
import Navigation from './components/Navigation.vue'
import Footnote from './components/Footnote.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Footnote
  }
}
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

    a {
      color: @indigo-color-theme--primary;
    }
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
</style>
