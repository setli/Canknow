<template>
    <div :class="classes" :style="styles">
        <Message
                v-for="message in messages"
                :key="message.name"
                :styles="message.styles"
                :type="message.type"
                :className="message.className"
                :title="message.title"
                :content="message.content"
                :body="message.body"
                :duration="message.duration"
                :closable="message.closable"
                :name="message.name"
                :transition-name="message.transitionName"
                :on-close="message.onClose">
        </Message>
    </div>
</template>

<script>
    import Message from './Message.vue';

    const prefixClass = 'message-manage';
    let seed = 0;
    const now = Date.now();

    function getUuid () {
        return 'message_' + now + '_' + (seed++);
    }

    export default {
        name: 'MessageManage',
        components: { Message: Message },
        props: {
            prefixClass: {
                type: String,
                default: prefixClass
            },
            styles: {
                type: Object,
                default: function () {
                    return {
                        top: '65px',
                        left: '50%'
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
                messages: []
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
            add (messageParams) {
                const name = messageParams.name || getUuid();

                let message = Object.assign({
                    styles: {
                        right: '50%'
                    },
                    content: '',
                    closable: false,
                    name: name
                }, messageParams);

                this.messages.push(message);
            },
            close (name) {
                const messages = this.messages;

                for (let i = 0; i < messages.length; i++) {

                    if (messages[i].name === name) {
                        this.messages.splice(i, 1);
                        break;
                    }
                }
            },
            closeAll () {
                this.messages = [];
            }
        }
    };
</script>

<style scoped>

</style>