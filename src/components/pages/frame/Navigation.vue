<template>
  <v-card>
    <v-tabs fixed centered class="navigation">
      <v-tabs-bar>
        <v-tabs-slider class="indigo darken-1"></v-tabs-slider>
        <v-tabs-item href="#home"     @click="navigate(routes.HOME_ROUTE)">Home</v-tabs-item>
        <v-tabs-item href="#about"    @click="navigate(routes.ABOUT_ROUTE)">About</v-tabs-item>
        <v-tabs-item href="#contact"  @click="navigate(routes.CONTACT_ROUTE)">Contact</v-tabs-item>
      </v-tabs-bar>
    </v-tabs>
  </v-card>
</template>

<script>
import * as routes from '../../../util/constants/routes';

/**
 * Component for the navigation menu.
 */
export default {
  name: 'menu',

  data() {
    return {
      routes: routes
    };
  },
  methods: {
      /**
       * Navigate to the
       *
       * @param redirect
       */
      navigate(redirect) {
          this.$router.push(redirect);
      }
  }
};
</script>

<style lang="less">
@import '../../../style/mixins';

.navigation {
  background-color: white;

  // Removes the active tab underline
  .tabs__slider {
    display: none;
  }
  .tabs__item--active {
    font-weight: bold;
  }
  a {
    font-size: 12px;
  }
}
</style>
