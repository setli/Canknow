<template>
    <div :class="wrapClasses" :style="styles">
        <div :class="[prefixClass + '-tail']"><i></i></div>
        <div :class="[prefixClass + '-header']">
            <div :class="[prefixClass + '-header-inner']">
                <span v-if="!icon && currentStatus != 'finish' && currentStatus != 'error'">{{ stepNumber }}</span>
                <span v-else :class="iconClasses"></span>
            </div>
        </div>
        <div :class="[prefixClass + '-main']">
            <div :class="[prefixClass + '-title']">{{ title }}</div>
            <slot>
                <div v-if="content" :class="[prefixClass + '-content']">{{ content }}</div>
            </slot>
        </div>
    </div>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import { oneOf } from '../../utils/assist';

    const prefixClass = 'step';
    const iconPrefixClass = 'icon';

    export default {
        name: 'Step',
        mixins: [ Emitter ],
        props: {
            status: {
                validator (value) {
                    return oneOf(value, ['wait', 'process', 'finish', 'error']);
                }
            },
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String
            },
            icon: {
                type: String
            }
        },
        data () {
            return {
                prefixClass: prefixClass,
                stepNumber: '',
                nextError: false,
                total: 1,
                currentStatus: ''
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixClass}-item`,
                    `${this.currentStatus}`,
                    {
                        [`${prefixClass}-custom`]: !!this.icon,
                        [`${prefixClass}-next-error`]: this.nextError
                    }
                ];
            },
            iconClasses () {
                let icon = '';

                if (this.icon) {
                    icon = this.icon;
                }
                else {
                    if (this.currentStatus == 'finish') {
                        icon = 'success';
                    }
                    else if (this.currentStatus == 'error') {
                        icon = 'cry';
                    }
                }

                return [
                    `${prefixClass}-icon`,
                    {
                        [`${iconPrefixClass}-${icon}`]: icon != ''
                    }
                ];
            },
            styles () {
                return {
                    width: `${1/this.total*100}%`
                };
            }
        },
        watch: {
            status (val) {
                this.currentStatus = val;

                if (this.currentStatus == 'error') {
                    this.$parent.setNextError();
                }
            }
        },
        created () {
            this.currentStatus = this.status;
        },
        mounted () {
            this.dispatch('Steps', 'append');
        },
        beforeDestroy () {
            this.dispatch('Steps', 'remove');
        }
    };
</script>
