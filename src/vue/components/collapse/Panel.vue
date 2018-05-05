<template>
    <div class="panel">
        <div class="panel-header horizional-flex-box" @click="toggle">
            <div class="flex-box-adapter">
                <slot name="title"></slot>
            </div>
            <Icon :type="iconType"></Icon>
        </div>
        <Collapse ref="collapse">
            <div class="panel-content">
                <slot></slot>
            </div>
        </Collapse>
    </div>
</template>
<script>
    export default {
        name: 'Panel',
        props: {
            name: {
                type: String
            }
        },
        data () {
            return {
                index: 0, // use index for default when name is null
                isActive: false,
            }
        },
        computed: {
            iconType:function () {
                return this.isActive? 'up':'down';
            }
        },
        methods: {
            toggle () {
                this.$refs.collapse.toggle();

                this.$parent.toggle({
                    name: this.name || this.index,
                    isActive: this.isActive
                });
            }
        }
    };
</script>
