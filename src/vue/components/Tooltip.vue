<template>
    <div :class="[prefixClass]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
        <div :class="[prefixClass + '-rel']" ref="reference">
            <slot></slot>
        </div>
        <transition name="fade">
            <div
                    :class="[prefixClass + '-popper']"
                    ref="popper"
                    v-show="!disabled && (visible || always)"
                    @mouseenter="handleShowPopper"
                    @mouseleave="handleClosePopper"
                    :data-transfer="transfer"
                    v-transfer-dom>
                <div :class="[prefixClass + '-content']">
                    <div :class="[prefixClass + '-arrow']"></div>
                    <div :class="[prefixClass + '-inner']"><slot name="content">{{ content }}</slot></div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import Popper from './base/popper';
    import TransferDom from './../directives/transfer-dom';
    import { oneOf } from './../utils/assist';

    const prefixClass = 'tooltip';

    export default {
        name: 'Tooltip',
        directives: { TransferDom },
        mixins: [Popper],
        props: {
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            content: {
                type: [String, Number],
                default: ''
            },
            delay: {
                type: Number,
                default: 100
            },
            disabled: {
                type: Boolean,
                default: false
            },
            controlled: {    // under this prop,Tooltip will not close when mouseleave
                type: Boolean,
                default: false
            },
            always: {
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
                prefixClass: prefixClass
            };
        },
        watch: {
            content () {
                this.updatePopper();
            }
        },
        methods: {
            handleShowPopper() {
                if (this.timeout)
                    clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, this.delay);
            },
            handleClosePopper() {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    if (!this.controlled) {
                        this.timeout = setTimeout(() => {
                            this.visible = false;
                        }, 100);
                    }
                }
            },
            setExpectedState() {

            }
        },
        mounted () {
            if (this.always) {
                this.updatePopper();
            }
        }
    };
</script>
