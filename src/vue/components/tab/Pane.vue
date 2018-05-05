<template>
    <div :class="prefixClass" v-show="show"><slot></slot></div>
</template>
<script>
    const prefixClass = 'tab-pane';
    import Emitter from '../../mixins/emitter';

    export default {
        name: 'TabPane',
        mixins: [ Emitter ],
        props: {
            name: {
                type: String
            },
            label: {
                type: [String, Function],
                default: ''
            },
            icon: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            closable: {
                type: Boolean,
                default: null
            }
        },
        data () {
            return {
                prefixClass: prefixClass,
                show: true,
                currentName: this.name
            };
        },
        methods: {
            updateNav () {
                this.$parent.updateNav();
            }
        },
        watch: {
            name (value) {
                this.currentName = value;
                this.updateNav();
            },
            label () {
                this.updateNav();
            },
            show (value) {
                if (value) {
                    this.broadcast('Table', 'showTab');
                }
            },
            icon () {
                this.updateNav();
            },
            disabled () {
                this.updateNav();
            }
        },
        mounted () {
            this.updateNav();
        },
        destroyed () {
            this.updateNav();
        }
    };
</script>
