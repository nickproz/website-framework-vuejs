<template>
  <v-tabs fixed centered class="navigation">
    <v-tabs-bar>
      <v-tabs-slider class="indigo darken-1"></v-tabs-slider>
      <v-tabs-item href="#home"     @click="navigate(routes.HOME_ROUTE)">Home</v-tabs-item>
      <v-tabs-item href="#about"    @click="navigate(routes.ABOUT_ROUTE)">About</v-tabs-item>
      <v-tabs-item href="#contact"  @click="navigate(routes.CONTACT_ROUTE)">Contact</v-tabs-item>
    </v-tabs-bar>
  </v-tabs>
</template>

<script>
import * as routes from '../util/constants/routes';

export default {
    name: 'menu',
    methods: {
        /**
         * Navigate to the
         *
         * @param redirect
         */
        navigate(redirect) {
            this.$router.push(redirect);
        }
    },
    data() {
        return {
            routes: routes
        };
    }
};
</script>

<style lang="less" scoped>
@import '../style/mixins';

.navigation {
    background-color: white;
    .card();
}
</style>
