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
    </div>
</template>

<script>
    export default {
        name: 'DocumentNotify',
        methods: {
            info () {
                this.$Notify.info({
                    title: 'notify title',
                    content: 'This is a info notify',
                    duration: 500,
                    onClose () {
                    },
                    closable: true
                })
            },
            success () {
                this.$Notify.success({
                    title: 'notify title',
                    content: 'This is a success notify',
                    duration: 4
                });
            },
            warning () {
                this.$Notify.warning('This is a warning notify');
            },
            error () {
                this.$Notify.error('This is a error notify');
            },
            destroy () {
                this.$Notify.destroy();
            }
        },
    };
</script>

<style scoped>

</style>