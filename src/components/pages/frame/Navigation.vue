<template>
    <v-card>
        <v-tabs fixed centered class="navigation" v-model="activeTabId">
            <v-tabs-bar>
                <v-tabs-item v-for="tab in tabs" :key="tab.id" :href="tab.link" @click="navigate(tab.route)">{{ tab.name }}</v-tabs-item>
            </v-tabs-bar>
        </v-tabs>
    </v-card>
</template>

<script>
import * as routes from '../../../util/constants/routes';

// Tab navigation data
const tabs = [
    { id: 0, name: 'Home', link: '#home', route: routes.HOME_ROUTE },
    { id: 1, name: 'About', link: '#about', route: routes.ABOUT_ROUTE },
    { id: 2, name: 'Contact', link: '#contact', route: routes.CONTACT_ROUTE }
];

/**
 * Component for the navigation menu.
 */
export default {
    name: 'menu',

    data() {
        return {
            // The tabs to render
            tabs: tabs,
            // The ID of the active tab
            activeTabId: null
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
    },
    created() {
        // Update the active tab to be the current path
        this.activeTabId = this.$route.path.replace('/', '');
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
