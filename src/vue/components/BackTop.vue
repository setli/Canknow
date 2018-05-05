<template>
    <transition name="fade">
        <div :class="classes" :style="styles" @click="back" v-transfer-dom :data-transfer="transfer" v-show="backTop">
            <slot>
                <div :class="innerClasses">
                    <i class="icon-back-up"></i>
                </div>
            </slot>
        </div>
    </transition>
</template>

<script>
    import { scrollTop } from '../utils/assist';
    import TransferDom from '../directives/transfer-dom';
    const prefixClass = 'back-top';
    export default {
        name: 'BackTop',
        props: {
            height: {
                type: Number,
                default: 400
            },
            duration: {
                type: Number,
                default: 1000
            }
        },
        directives: { TransferDom },
        data () {
            return {
                backTop: false,
                transfer:true
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixClass}`,
                    {
                        [`${prefixClass}-show`]: this.backTop
                    }
                ];
            },
            styles () {
                return {
                };
            },
            innerClasses () {
                return `${prefixClass}-inner`;
            }
        },
        methods: {
            handleScroll () {
                this.backTop = window.pageYOffset >= this.height;
            },
            back () {
                const sTop = document.documentElement.scrollTop || document.body.scrollTop;
                scrollTop(window, sTop, 0, this.duration);
                this.$emit('on-click');
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll, false);
            window.addEventListener('resize', this.handleScroll, false);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll, false);
            window.removeEventListener('resize', this.handleScroll, false);
        },
    };
</script>

<style scoped>

</style>