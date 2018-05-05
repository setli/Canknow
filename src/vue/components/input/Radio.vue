<template>
    <label :class="wrapClasses">
        <input
                type="radio"
                :disabled="disabled"
                :checked="currentValue"
                :name="name"
                @change="change">
        <span class="check"></span>
        <span class="caption">  <slot>{{ label }}</slot></span>
    </label>
</template>
<script>
    import { findComponentUpward, oneOf } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixClass = 'radio';

    export default {
        name: 'Radio',
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
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            name: {
                type: String
            }
        },
        data () {
            return {
                currentValue: this.value,
                group: false,
                parent: findComponentUpward(this, 'RadioGroup')
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixClass}`,
                    {
                        [`${prefixClass}`]: this.group,
                        [`checked`]: this.currentValue,
                        [`disabled`]: this.disabled,
                        [`${this.size}`]: !!this.size
                    }
                ];
            },
        },
        mounted () {

            if (this.parent)
                this.group = true;

            if (!this.group) {
                this.updateValue();
            }
            else {
                this.parent.updateValue();
            }
        },
        methods: {
            change (event) {
                if (this.disabled) {
                    return false;
                }
                const checked = event.target.checked;
                this.currentValue = checked;

                let value = checked ? this.trueValue : this.falseValue;
                this.$emit('input', value);

                if (this.group && this.label !== undefined) {
                    this.parent.change({
                        value: this.label,
                        checked: this.value
                    });
                }
                if (!this.group) {
                    this.$emit('on-change', value);
                    this.dispatch('FormItem', 'on-form-change', value);
                }
            },
            updateValue () {
                this.currentValue = this.value === this.trueValue;
            }
        },
        watch: {
            value (val) {
                if (val !== this.trueValue && val !== this.falseValue) {
                    throw 'Value should be trueValue or falseValue.';
                }
                this.updateValue();
            }
        }
    };
</script>
