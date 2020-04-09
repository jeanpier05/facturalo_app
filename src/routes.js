import Home from './assets/vue/pages/home.vue';
import AboutPage from './assets/vue/pages/about.vue';
import FormPage from './assets/vue/pages/form.vue';
import DynamicRoutePage from './assets/vue/pages/dynamic-route.vue';

import PanelLeftPage from './assets/vue/pages/panel-left.vue';
import ColorThemes from './assets/vue/pages/color-themes.vue';
import Chat from './assets/vue/pages/chat.vue';
import Vuex from './assets/vue/pages/vuex.vue';

import Documents from './assets/vue/pages/documents.vue';
import FormDocument from './assets/vue/pages/form-document.vue';
import FormSaleNote from './assets/vue/pages/form-sale-note.vue';
import FormOrderNote from './assets/vue/pages/form-order-note.vue';

import Cpe from './assets/vue/pages/cpe.vue';
import Login from './assets/vue/pages/login.vue';
import Report from './assets/vue/pages/report.vue';

import Configuration from './assets/vue/pages/configuration.vue';

import FormPurchase from './assets/vue/pages/purchases/form.vue';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/form/',
    component: FormPage
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage
  },
  {
    path: '/color-themes/',
    component: ColorThemes
  },
  {
    path: '/chat/',
    component: Chat
  },
  {
    path: '/vuex/',
    component: Vuex
  },
  {
    path: '/documents/',
    component: Documents
  },
  {
    path: '/form-document/:cod',
    component: FormDocument
  },
  {
    path: '/cpe/',
    component: Cpe
  },
  {
    path: '/login/',
    component: Login
  },
  {
    path: '/report/',
    component: Report
  },
  {
    path: '/form-sale-note/',
    component: FormSaleNote
  },
  {
    path: '/form-order-note/',
    component: FormOrderNote
  },

  {
    path: '/configuration/',
    component: Configuration
  },

  {
    path: '/form-purchase/',
    component: FormPurchase
  },


];
