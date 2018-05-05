<template>
    <div :class="classes">
        <Tip
                v-for="tip in tips"
                :key="tip.name"
                :content="tip.content"
                :duration="tip.duration"
                :closable="tip.closable"
                :name="tip.name"
                :transition-name="tip.transitionName"
                :on-close="tip.onClose">
        </Tip>
    </div>
</template>

<script>
    import Tip from './Tip.vue';

    let seed = 0;
    const now = Date.now();

    function getUuid () {
        return 'tip_' + now + '_' + (seed++);
    }

    export default {
        name: 'TipManage',
        components: { Tip: Tip },
        props: {
            content: {
                type: String
            },
            className: {
                type: String
            }
        },
        data () {
            return {
                tips: []
            };
        },
        computed: {
            classes () {
                return [
                    `tip-manage`,
                    {
                        [`${this.className}`]: !!this.className
                    }
                ];
            }
        },
        methods: {
            add (tipParams) {
                const name = tipParams.name || getUuid();

                let tip = Object.assign({
                    styles: {
                        right: '50%'
                    },
                    content: '',
                    closable: false,
                    name: name
                }, tipParams);

                this.tips.push(tip);
            },
            close (name) {
                const tips = this.tips;

                for (let i = 0; i < tips.length; i++) {

                    if (tips[i].name === name) {
                        this.tips.splice(i, 1);
                        break;
                    }
                }
            },
            closeAll () {
                this.tips = [];
            }
        }
    };
</script>

<style scoped>

</style>