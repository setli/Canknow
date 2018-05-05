<template>
    <div>
        <Example>
            <div>
                <i-button @click.native="info">Show Info</i-button>
                <i-button @click.native="success">Show Success</i-button>
                <i-button @click.native="warning">Show Warning</i-button>
                <i-button @click.native="error">Show Error</i-button>
                <i-button @click.native="destroy">Destory</i-button>
            </div>
        </Example>
        <Example>
            <Button @click="loading">Display loading...</Button>
        </Example>
    </div>

</template>

<script>
    export default {
        name: 'DocumentMessage',
        methods: {
            info () {
                this.$Message.info({
                    content: 'This is a info message',
                    duration: 500,
                    onClose () {
                    },
                    closable: true
                })
            },
            success () {
                this.$Message.success({
                    content: 'This is a success message',
                    duration: 4
                });
            },
            warning () {
                this.$Message.warning('This is a warning message');
            },
            error () {
                this.$Message.error('This is a error message');
            },
            destroy () {
                this.$Message.destroy();
            },
            loading () {
                const loading = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(loading, 300000);
            },
        },
    };
</script>

<style scoped>

</style>