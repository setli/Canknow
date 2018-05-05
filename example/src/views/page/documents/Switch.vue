<template>
    <div>
        <Example>
            <i-switch v-model="switch1"></i-switch>
        </Example>
        <Example>
            <i-switch size="large">
                <span slot="open">Switch Is ON</span>
                <span slot="close">Switch Is OFF</span>
            </i-switch>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentSwitch',
        data () {
            return {
                switch1: false
            }
        },
    };
</script>

<style scoped>

</style>