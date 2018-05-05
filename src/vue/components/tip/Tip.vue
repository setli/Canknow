<template>
    <transition :name="transitionName" @enter="handleEnter">
        <div :class="classes">
            <template>
                <div v-html="content"></div>
            </template>
        </div>
    </transition>
</template>

<script>
    import {getStyle} from './../../utils/assist';
    export default {
        name:'Tip',
        props: {
            duration: {
                type: Number,
                default: 5
            },
            content: {
                type: String,
                default: ''
            },
            className: {
                type: String
            },
            name: {
                type: String,
                required: true
            },
            onClose: {
                type: Function
            },
            transitionName: {
                type: String
            }
        },
        data () {
            return {
                withDesc: false
            };
        },
        computed: {
            classes () {
                return [
                    'tip',
                ];
            },
        },
        methods: {
            handleEnter (el) {
                const width=getStyle(el,'width').replace('px', "");
                el.style.marginLeft=-width/2+'px';
            },
            clearCloseTimer () {

                if (this.closeTimer) {
                    clearTimeout(this.closeTimer);
                    this.closeTimer = null;
                }
            },
            close () {
                this.clearCloseTimer();
                this.onClose();
                this.$parent.close(this.name);
            }
        },
        mounted () {
            this.clearCloseTimer();

            if (this.duration !== 0) {
                this.closeTimer = setTimeout(() => {
                    this.close();
                }, this.duration * 1000);
            }
        },
        beforeDestroy () {
            this.clearCloseTimer();
        }
    };
</script>

<style scoped>

</style>