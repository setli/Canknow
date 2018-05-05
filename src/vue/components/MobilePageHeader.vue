<template>
    <div class="mobile-page-header" :style="styles" :class="theme">
        <slot name="prepend"></slot>
        <Button type="icon" @click="handleBack"><i class="icon-prev"></i></Button>
        <img :src="pageLogo" class="page-logo">
        <div class="page-title-logo-wrap">
            <img :src="pageTitleLogo" class="page-title-logo" v-if="pageTitleLogo" @click="handleTitleClick">
        </div>
        <label class="page-title" v-if="pageTitle" @click="handleTitleClick">{{pageTitle}}</label>
        <img :src="avatar" class="avatar" v-if="avatar">
        <slot name="append"></slot>
        <Dropdown class="block" placement="bottom-right" @on-click="handleClick">
            <div slot="handle">
                <Button type="icon" icon="more-circle-with-incision"></Button>
            </div>
            <slot></slot>
        </Dropdown>
    </div>
</template>

<script>
    import { oneOf } from '../utils/assist';

    export default {
        name: 'MobilePageHeader',
        props: {
            pageTitle: {
                type: String
            },
            pageTitleLogo: {
                type: String
            },
            pageLogo: {
                type: String,
            },
            avatar: {
                type: String,
            },
            color: {
                type: String
            },
            theme: {
                validator (value) {
                    return oneOf(value, ['light', 'dark', 'primary']);
                },
                default: 'light'
            },
        },
        computed:{
            styles () {
                let styles={};
                if(this.color!==undefined) {
                    styles.backgroundColor = this.color;
                }
                return styles;
            },
        },
        methods: {
            handleClick (name) {
                this.$emit('on-setting-item-select', name);
            },
            handleTitleClick(e){
                this.$emit('on-title-click', e);
            },
            handleBack () {
                this.$emit('onGoBack');
            }
        },
        mounted(){
        }
    };
</script>

<style scoped>

</style>