<template>
    <div :class="dropClass" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { getStyle } from '../../utils/assist';
    import { oneOf, findComponentUpward } from '../../utils/assist';
    const prefixClass = 'drop';

    export default {
        name: 'Drop',
        props: {
            placement: {
                type: String,
                validator (value) {
                    return oneOf(value, ['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right']);
                },
                default: 'bottom-left'
            },
            matchParentWidth: {
              type: Boolean,
              default: false
            },
            className: {
                type: String
            }
        },
        data () {
            return {
                popper: null,
                width: ''
            };
        },
        computed: {
            styles () {
                let style = {};
                if (this.width)
                    style.width = `${this.width}px`;
                return style;
            },
            dropClass () {
                return [
                    `${prefixClass}`,
                    {
                        [this.placement]:this.placement
                    }];
            }
        },
        methods: {
            update () {
                if (this.matchParentWidth) {
                    this.width = parseInt(getStyle(this.$parent.$el, 'width'));
                }
            },
            destroy () {
            },
        },
        created () {
            this.$on('on-update-popper', this.update);
            this.$on('on-destroy-popper', this.destroy);
        },
        beforeDestroy () {
        }
    };
</script>
