export const errorPage = {
    path: '/errorPage',
    name: 'errorPage',
    component: resolve => { require(['../views/page/ErrorPage'], resolve); }
};
export const resultPage = {
    path: '/resultPage',
    name: 'resultPage',
    component: resolve => { require(['../views/page/ResultPage'], resolve); }
};
export const test = {
    path: '/test',
    name: 'test',
    component: resolve => { require(['../views/page/Test'], resolve); }
};
export const loginPage = {
    path: '/loginPage',
    name: 'loginPage',
    component: resolve => { require(['../views/page/LoginPage'], resolve); }
};
export const mobileLoginPage = {
    path: '/mobileLoginPage',
    name: 'mobileLoginPage',
    component: resolve => { require(['../views/page/MobileLoginPage'], resolve); }
};
export const documentRouter=[
    {
        path: 'index',
        name: 'document.index',
        title: 'index',
        component: resolve => { require(['../views/page/documents/Index.vue'], resolve); },
    },
    {
        path: 'grid',
        name: 'document.grid',
        title: 'grid',
        component: resolve => { require(['../views/page/documents/Grid.vue'], resolve); },
    },
    {
        path: 'alert',
        name: 'document.alert',
        title: 'alert',
        component: resolve => { require(['../views/page/documents/Alert.vue'], resolve); },
    },
    {
        path: 'breadcrumb',
        name: 'document.breadcrumb',
        title: 'breadcrumb',
        component: resolve => { require(['../views/page/documents/Breadcrumb.vue'], resolve); },
    },
    {
        path: 'richEditor',
        name: 'document.richEditor',
        title: 'richEditor',
        component: resolve => { require(['../views/page/documents/RichEditor.vue'], resolve); },
    },
    {
        path: 'loading',
        name: 'document.loading',
        title: 'loading',
        component: resolve => { require(['../views/page/documents/Loading.vue'], resolve); },
    },
    {
        path: 'button',
        name: 'document.button',
        title: 'button',
        component: resolve => { require(['../views/page/documents/Button.vue'], resolve); },
    },
    {
        path: 'searchBox',
        name: 'document.searchBox',
        title: 'searchBox',
        component: resolve => { require(['../views/page/documents/SearchBox.vue'], resolve); },
    },
    {
        path: 'overview',
        name: 'document.overview',
        title: 'overview',
        component: resolve => { require(['../views/page/documents/Overview.vue'], resolve); },
    },
    {
        path: 'progress',
        name: 'document.progress',
        title: 'progress',
        component: resolve => { require(['../views/page/documents/Progress.vue'], resolve); },
    },
    {
        path: 'circle',
        name: 'document.circle',
        title: 'circle',
        component: resolve => { require(['../views/page/documents/Circle.vue'], resolve); },
    },
    {
        path: 'tag',
        name: 'document.tag',
        title: 'tag',
        component: resolve => { require(['../views/page/documents/Tag.vue'], resolve); },
    },
    {
        path: 'label',
        name: 'document.label',
        title: 'label',
        component: resolve => { require(['../views/page/documents/Label.vue'], resolve); },
    },
    {
        path: 'badge',
        name: 'document.badge',
        title: 'badge',
        component: resolve => { require(['../views/page/documents/Badge.vue'], resolve); },
    },
    {
        path: 'infolist',
        name: 'document.infolist',
        title: 'infolist',
        component: resolve => { require(['../views/page/documents/InfoList.vue'], resolve); },
    },
    {
        path: 'poptip',
        name: 'document.poptip',
        title: 'poptip',
        component: resolve => { require(['../views/page/documents/Poptip.vue'], resolve); },
    },
    {
        path: 'input',
        name: 'document.input',
        title: 'input',
        component: resolve => { require(['../views/page/documents/Input.vue'], resolve); },
    },
    {
        path: 'datePicker',
        name: 'document.datePicker',
        title: 'datePicker',
        component: resolve => { require(['../views/page/documents/DatePicker.vue'], resolve); },
    },
    {
        path: 'checkbox',
        name: 'document.checkbox',
        title: 'checkbox',
        component: resolve => { require(['../views/page/documents/Checkbox.vue'], resolve); },
    },
    {
        path: 'select',
        name: 'document.select',
        title: 'select',
        component: resolve => { require(['../views/page/documents/Select.vue'], resolve); },
    },
    {
        path: 'switch',
        name: 'document.switch',
        title: 'switch',
        component: resolve => { require(['../views/page/documents/Switch.vue'], resolve); },
    },
    {
        path: 'radio',
        name: 'document.radio',
        title: 'radio',
        component: resolve => { require(['../views/page/documents/Radio.vue'], resolve); },
    },
    {
        path: 'autoComplete',
        name: 'document.autoComplete',
        title: 'autoComplete',
        component: resolve => { require(['../views/page/documents/AutoComplete.vue'], resolve); },
    },
    {
        path: 'form',
        name: 'document.form',
        title: 'form',
        component: resolve => { require(['../views/page/documents/Form.vue'], resolve); },
    },
    {
        path: 'table',
        name: 'document.table',
        title: 'table',
        component: resolve => { require(['../views/page/documents/Table.vue'], resolve); },
    },
    {
        path: 'tree',
        name: 'document.tree',
        title: 'tree',
        component: resolve => { require(['../views/page/documents/Tree.vue'], resolve); },
    },
    {
        path: 'uploader',
        name: 'document.uploader',
        title: 'uploader',
        component: resolve => { require(['../views/page/documents/Uploader.vue'], resolve); },
    },
    {
        path: 'dropdown',
        name: 'document.dropdown',
        title: 'dropdown',
        component: resolve => { require(['../views/page/documents/Dropdown.vue'], resolve); },
    },
    {
        path: 'collapse',
        name: 'document.collapse',
        title: 'collapse',
        component: resolve => { require(['../views/page/documents/Collapse.vue'], resolve); },
    },
    {
        path: 'tooltip',
        name: 'document.tooltip',
        title: 'tooltip',
        component: resolve => { require(['../views/page/documents/Tooltip.vue'], resolve); },
    },
    {
        path: 'slider',
        name: 'document.slider',
        title: 'slider',
        component: resolve => { require(['../views/page/documents/Slider.vue'], resolve); },
    },
    {
        path: 'tab',
        name: 'document.tab',
        title: 'tab',
        component: resolve => { require(['../views/page/documents/Tab.vue'], resolve); },
    },
    {
        path: 'portlet',
        name: 'document.portlet',
        title: 'portlet',
        component: resolve => { require(['../views/page/documents/Portlet.vue'], resolve); },
    },
    {
        path: 'message',
        name: 'document.message',
        title: 'message',
        component: resolve => { require(['../views/page/documents/Message.vue'], resolve); },
    },
    {
        path: 'notify',
        name: 'document.notify',
        title: 'notify',
        component: resolve => { require(['../views/page/documents/Notify.vue'], resolve); },
    },
    {
        path: 'tip',
        name: 'document.tip',
        title: 'tip',
        component: resolve => { require(['../views/page/documents/Tip.vue'], resolve); },
    },
    {
        path: 'onlineStatus',
        name: 'document.onlineStatus',
        title: 'onlineStatus',
        component: resolve => { require(['../views/page/documents/OnlineStatus.vue'], resolve); },
    },
    {
        path: 'modal',
        name: 'document.modal',
        title: 'modal',
        component: resolve => { require(['../views/page/documents/Modal.vue'], resolve); },
    },
    {
        path: 'popup',
        name: 'document.popup',
        title: 'popup',
        component: resolve => { require(['../views/page/documents/Popup.vue'], resolve); },
    },
    {
        path: 'page',
        name: 'document.page',
        title: 'page',
        component: resolve => { require(['../views/page/documents/Pagination.vue'], resolve); },
    },
    {
        path: 'menu',
        name: 'document.menu',
        title: 'menu',
        component: resolve => { require(['../views/page/documents/Menu.vue'], resolve); },
    },
    {
        path: 'mobilePageHeader',
        name: 'document.mobilePageHeader',
        title: 'mobilePageHeader',
        component: resolve => { require(['../views/page/documents/MobilePageHeader.vue'], resolve); },
    },
    {
        path: 'gridNavigation',
        name: 'document.gridNavigation',
        title: 'gridNavigation',
        component: resolve => { require(['../views/page/documents/GridNavigation.vue'], resolve); },
    },
    {
        path: 'categoryNavigation',
        name: 'document.categoryNavigation',
        title: 'categoryNavigation',
        component: resolve => { require(['../views/page/documents/CategoryNavigation.vue'], resolve); },
    },
    {
        path: 'bottomNavigation',
        name: 'document.bottomNavigation',
        title: 'bottomNavigation',
        component: resolve => { require(['../views/page/documents/BottomNavigation.vue'], resolve); },
    },
    {
        path: 'tabNavigation',
        name: 'document.tabNavigation',
        title: 'tabNavigation',
        component: resolve => { require(['../views/page/documents/TabNavigation.vue'], resolve); },
    },
    {
        path: 'swiper',
        name: 'document.swiper',
        title: 'swiper',
        component: resolve => { require(['../views/page/documents/Swiper.vue'], resolve); },
    },
    {
        path: 'backTop',
        name: 'document.backTop',
        title: 'backTop',
        component: resolve => { require(['../views/page/documents/BackTop.vue'], resolve); },
    },
    {
        path: 'blank',
        name: 'document.blank',
        title: 'blank',
        component: resolve => { require(['../views/page/documents/Blank.vue'], resolve); },
    },
    {
        path: 'pageFooter',
        name: 'page.footer',
        title: 'pageFooter',
        component: resolve => { require(['../views/page/documents/PageFooter.vue'], resolve); },
    },
    {
        path: 'step',
        name: 'document.step',
        title: 'step',
        component: resolve => { require(['../views/page/documents/Step.vue'], resolve); },
    },
    {
        path: 'media',
        name: 'document.media',
        title: 'media',
        component: resolve => { require(['../views/page/documents/Media.vue'], resolve); },
    },
    {
        path: 'thumbnail',
        name: 'document.thumbnail',
        title: 'thumbnail',
        component: resolve => { require(['../views/page/documents/Thumbnail.vue'], resolve); },
    },
    {
        path: 'errorPage',
        name: 'document.errorPage',
        title: 'errorPage',
        redirect:'/errorPage',
    },
    {
        path: 'resultPage',
        name: 'document.resultPage',
        title: 'resultPage',
        redirect:'/resultPage',
    },
    {
        path: 'loginPage',
        name: 'document.loginPage',
        title: 'loginPage',
        redirect:'/loginPage',
    },
    {
        path: 'mobileLoginPage',
        name: 'document.mobileLoginPage',
        title: 'mobileLoginPage',
        redirect:'/mobileLoginPage',
    },
];

export const mainRouter = {
    path: '/',
    name: 'home',
    redirect: 'index',
    component: resolve => { require(['../views/Main.vue'], resolve); },
    children: [
        {
            path: 'index',
            name: 'index',
            icon: 'tenant',
            title: 'index',
            component: resolve => { require(['../views/page/Index.vue'], resolve); }
        },
        {
            path: 'document',
            name: 'document',
            icon: 'article',
            title: 'document',
            component: resolve => { require(['../views/page/Document.vue'], resolve); },
            redirect:'/document/index',
            children:documentRouter
        }
    ]
};

export const routers = [
    mainRouter,
];