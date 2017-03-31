import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routeConfig from './routeConfig';

Vue.use(VueRouter);
App.router = new VueRouter(routeConfig);
/* eslint-disable */
const app = new Vue(App).$mount('#app');
