<template>
    <div class="progress" v-if="show">
        <div class="indicator" :style="indicatorStyles">
            <span class="progress-value" v-if="showValue">{{percent}}%</span>
        </div>
    </div>
</template>
<script>
    import Icon from './icon';
    import { oneOf } from '../utils/assist';

    export default {
        name:'Progress',
        components: { Icon },
        props: {
            show:{
                type:Boolean,
                default:true
            },
            showValue: {
                type: Boolean,
                default: true
            },
            percent: {
                type: [Number,String],
                default: 0
            },
            status: {
                validator (value) {
                    return oneOf(value, ['normal', 'active', 'wrong', 'success']);
                },
                default: 'normal'
            },
        },
        data () {
            return {
                currentStatus: this.status
            };
        },
        computed: {
            isStatus () {
                return this.currentStatus == 'wrong' || this.currentStatus == 'success';
            },
            indicatorStyles () {
                return {
                    width: `${this.percent}%`
                };
            },
        },
        created () {
            this.handleStatus();
        },
        methods: {
            handleStatus (isDown) {

                if (isDown) {
                    this.currentStatus = 'normal';
                    this.$emit('on-status-change', 'normal');
                }
                else {

                    if (parseInt(this.percent, 10) == 100) {
                        this.currentStatus = 'success';
                        this.$emit('on-status-change', 'success');
                    }
                }
            }
        },
        watch: {
            percent (val, oldVal) {

                if (val < oldVal) {
                    this.handleStatus(true);
                }
                else {
                    this.handleStatus();
                }
            },
            status (val) {
                this.currentStatus = val;
            }
        }
    };
</script>
