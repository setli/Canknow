<template>
    <div class="dropdown-wrapper"
         :style="styles"
         v-clickoutside="handleClose">
        <div ref="handle" @click="handleClick" class="dropdown-handle">
            <slot name="handle"></slot>
        </div>
        <transition :name="transition">
            <Drop :matchParentWidth="matchParentWidth"
                    :class="dropdownClass"
                    v-show="currentVisible"
                    :placement="placement"
                    ref="drop"
                    @mouseenter.native="handleMouseenter"
                    @mouseleave.native="handleMouseleave"
                    :data-transfer="transfer"
                    v-transfer-dom>
                <slot></slot>
            </Drop>
        </transition>
    </div>
</template>
<script>
    import clickoutside from '../../directives/clickoutside';
    import TransferDom from '../../directives/transfer-dom';
    import { oneOf, findComponentUpward } from '../../utils/assist';
    const prefixClass = 'dropdown';

    export default {
        name: 'Dropdown',
        directives: { clickoutside, TransferDom },
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover', 'custom']);
                },
                default: 'click'
            },
            matchParentWidth: {
                type: Boolean,
                default: false
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top-left', 'top-right', 'bottom-left', 'bottom-right']);
                },
                default: 'bottom-left'
            },
            position: {
                type: String,
                default: 'left'
            },
            visible: {
                type: Boolean,
                default: false
            },
            transfer: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                width: '',
                currentVisible: this.visible
            };
        },
        watch: {
            visible (val) {
                this.currentVisible = val;
            },
            currentVisible (val) {
                if (val) {
                    this.$refs.drop.update();
                }
                else {
                    this.$refs.drop.destroy();
                }
                this.$emit('on-visible-change', val);
            }
        },
        computed: {
            transition () {
                return ['bottom-left', 'bottom-right'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade';
            },
            styles () {
                let style = {};

                if (this.width)
                    style.width = `${this.width}px`;
                return style;
            },
            dropdownClass () {
                return [
                    'dropdown',
                    {
                        [prefixClass + '-transfer']: this.transfer,
                        [this.placement]: this.placement
                    }];
            }
        },
        methods: {
            handleClick () {
                if (this.trigger === 'custom')
                    return false;

                if (this.trigger !== 'click') {
                    return false;
                }
                this.currentVisible = !this.currentVisible;
            },
            handleMouseenter () {
                if (this.trigger === 'custom')
                    return false;

                if (this.trigger !== 'hover') {
                    return false;
                }
                if (this.timeout)
                    clearTimeout(this.timeout);

                this.timeout = setTimeout(() => {
                    this.currentVisible = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.trigger === 'custom')
                    return false;

                if (this.trigger !== 'hover') {
                    return false;
                }

                if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(() => {
                        this.currentVisible = false;
                    }, 150);
                }
            },
            handleClose () {
                if (this.trigger === 'custom')
                    return false;

                if (this.trigger !== 'click') {
                    return false;
                }
                this.currentVisible = false;
            },
            hasParent () {
                const $parent = findComponentUpward(this, 'Dropdown');

                if ($parent) {
                    return $parent;
                }
                else {
                    return false;
                }
            }
        },
        mounted () {
            this.$on('on-click', (key) => {
                const $parent = this.hasParent();

                if ($parent)
                    $parent.$emit('on-click', key);
            });
            this.$on('on-hover-click', () => {
                const $parent = this.hasParent();
                if ($parent) {
                    this.$nextTick(() => {
                        if (this.trigger === 'custom')
                            return false;
                        this.currentVisible = false;
                    });
                    $parent.$emit('on-hover-click');
                }
                else {
                    this.$nextTick(() => {
                        if (this.trigger === 'custom')
                            return false;
                        this.currentVisible = false;
                    });
                }
            });
            this.$on('on-haschild-click', () => {
                this.$nextTick(() => {
                    if (this.trigger === 'custom')
                        return false;
                    this.currentVisible = true;
                });
                const $parent = this.hasParent();

                if ($parent)
                    $parent.$emit('on-haschild-click');
            });
        }
    };
</script>
