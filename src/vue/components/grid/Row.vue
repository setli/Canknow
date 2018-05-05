<template>
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf, findComponentsDownward } from '../../utils/assist';

    const prefixClass = 'row';

    export default {
        name: 'Row',
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['flex']);
                }
            },
            grid: {
                type: Number,
                validator (value) {
                    return oneOf(value, [12,24]);
                },
                default: 24
            },
            align: {
                validator (value) {
                    return oneOf(value, ['top', 'middle', 'bottom']);
                }
            },
            justify: {
                validator (value) {
                    return oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
                }
            },
            gutter: {
                type: Number,
                default: 0
            },
            spaced: {
                type: Boolean,
                default: false
            },
            className: String
        },
        computed: {
            classes () {
                return [
                    `${prefixClass}`,
                    {
                        ['spaced']: !!this.spaced,
                        ['flex-row']: this.type === 'flex',
                        [`${prefixClass}-${this.grid}`]: !!this.grid,
                        [`flex-${this.align}`]: !!this.align,
                        [`flex-${this.justify}`]: !!this.justify,
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            styles () {
                let style = {};
                return style;
            }
        },
        methods: {
            updateGutter (val) {
                const Cols = findComponentsDownward(this, 'Column');
                if (Cols.length) {
                    Cols.forEach((child) => {
                        if (val !== 0) {
                            child.gutter = val;
                        }
                    });
                }
            }
        },
        watch: {
            gutter (val) {
                this.updateGutter(val);
            }
        }
    };
</script>
