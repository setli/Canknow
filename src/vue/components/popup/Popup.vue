<template>
    <div v-transfer-dom :data-transfer="transfer">
        <transition :name="transitionNames[1]">
            <div :class="maskClasses" v-show="visible" @click="mask"></div>
        </transition>
        <div :class="wrapClasses" @click="handleWrapClick">
            <transition :name="transitionNames[0]">
                <div :class="classes" :style="mainStyles" v-show="visible">
                    <button class="icon-button button-close border circle" @click="close"><i class="icon-error"></i></button>
                    <div :class="[prefixClass + '-box']">
                        <slot></slot>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import TransferDom from '../../directives/transfer-dom';
    import Locale from '../../mixins/locale';
    import Emitter from '../../mixins/emitter';
    import {getStyle} from './../../utils/assist';

    const prefixClass = 'popup';
    export default {
        name: 'Popup',
        mixins: [ Locale, Emitter ],
        directives: { TransferDom },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            closable: {
                type: Boolean,
                default: true
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            width: {
                type: [Number, String],
                default: 520
            },
            styles: {
                type: Object
            },
            className: {
                type: String
            },
            transitionNames: {
                type: Array,
                default () {
                    return ['ease', 'fade'];
                }
            },
            transfer: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                prefixClass: prefixClass,
                wrapShow: false,
                visible: this.value
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixClass}-wrap`,
                    {
                        [`hidden`]: !this.wrapShow
                    }
                ];
            },
            maskClasses () {
                return `common-masker`;
            },
            classes () {
                return [
                    `${prefixClass}`,
                    {
                        [`${this.className}`]: !!this.className
                    }];
            },
            mainStyles () {
                let style = {};

                const width = parseInt(this.width);
                const styleWidth = {
                    width: width <= 100 ? `${width}%` : `${width}px`
                };
                const customStyle = this.styles ? this.styles : {};
                Object.assign(style, styleWidth, customStyle);
                return style;
            }
        },
        methods: {
            close () {
                this.visible = false;
                this.$emit('input', false);
                this.$emit('on-cancel');
            },
            mask () {

                if (this.maskClosable) {
                    this.close();
                }
            },
            handleWrapClick (event) {
                // use indexOf,do not use === ,because ivu-modal-wrap can have other custom className
                const className = event.target.getAttribute('class');

                if (className && className.indexOf(`${prefixClass}-wrap`) > -1)
                    this.mask();
            },
            animationFinish() {
                this.$emit('on-hidden');
            }
        },
        mounted () {

            if (this.visible) {
                this.wrapShow = true;
            }
        },
        beforeDestroy () {
            document.removeEventListener('keydown', this.EscClose);
        },
        watch: {
            value (val) {
                this.visible = val;
            },
            visible (val) {

                if (val === false) {
                    this.buttonLoading = false;
                    this.timer = setTimeout(() => {
                        this.wrapShow = false;
                    }, 300);
                }
                else {

                    if (this.timer)
                        clearTimeout(this.timer);
                    this.wrapShow = true;
                }
                this.broadcast('Table', 'on-visible-change', val);
                this.$emit('on-visible-change', val);
            }
        }
    };
</script>

<style scoped>

</style>