<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { findComponentUpward } from '../../utils/assist';
    const prefixClass = 'column';

    export default {
        name: 'Column',
        props: {
            span: [Number, String],
            order: [Number, String],
            offset: [Number, String],
            push: [Number, String],
            pull: [Number, String],
            className: String,
            even: Boolean,
            noResponsive: {
              type: Boolean,
              default: true
            },
            sm: Boolean,
            md: Boolean,
            lg: Boolean
        },
        data () {
            return {
                gutter: 0,
                dataMd:this.md
            };
        },
        computed: {
            computedNoResponsive () {
              if (this.sm || this.md || this.lg) {
                  return false;
              }
              return this.noResponsive;
            },
            classes () {
                if(!this.sm&&!this.md&&!this.lg){
                    this.dataMd=true;
                }
                let classList = [
                    {
                        [`${prefixClass}-even`]: this.even,
                        [`${prefixClass}-${this.span}`]: this.span,
                        [`${prefixClass}-order-${this.order}`]: this.order,
                        [`${prefixClass}-offset-${this.offset}`]: this.offset,
                        [`${prefixClass}-push-${this.push}`]: this.push,
                        [`${prefixClass}-pull-${this.pull}`]: this.pull,
                        [`${this.className}`]: !!this.className,
                        ['no-responsive']: this.computedNoResponsive,
                        [`sm`]: !!this.sm,
                        [`md`]: !!this.dataMd,
                        [`lg`]: !!this.lg
                    }
                ];
                if (this.gutter !== 0) {
                    let value = 1;
                    if (this.gutter === 1) {
                        value= 'harf';
                    }
                    else {
                        value = this.gutter / 2;
                    }
                    classList.push(`padding-${value}`);
                    classList.push(`no-padding-top`);
                    classList.push(`no-padding-bottom`);
                }
                return classList;
            }
        },
        methods: {
            updateGutter () {
                const Row = findComponentUpward(this, 'Row');

                if (Row) {
                    Row.updateGutter(Row.gutter);
                }
            }
        },
        mounted () {
            this.updateGutter();
        },
        beforeDestroy () {
            this.updateGutter();
        }
    };
</script>
