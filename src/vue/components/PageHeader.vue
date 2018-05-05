<template>
    <div class="page-header" :class="classes">
        <div class="page-header-wrapper">
            <div class="page-header-title-block">
                <img class="page-logo" :src="pageLogo">
                <label class="page-title" v-if="pageTitle">{{pageTitle}}</label>
            </div>
            <transition name="fade">
                <nav class="page-header-navigation" v-show="show">
                    <Menu ref="pageHeaderMenu"
                          :active-name="activeMenuName"
                          :open-names="openNames"
                          :theme="theme"
                          mode="horizontal"
                          @on-select="changeMenu">
                        <template v-for="item in menuList">
                            <MenuItem :name="item.name" :title="item[menuTitleField]" :icon="item.icon" :key="item.name"></MenuItem>
                        </template>
                    </Menu>
                </nav>
            </transition>
            <div class="flex-adapter hidden-md-up"></div>
            <Button type="icon" icon="menu" @click="handleToggleMenu" class="navbar-toggle-button hidden-md-up" :class="{active:show}"></Button>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import Emitter from '../mixins/emitter';
    import { oneOf, findComponentsDownward } from '../utils/assist';
    import pageLogo from '../../image/logo.png';

    export default {
        name: 'PageHeader',
        mixins: [ Emitter ],
        components:{

        },
        data(){
            return {
                show: false
            }
        },
        props:{
            menuList: Array,
            pageTitle:{
                type: String
            },
            activeMenuName: {
                type: String
            },
            menuTitleField: {
                type: String,
                default: 'title'
            },
            pageLogo:{
                type: String,
                default: pageLogo
            },
            theme: {
                validator (value) {
                    return oneOf(value, ['light', 'dark', 'color', 'primary']);
                },
                default: 'light'
            },
            openNames: {
                type: Array
            },
            splited: {
                type:Boolean
            },
            shadow: {
                type:Boolean
            },
            fixedTop: {
                type:Boolean
            }
        },
        computed:{
            classes () {
                let theme = this.theme;
                return [
                    theme,
                    {
                        'shadow': !!this.shadow,
                        'splited': !!this.splited,
                        'fixed-top':!!this.fixedTop,
                    }
                ];
            },
        },
        methods: {
            changeMenu (active) {
                this.$emit('on-change', active);
                this.show = false;
            },
            handleToggleMenu(){
                this.show = !this.show;
            }
        },
        updated () {
            this.$nextTick(() => {

                if (this.$refs.pageHeaderMenu) {
                    this.$refs.pageHeaderMenu.updateOpened();
                }
            });
        }
    }
</script>