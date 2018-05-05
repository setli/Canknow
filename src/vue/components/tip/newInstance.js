import TipManage from './TipManage.vue';
import Vue from 'vue';

TipManage.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        data: _props,
        render (h) {
            return h(TipManage, {
                props: _props
            });
        }
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const tipManage = Instance.$children[0];

    return {
        tip (props) {
            tipManage.add(props);
        },
        remove (name) {
            tipManage.close(name);
        },
        component: tipManage,
        destroy (element) {
            tipManage.closeAll();
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
};

export default TipManage;
