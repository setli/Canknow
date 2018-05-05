<template>
    <form :class="classes" :autocomplete="autocomplete">
        <slot></slot>
    </form>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    const prefixClass = 'form';

    export default {
        name: 'Form',
        props: {
            model: {
                type: Object
            },
            rules: {
                type: Object
            },
            labelWidth: {
                type: [Number, String]
            },
            labelPosition: {
                validator (value) {
                    return oneOf(value, ['left', 'right', 'top']);
                }
            },
            type:{
                type:String,
                validator (value) {
                    return oneOf(value, ['vertical', 'horizontal','mobile','inline']);
                },
                default:'horizontal'
            },
            showMessage: {
                type: Boolean,
                default: true
            },
            autocomplete: {
                validator (value) {
                    return oneOf(value, ['on', 'off']);
                },
                default: 'off'
            }
        },
        data () {
            return {
                fields: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixClass}`,
                    {
                        [`${prefixClass}-label-${this.labelPosition}`]: !!this.labelPosition
                    },
                    `${this.type}-${prefixClass}`
                ];
            }
        },
        methods: {
            resetFields() {
                this.fields.forEach(field => {
                    field.resetField();
                });
            },
            validate(callback) {
                return new Promise(resolve => {
                    let valid = true;
                    let count = 0;
                    this.fields.forEach(field => {
                        field.validate('', errors => {
                            if (errors) {
                                valid = false;
                            }
                            if (++count === this.fields.length) {
                                // all finish
                                resolve(valid);

                                if (typeof callback === 'function') {
                                    callback(valid);
                                }
                            }
                        });
                    });
                });
            },
            validateField(prop, cb) {
                const field = this.fields.filter(field => field.prop === prop)[0];
                if (!field) {
                    throw new Error('[Canknow warn]: must call validateField with valid prop string!');
                }
                field.validate('', cb);
            }
        },
        watch: {
            rules() {
                this.validate();
            }
        },
        created () {
            this.$on('on-form-item-add', (field) => {
                if (field)
                    this.fields.push(field);
                return false;
            });
            this.$on('on-form-item-remove', (field) => {
                if (field.prop)
                    this.fields.splice(this.fields.indexOf(field), 1);
                return false;
            });
        }
    };
</script>
