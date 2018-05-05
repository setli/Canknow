<template>
    <Example>
        <Button @click="show">show</Button>
    </Example>
</template>

<script type="text/jsx">
    export default {
        name: 'DocumentPopup',
        methods: {
            show() {
                this.$Popup.popup({
                    className: 'example-popup',
                    render: (h) => {
                        return (
                            <div>
                                <div>
                                    test
                                </div>
                            </div>);
                    }
                })
            }
        }
    };
</script>

<style scoped>

</style>