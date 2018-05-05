import MessageManage from './MessageManage.vue';
import Vue from 'vue';

MessageManage.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(MessageManage, {
                props: _props
            });
        }
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const messageManage = Instance.$children[0];

    return {
        message (props) {
            messageManage.add(props);
        },
        remove (name) {
            messageManage.close(name);
        },
        component: messageManage,
        destroy (element) {
            messageManage.closeAll();
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
};

export default MessageManage;
