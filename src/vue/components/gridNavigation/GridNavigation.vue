<template>
    <nav class="grid-navigation" :class="classess">
        <Menu mode="grid"
              class="menu-list"
              :theme="theme"
              :activeName="activeName"
              :openNames="openNames"
              @on-select="handleSelect">
            <slot></slot>
        </Menu>
    </nav>
</template>

<script>
    import { oneOf, findComponentsDownward } from '../../utils/assist';
    export default {
        name: 'GridNavigation',
        props: {
            theme: {
                validator (value) {
                    return oneOf(value, ['light', 'dark', 'primary']);
                },
                default: 'light'
            },
            span: {
              type: Number,
              default: 3
            },
            splited: {
                type: Boolean,
                default: false
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
        computed: {
          classess () {
              return [
                  `span-${this.span}`,
                  {
                      'splited': this.splited!= null && this.splited
                  }
              ]
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