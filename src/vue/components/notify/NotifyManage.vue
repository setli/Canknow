<template>
    <div :class="classes" :style="styles">
        <Notify
                v-for="notify in notifys"
                :key="notify.name"
                :styles="notify.styles"
                :type="notify.type"
                :icon="notify.icon"
                :title="notify.title"
                :content="notify.content"
                :body="notify.body"
                :duration="notify.duration"
                :closable="notify.closable"
                :className="notify.className"
                :name="notify.name"
                :transition-name="notify.transitionName"
                :on-close="notify.onClose">
        </Notify>
    </div>
</template>

<script>
    import Notify from './Notify.vue';

    const prefixClass = 'notify-manage';
    let seed = 0;
    const now = Date.now();

    function getUuid () {
        return 'notify_' + now + '_' + (seed++);
    }

    export default {
        name: 'NotifyManage',
        components: { Notify: Notify },
        props: {
            prefixClass: {
                type: String,
                default: prefixClass
            },
            styles: {
                type: Object,
                default  () {
                    return {
                        top: '1rem'
                    };
                }
            },
            title: {
                type: String
            },
            content: {
                type: String
            },
            body: {
                type: String
            },
            className: {
                type: String
            }
        },
        data () {
            return {
                notifys: []
            };
        },
        computed: {
            classes () {
                return [
                    `${this.prefixClass}`,
                    {
                        [`${this.className}`]: !!this.className
                    }
                ];
            }
        },
        methods: {
            add (notifyParams) {
                const name = notifyParams.name || getUuid();
                let notify = Object.assign({
                    content: '',
                    closable: false,
                    name: name
                }, notifyParams);
                this.notifys.push(notify);
            },
            close (name) {
                const notifys = this.notifys;
                for (let i = 0; i < notifys.length; i++) {
                    if (notifys[i].name === name) {
                        this.notifys.splice(i, 1);
                        break;
                    }
                }
            },
            closeAll () {
                this.notifys = [];
            }
        }
    };
</script>

<style scoped>

</style>