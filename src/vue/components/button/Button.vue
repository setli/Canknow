<template>
    <button :type="htmlType" :class="classes" :disabled="disabled||loading" @click="handleClick">
        <Icon class="sync-icon" type="sync" v-if="syncButton"></Icon>
        <Icon :type="icon" v-if="icon"></Icon>
        <slot v-if="type=='icon'"></slot>
        <label class="button-label" v-if="type!='icon'">
            <slot v-if="!showLoadingText"></slot>
            <span v-if="showLoadingText">{{loadingText}}</span>
        </label>
    </button>
</template>
<script>
    import Icon from './../Icon.vue';
    import { oneOf } from '../../utils/assist';

    export default {
        name: 'Button',
        components: { Icon },
        props: {
            scene: {
                validator (value) {
                    return oneOf(value, ['dark','light','gray','primary','secondary', 'info', 'success', 'warning', 'danger', 'default']);
                },
                default:'default'
            },
            type:{
                validator (value) {
                    return oneOf(value, ['text', 'sync', 'icon','icon-with-text','image','image-with-text']);
                },
                default:'text'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large']);
                }
            },
            lightShadow: Boolean,
            long: Boolean,
            synching: Boolean,
            syncButton: Boolean,
            border:Boolean,
            circle:Boolean,
            fill:Boolean,
            block: Boolean,
            loading: Boolean,
            ghost: Boolean,
            loadingText: {
              type: String
            },
            disabled: Boolean,
            smallRadius:Boolean,
            radius:Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            icon: String,
        },
        data () {
            return {
            };
        },
        computed: {
            showLoadingText(){
                return this.loadingText && this.loading;
            },
            classes () {
                return [
                    {
                        ['light-shadow']: !!this.lightShadow,
                        ['long']: !!this.long,
                        ['synching']: !!this.synching,
                        ['sync-button']: !!this.syncButton,
                        [`${this.type}-button`]: !!this.type,
                        [`${this.scene}`]:!!this.scene,
                        ['border']: this.border!= null&& this.border ,
                        ['fill']: this.fill!= null && this.fill ,
                        ['ghost']: this.ghost!= null && this.ghost ,
                        ['circle']: this.circle!= null && this.circle ,
                        ['block']: this.block!= null&& this.block ,
                        ['radius']: this.radius!= null&& this.radius ,
                        ['small-radius']: this.smallRadius!= null&& this.smallRadius ,
                        [`${this.size}`]: !!this.size,
                        [`button-loading`]: this.loading != null && this.loading,
                    }
                ];
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
    };
</script>
