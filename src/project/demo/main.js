import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routeConfig from './routeConfig';
import promise from 'es6-promise';

// webpack的require.ensure方法用到浏览器Promise
// 此处polyfill主要是对IE浏览器的支持
promise.polyfill();
Vue.use(VueRouter);
App.router = new VueRouter(routeConfig);
/* eslint-disable */
const app = new Vue(App).$mount('#app');
