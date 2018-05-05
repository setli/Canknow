<template>
    <transition name="fade" @after-leave="handleAfterLeave">
        <div :class="classes" v-if="visible">
            <div :class="boxClasses">
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none"/>
                </svg>
                <div :class="textClasses"><slot>{{textData}}</slot></div>
            </div>
        </div>
    </transition>
</template>

<script>
    const prefixClass = 'loading';
    export default {
        name: 'Loading',
        props: {
            mask: {
                type: Boolean,
                default: true
            },
            text: {
                type: String
            },
            fullscreen: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                textData: null,
                visible: true
            }
        },
        watch: {
            text (value) {
                this.textData = value;
            }
        },
        computed: {
            showText () {
                return this.textData || this.$slots.default !== undefined;
            },
            classes () {
                return [
                    `${prefixClass}`,
                    {
                        mask: this.mask,
                        light: this.mask,
                        [`show-text`]: this.showText,
                        fullscreen: this.fullscreen
                    }
                ];
            },
            boxClasses () {
                return `${prefixClass}-box`;
            },
            textClasses () {
                return `${prefixClass}-text`;
            }
        },
        methods: {
            setText (text) {
                this.textData = text;
            },
            handleAfterLeave () {
                this.$emit('after-leave');
            }
        },
        mounted () {
            this.textData = this.text;
        }
    };
</script>

<style scoped>

</style>