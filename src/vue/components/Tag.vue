<template>
    <transition :name="disableTransitions ? '': 'zoom-in-center'">
        <label :class="classes" :style="{backgroundColor: color}" @click.stop="check">
            <span class="tag-dot" v-if="dot"></span>
            <span class="tag-text"><slot></slot></span>
            <span class="icon-error close-button" v-if="closable" @click.native.stop="close"></span>
        </label>
    </transition>
</template>

<script>
    export default {
        name: 'Tag',
        props: {
            text: String,
            closable: Boolean,
            type: String,
            disableTransitions: Boolean,
            color: String,
            size: String,
            checkable: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            scene: {
                type: String,
            },
            dot: {
                type: Boolean,
                default: true
            },
            checked: {
                type: Boolean,
                default: true
            },
            name: {
                type: [String, Number]
            }
        },
        computed: {
            classes () {
                return [
                    'tag',
                    {
                        [this.scene]: !!this.scene,
                        [this.type]: !!this.type,
                        ['closable']: this.closable,
                        ['checked']: this.isChecked,
                        ['disabled']: this.disabled
                    }
                ];
            },
        },
        methods: {
            close (event) {
                if (this.name === undefined) {
                    this.$emit('close', event);
                } else {
                    this.$emit('close', event, this.name);
                }
            },
            check () {
                if (this.disabled) {
                    return;
                }
                if (!this.checkable)
                    return;
                const checked = !this.isChecked;
                this.isChecked = checked;
                if (this.name === undefined) {
                    this.$emit('change', checked);
                }
                else {
                    this.$emit('change', checked, this.name);
                }
            }
        },
    };
</script>

<style scoped>

</style>