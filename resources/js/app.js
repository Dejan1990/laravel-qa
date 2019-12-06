require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.min.css';
Vue.use(VueIziToast);

Vue.component('user-info', require('./components/UserInfo.vue').default);
Vue.component('answer', require('./components/Answer.vue').default);
Vue.component('favorite', require('./components/Favorite.vue').default);

const app = new Vue({
    el: '#app',
});
