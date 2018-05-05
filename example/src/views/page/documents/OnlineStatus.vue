<template>
    <Example>
        <div>
            <OnlineStatus :status="online">
                test
            </OnlineStatus>
        </div>
        <div>
            <i-button border circle @click="toggleStatus">toggleStatus</i-button>
        </div>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentOnlineStatus',
        data () {
            return {
                online: false
            }
        },
        methods: {
            toggleStatus () {
                this.online = !this.online;
            }
        }
    }
</script>

<style scoped>

</style>