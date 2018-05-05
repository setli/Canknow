import NotifyManage from './NotifyManage.vue';
import Vue from 'vue';

NotifyManage.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(NotifyManage, {
                props: _props
            });
        }
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const notifyManage = Instance.$children[0];

    return {
        notify (props) {
            notifyManage.add(props);
        },
        remove (name) {
            notifyManage.close(name);
        },
        component: notifyManage,
        destroy (element) {
            notifyManage.closeAll();
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
};

export default NotifyManage;
