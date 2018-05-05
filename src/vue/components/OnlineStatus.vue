<template>
    <span class="online-status" :class="classes">
        <slot></slot>
        <sub class="online-status-dot"></sub>
    </span>
</template>

<script>
    export default {
        name: 'OnlineStatus',
        props: {
            className: String,
            status: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return {
                    online: this.status,
                    offline: !this.status
                }
            }
        }
    }
</script>

<style scoped>

</style>