<template>
    <label class="label" :class="classes"><slot></slot></label>
</template>

<script>
    import { oneOf } from '../utils/assist';
    export default {
        name: 'Label',
        props: {
            scene: {
                validator (value) {
                    return oneOf(value, ['info', 'success', 'warning', 'danger']);
                }
            }
        },
        computed: {
            classes () {
                return [
                    {
                        [`${this.scene}`]:!!this.scene
                    }
                ];
            }
        }
    }
</script>
