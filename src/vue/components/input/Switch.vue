<template>
    <span :class="wrapClasses" @click="toggle" :style="styles">
        <input type="hidden" :name="name" :value="currentValue">
        <span :class="innerClasses">
            <slot name="open" v-if="currentValue === trueValue"></slot>
            <slot name="close" v-if="currentValue === falseValue"></slot>
        </span>
    </span>
</template>

<script>
    import { oneOf } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixClass = 'switch';

    export default {
        name: 'Switch',
        mixins: [ Emitter ],
        props: {
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['large', 'small', 'default']);
                }
            },
            width: {
                type: Number,
            },
            name: {
                type: String
            }
        },
        data () {
            return {
                currentValue: this.value
            };
        },
        computed: {
            styles () {
              const styles = {};
              if (this.width) {
                  styles.width = this.width;
              }
              return styles;
            },
            wrapClasses () {
                return [
                    `${prefixClass}`,
                    {
                        [`checked`]: this.currentValue === this.trueValue,
                        [`disabled`]: this.disabled,
                        [`${this.size}`]: !!this.size
                    }
                ];
            },
            innerClasses () {
                return `${prefixClass}-inner`;
            }
        },
        methods: {
            toggle () {
                if (this.disabled) {
                    return false;
                }
                const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;

                this.currentValue = checked;
                this.$emit('input', checked);
                this.$emit('on-change', checked);
                this.dispatch('FormItem', 'on-form-change', checked);
            }
        },
        watch: {
            value (val) {
                if (val !== this.trueValue && val !== this.falseValue) {
                    throw 'Value should be trueValue or falseValue.';
                }
                this.currentValue = val;
            }
        }
    };
</script>

<style scoped>

</style>