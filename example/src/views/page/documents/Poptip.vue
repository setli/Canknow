<template>
    <div>
        <Example>
            <Poptip trigger="click" title="pop title" transfer content="pop content">
                <i-button>click</i-button>
            </Poptip>
        </Example>
        <Example>
            <Poptip
                    confirm
                    title="Are you sure delete this task?"
                    @on-ok="ok"
                    @on-cancel="cancel"
                    ok-text="yes"
                    transfer
                    cancel-text="no">
                <i-button>localize</i-button>
            </Poptip>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentPoptip',
        methods: {
            ok () {
                this.$Message.info('Ok');
            },
            cancel () {
                this.$Message.info('Cancel');
            }
        }
    }
</script>