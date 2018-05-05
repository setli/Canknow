<template>
    <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
        <div class="submenu-title-box" @click="handleClick">
            <Icon class="menu-item-icon" :type="computedIcon"></Icon>
            <div class="menu-item-title">
                <slot name="title"></slot>
            </div>
            <Icon type="down" class="submenu-toggle-icon"></Icon>
        </div>
        <collapse-transition v-if="mode === 'vertical'">
            <ul class="menu" v-show="opened">
                <slot></slot>
            </ul>
        </collapse-transition>
    </li>
</template>
<script>
    import Drop from '../dropdown/Dropdown.vue';
    import Icon from '../Icon.vue';
    import CollapseTransition from '../base/CollapseTransition';
    import { getStyle, findComponentUpward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    export default {
        name: 'SubMenu',
        mixins: [ Emitter ],
        components: { Icon, Drop, CollapseTransition },
        props: {
            icon: {
                type: String,
                required: false
            },
            name: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                active: false,
                opened: false,
                dropWidth: parseFloat(getStyle(this.$el, 'width')),
                parent: findComponentUpward(this, 'Menu')
            };
        },
        computed: {
            computedIcon () {
              return this.icon || 'menu-block';
            },
            classes () {
                return [
                    'submenu',
                    {
                        'active': this.active,
                        'opened': this.opened,
                        'disabled': this.disabled
                    }
                ];
            },
            mode () {
                return this.parent.mode;
            },
            accordion () {
                return this.parent.accordion;
            },
            dropStyle () {
                let style = {};

                if (this.dropWidth)
                    style.minWidth = `${this.dropWidth}px`;
                return style;
            }
        },
        methods: {
            handleMouseenter () {
                if (this.disabled)
                    return;
                if (this.mode === 'vertical')
                    return;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.parent.updateOpenKeys(this.name);
                    this.opened = true;
                }, 250);
            },
            handleMouseleave () {

                if (this.disabled)
                    return;

                if (this.mode === 'vertical')
                    return;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.parent.updateOpenKeys(this.name);
                    this.opened = false;
                }, 150);
            },
            handleClick () {
                if (this.disabled)
                    return;

                if (this.mode === 'horizontal')
                    return;
                const opened = this.opened;

                if (this.accordion) {
                    const parent = findComponentUpward(this, ['SubMenu', 'Menu']);
                    parent.broadcast('SubMenu', 'on-accordion', this.name);
                }
                this.opened = !opened;
                this.parent.updateOpenKeys(this.name);
            }
        },
        watch: {
            mode (val) {
                if (val === 'horizontal') {
                    this.$refs.drop.update();
                }
            },
            opened (val) {
                if (this.mode === 'vertical')
                    return;
                if (val) {
                    // set drop a width to fixed when menu has fixed position
                    this.dropWidth = parseFloat(getStyle(this.$el, 'width'));
                    this.$refs.drop.update();
                }
                else {
                    this.$refs.drop.destroy();
                }
            }
        },
        mounted () {
            this.$on('on-accordion', (name) => {
                this.opened = false;
            });
            this.$on('on-menu-item-select', (name) => {
                if (this.mode === 'horizontal')
                    this.opened = false;
                this.dispatch('Menu', 'on-menu-item-select', name);
                return true;
            });
            this.$on('on-update-active-name', (status) => {
                this.active = status;
            });
        }
    };
</script>
