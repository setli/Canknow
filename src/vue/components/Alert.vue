<template>
    <transition name="fade">
        <div class="alert" :class="classes" v-if="show">
            <slot></slot>
            <i-button type="icon" scene="light" size="small" class="button-close" icon="error" v-if="closable" @click="close"></i-button>
        </div>
    </transition>
</template>
<script>
    import { oneOf } from '../utils/assist';

    export default {
        name:'Alert',
        props:{
            closable:{
                type:Boolean,
                default:false
            },
            type: {
                validator (value) {
                    return oneOf(value, ['success','info','warning','danger']);
                },
                default:'info'
            }
        },
        data() {
          return {
              show: true
          }
        },
        computed: {
          classes() {
              return [
                  this.type,
                  {'dismissible': this.closable}
              ]
          }
        },
        methods:{
            close (e) {
                this.show = false;
                this.$emit('on-close', e);
            }
        }
    }
</script>