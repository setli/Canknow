<template>
    <div>
        <Example>
            <Button @click="showModal = true">Modal has Tabs</Button>
            <Modal v-model="showModal" title="modal">
                modal content
            </Modal>
        </Example>
        <Example>
            <Button @click="showPageModal = true">Page Modal</Button>
            <Modal v-model="showPageModal" page title="modal" :id="100">
                <div>
                    modal content
                    <Button @click="showInnerPageModal = true">Show Inner Page Modal</Button>
                    <Modal v-model="showInnerPageModal" page title="modal" :id="101">
                        inner modal content
                    </Modal>
                </div>
            </Modal>
        </Example>
        <Example>
            <Button @click="show">Custom content</Button>
        </Example>
        <Example>
            <Button @click="instance('info')">Info</Button>
            <Button @click="instance('success')">Success</Button>
            <Button @click="instance('warning')">Warning</Button>
            <Button @click="instance('error')">Error</Button>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        data () {
            return {
                m1: [],
                showModal: false,
                showPageModal: false,
                showInnerPageModal: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Ok clicked');
            },
            cancel () {
                this.$Message.info('Cancel clicked');
            },
            show () {
                this.$Modal.confirm({
                    title: 'confirm',
                    render: (h) => {
                        return h('Input', {
                            props: {
                                block: true,
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            },
            instance (type) {
                const title = 'Title';
                const content = '<p>Content of dialog</p><p>Content of dialog</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
    };
</script>

<style scoped>

</style>