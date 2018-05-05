<template>
    <div class="row flex-row">
        <PageSidebar :menuList="menuList" @on-change="handlePageSidebarMenuChange" class="column-2 md margin-right-1"></PageSidebar>
        <div class="content-padding flex-adapter">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import PageSidebar from '../common/PageSidebar';
    import {documentRouter} from '../../router/router';

    export default {
        name:'Document',
        components:{
            PageSidebar
        },
        data(){
            return {

            }
        },
        computed:{
            menuList:()=>{
                return documentRouter;
            }
        },
        methods:{
            handlePageSidebarMenuChange(name){
                this.$router.push({name:name});
            }
        }
    }
</script>