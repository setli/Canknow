<template>
    <div>
        <Example>
            <Button @click="tip">Show Tip</Button>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentTip',
        methods: {
            tip () {
                this.$Tip.tip({
                    content: 'This is a tip',
                    onClose () {
                    },
                })
            },
        },
    };
</script>

<style scoped>

</style>