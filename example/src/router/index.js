import Vue from 'vue';
import VueRouter from 'vue-router';
import canknow from './../../../src/vue/index';
import {errorPage,resultPage,test,loginPage,mobileLoginPage,routers} from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: [
        errorPage,
        resultPage,
        mobileLoginPage,
        loginPage,
        test,
        ...routers]
};

export const router= new VueRouter(RouterConfig);


router.beforeEach((to, from, next) => {
    canknow.LoadingBar.start();
    next();
});

router.afterEach((to) => {
    canknow.LoadingBar.finish();
    window.scrollTo(0, 0);
});