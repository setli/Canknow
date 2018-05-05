<template>
    <transition :name="transitionName" @enter="handleEnter" @leave="handleLeave">
        <div :class="classes">
            <template>
                <div v-if="body" v-html="body">
                </div>
                <div class="message-body" v-if="!body">
                    <label class="message-title" v-if="title">{{title}}</label>
                    <div class="message-content" v-html="content"></div>
                </div>
                <div class="message-footer">
                    <a class="text-button" @click="close" v-if="closable">
                        <i class="icon-close"></i>
                        Close
                    </a>
                </div>
            </template>
        </div>
    </transition>
</template>

<script>
    export default {
        name:'Message',
        props: {
            duration: {
                type: Number,
                default: 3
            },
            body: {
              type:String
            },
            title: {
                type: String,
            },
            content: {
                type: String,
                default: ''
            },
            closable: {
                type: Boolean,
                default: false
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
                    this.className,
                    'message',
                    {
                        [`closable`]: this.closable,
                        [`with-desc`]: this.withDesc
                    }
                ];
            },
        },
        methods: {
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
            },
            handleEnter (el) {
                el.style.height = el.scrollHeight + 'px';
            },
            handleLeave (el) {
                // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
                if (document.getElementsByClassName('message').length !== 1) {
                    el.style.height = 0;
                    el.style.paddingTop = 0;
                    el.style.paddingBottom = 0;
                }
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