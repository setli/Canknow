<template>
    <div class="portlet">
        <div class="portlet-header">
            <slot name="header"></slot>
            <Icon :type="icon" class="portlet-icon" v-if="icon"></Icon>
            <div class="portlet-title">
                <label v-if="title">{{title}}</label>
                <slot name="title"></slot>
            </div>
            <div class="portlet-action-bar">
                <slot name="actions"></slot>
            </div>
        </div>
        <div class="portlet-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import Icon from './Icon.vue';
    export default {
        name:'Portlet',
        components:{
            Icon
        },
        props:{
            icon:{
                type: String
            },
            title: {
                type: String
            }
        }
    }
</script>