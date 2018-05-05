<template>
    <nav class="bottom-navigation">
        <Menu mode="horizontal" class="menu-list"
              :theme="theme"
              :activeName="activeName"
              :openNames="openNames"
              @on-select="handleSelect">
            <slot></slot>
        </Menu>
    </nav>
</template>

<script>
    import { oneOf } from '../../utils/assist';

    export default {
        name: 'BottomNavigation',
        props: {
            theme: {
                validator (value) {
                    return oneOf(value, ['light', 'dark', 'primary']);
                },
                default: 'light'
            },
            activeName: {
                type: [String, Number]
            },
            openNames: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        methods:{
            handleSelect(name){
                this.$emit('on-select', name);
            }
        }
    };
</script>

<style scoped>

</style>