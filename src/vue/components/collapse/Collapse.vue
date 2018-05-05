<template>
    <collapse-transition>
        <div class="collapse" v-show="isVisible">
            <div class="collapse-content">
                <slot></slot>
            </div>
        </div>
    </collapse-transition>
</template>
<script>
    import CollapseTransition from './../base/CollapseTransition';

    export default {
        name: 'Collapse',
        components: { CollapseTransition },
        props: {
            name: {
                type: String
            }
        },
        data () {
            return {
                isVisible: false
            };
        },
        computed: {
        },
        methods: {
            toggle () {
                this.isVisible=!this.isVisible;
                this.$emit('changeVisiable',this.isVisible);
            }
        }
    };
</script>
