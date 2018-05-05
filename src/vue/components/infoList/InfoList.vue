<template>
    <ul class="info-list" :class="classes"><slot></slot></ul>
</template>

<script>
    export default {
        name: 'Info',
        props: {
            labelWidth: {
                type: [Number, String],
                default: 100
            },
            justify: {
                type: String
            }
        },
        computed: {
            classes () {
                return [
                    {
                        [`justify-${this.justify}`]: !!this.justify
                    }
                ];
            }
        }
    }
</script>
