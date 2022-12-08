import { createApp } from 'vue';
import App from './App.vue';
import VueNavigationBar from '../src/index.js';
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App);

const StubbedRoute = { template: '<div></div>' };

const router = createRouter({
  history: createWebHistory(),
  routes: [
  ],
});

app.use(router);

app.component('vue-navigation-bar', VueNavigationBar);

app.mount('#app');
