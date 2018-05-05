<template>
    <div :class="classes">
        <ul class="breadcrumb-list">
            <slot></slot>
        </ul>
    </div>
</template>
<script>
    const prefixClass = 'breadcrumb';
    export default {
        name: 'Breadcrumb',
        props: {
        },
        computed: {
            classes () {
                return `${prefixClass}`;
            }
        },
        mounted () {
            this.updateChildren();
        },
        updated () {
            this.$nextTick(() => {
                this.updateChildren();
            });
        },
        methods: {
            updateChildren () {
                this.$children.forEach((child) => {
                    child.separator = this.separator;
                });
            }
        },
        watch: {
            separator () {
                this.updateChildren();
            }
        }
    };
</script>