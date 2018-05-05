<template>
    <li :class="classes" @click.stop="handleClick">
        <div class="menu-item-title-box">
            <Icon class="menu-item-icon" v-if="icon" :type="icon"></Icon>
            <div class="menu-item-title">
                <slot>{{localTitle}}</slot>
            </div>
        </div>
    </li>
</template>
<script>
    import Emitter from '../../mixins/emitter';

    export default {
        name: 'MenuItem',
        mixins: [ Emitter ],
        props: {
            icon: {
                type: String,
                required: false
            },
            name: {
                type: [String, Number],
                required: true
            },
            title: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                active: false
            };
        },
        computed: {
            localTitle () {
                return this.title || this.name;
            },
            classes () {
                return [
                    'menu-item',
                    {
                        'active': this.active,
                        'selected': this.active,
                        'disabled': this.disabled
                    }
                ];
            }
        },
        methods: {
            handleClick () {
                if (this.disabled)
                    return;
                let parent = this.$parent;
                let name = parent.$options.name;

                while (parent && (!name || name !== 'SubMenu')) {
                    parent = parent.$parent;

                    if (parent)
                        name = parent.$options.name;
                }
                if (parent) {
                    this.dispatch('SubMenu', 'on-menu-item-select', this.name);
                }
                else {
                    this.dispatch('Menu', 'on-menu-item-select', this.name);
                }
            }
        },
        mounted () {
            this.$on('on-update-active-name', (name) => {
                if (this.name == name) {
                    this.active = true;
                    this.dispatch('SubMenu', 'on-update-active-name', true);
                }
                else {
                    this.active = false;
                }
            });
        }
    };
</script>