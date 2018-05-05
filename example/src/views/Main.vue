<template>
    <div class="page">
        <PageHeader :menuList="mainRouter"
                    :activeMenuName="activeMenuName"
                    @on-change="handleMainMenuChange"
                    :page-title="pageTitle"></PageHeader>
        <div class="page-content">
            <router-view></router-view>
        </div>
        <PageFooter :aboutUs="aboutUs" :copyRight="copyRight"></PageFooter>
    </div>
</template>
<script>
    import {mainRouter} from '../router/router.js';
    import PageFooter from './common/PageFooter.vue';
    import packageConfig from './../../../package';

    export default {
        name:'Main',
        components:{
            PageFooter
        },
        data() {
            return {
                mainRouter: mainRouter.children,
            }
        },
        computed:{
            activeMenuName () {
                const paths = this.$route.name.split('.');
                if (paths.length) {
                    return paths[0];
                }
                return null;
            },
            aboutUs () {
                return packageConfig.author;
            },
            copyRight () {
                return packageConfig.version;
            },
            pageTitle () {
                return packageConfig.name;
            }
        },
        methods:{
            handleMainMenuChange(name){
                this.$router.push( {name:name });
            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        }
    }
</script>