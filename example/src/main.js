import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { router } from './router/index.js';
import componentFrame from '../../src/vue/index.js';
import locale from '../../src/vue/locale/lang/zh-CN';
import directives from './directives';

Vue.use(VueRouter);
Vue.use(componentFrame, { locale });

Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key]);
});

// 开启debug模式
Vue.config.debug = true;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
