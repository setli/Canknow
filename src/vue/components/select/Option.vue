<template>
    <li :class="classes" @click.stop="select" @mouseout.stop="blur" v-show="!hidden"><slot>{{ showLabel }}</slot></li>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { findComponentUpward } from '../../utils/assist';

    const prefixClass = 'select-item';

    export default {
        name: 'Option',
        componentName: 'SelectItem',
        mixins: [ Emitter ],
        props: {
            value: {
                type: [String, Number, Boolean],
                required: true
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                selected: false,
                index: 0,    // for up and down to focus
                isFocus: false,
                hidden: false,    // for search
                searchLabel: '',    // the value is slot,only for search
                autoComplete: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixClass}`,
                    {
                        [`${prefixClass}-disabled`]: this.disabled,
                        [`${prefixClass}-selected`]: this.selected && !this.autoComplete,
                        [`${prefixClass}-focus`]: this.isFocus
                    }
                ];
            },
            showLabel () {
                return (this.label) ? this.label : this.value;
            }
        },
        methods: {
            select () {

                if (this.disabled) {
                    return false;
                }
                this.dispatch('Select', 'on-select-selected', this.value);
            },
            blur () {
                this.isFocus = false;
            },
            queryChange (val) {
                const parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
                this.hidden = !new RegExp(parsedQuery, 'i').test(this.searchLabel);
            },
            // 在使用函数防抖后，设置 key 后，不更新组件了，导致SearchLabel 不更新 #1865
            updateSearchLabel () {
                this.searchLabel = this.$el.textContent;
            }
        },
        mounted () {
            this.updateSearchLabel();
            this.dispatch('Select', 'append');
            this.$on('on-select-close', () => {
                this.isFocus = false;
            });
            this.$on('on-query-change', (val) => {
                this.queryChange(val);
            });
            const Select = findComponentUpward(this, 'Select');

            if (Select)
                this.autoComplete = Select.autoComplete;
        },
        beforeDestroy () {
            this.dispatch('Select', 'remove');
        }
    };
</script>
