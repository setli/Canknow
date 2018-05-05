<template>
    <transition :name="transitionName" @enter="handleEnter" @leave="handleLeave">
        <div :class="classes">
            <div class="notify-icon-wrap" v-if="icon">
                <Icon class="notify-icon" :type="icon"></Icon>
            </div>
            <template>
                <div v-if="body" v-html="body"></div>
                <div class="notify-body" v-if="!body">
                    <label class="notify-title" v-if="title">{{title}}</label>
                    <div class="notify-content" v-html="content"></div>
                </div>
            </template>
            <Button type="icon" icon="error" scene="danger" size="small" class="notify-close-button" @click="close"></Button>
        </div>
    </transition>
</template>

<script>
    export default {
        name:'Notify',
        props: {
            duration: {
                type: Number,
                default: 3
            },
            icon: {
                type:String
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
        computed: {
            classes () {
                return [
                    this.className,
                    'notify',
                    {
                        [`closable`]: this.closable
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
                // 优化一下，如果当前只有一个 Notify，则不使用 js 过渡动画，这样更优美
                if (document.getElementsByClassName('notify').length !== 1) {
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