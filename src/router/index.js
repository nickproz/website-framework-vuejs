import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Contact from '@/components/pages/Contact';

import * as routes from '../util/constants/routes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Home
    },
    {
      path: `/${routes.HOME_ROUTE}`,
      name: 'Home',
      component: Home
    },
    {
      path: `/${routes.ABOUT_ROUTE}`,
      name: 'About',
      component: About
    },
    {
      path: `/${routes.CONTACT_ROUTE}`,
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'Wildcard',
      redirect: `/${routes.HOME_ROUTE}`
    }
  ]
});
