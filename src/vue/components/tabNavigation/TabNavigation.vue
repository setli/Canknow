<template>
    <nav :class="classes">
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
        name: 'TabNavigation',
        props: {
            theme: {
                validator (value) {
                    return oneOf(value, ['light', 'dark', 'primary']);
                },
                default: 'light'
            },
            type: {
                validator (value) {
                    return oneOf(value, ['line', 'card']);
                },
                default: 'line'
            },
            matchParent: {
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
        data () {
          return {
              currentActiveName: this.activeName
          }
        },
        computed: {
            classes() {
                return [
                    'tab-navigation',
                    {
                        ['match-parent']: !!this.matchParent,
                        ['tab-navigation-card']: this.type === 'card'
                    }
                ];
            },
        },
        methods:{
            handleSelect(name){
                this.currentActiveName = name;
                this.$emit('on-select', name);
            }
        }
    };
</script>
