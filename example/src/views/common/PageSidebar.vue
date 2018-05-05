<template>
    <div class="page-sidebar">
        <div class="page-sidebar-wrap">
            <slot></slot>
            <nav class="">
                <Menu ref="pageSidebarMenu"
                      :active-name="$route.name"
                      :open-names="openNames"
                      :theme="menuTheme"
                      mode="vertical"
                      @on-select="changeMenu">
                    <template v-for="item in menuList">
                        <MenuItem :name="item.name" :icon="item.icon" :key="item.name" v-if="!(item.children&&item.children.length)">
                            {{ item.title}}
                        </MenuItem>
                        <Submenu :name="item.name" :key="item.name" v-if="item.children&&item.children.length">
                            <template slot="title" :icon="item.icon">
                                {{item.title}}
                            </template>
                            <template v-for="childItem in item.children">
                                <MenuItem :name="childItem.name" :icon="childItem.icon" :key="childItem.name" >
                                    {{childItem.title}}
                                </MenuItem>
                            </template>
                        </Submenu>
                    </template>
                </Menu>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageSidebar',
        props:{
            menuList: Array,
            menuTheme: {
                type: String,
                default: 'dark'
            },
            openNames: {
                type: Array
            }
        },
        methods: {
            changeMenu (active) {
                this.$emit('on-change', active);
            }
        },
        updated () {
            this.$nextTick(() => {

                if (this.$refs.pageSidebarMenu) {
                    this.$refs.pageSidebarMenu.updateOpened();
                }
            });
        }
    };
</script>
