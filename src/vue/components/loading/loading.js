import Vue from 'vue';
import Loading from './Loading.vue';

Loading.newInstance = properties => {
    const _props = properties || {};
    const Instance = new Vue({
        data: Object.assign({}, _props, {

        }),
        render (h) {
            let vnode = '';

            if (this.render) {
                vnode = h(Loading, {
                    props: {
                        fix: true,
                        fullscreen: true
                    }
                }, [this.render(h)]);
            }
            else {
                vnode = h(Loading, {
                    props: {
                        size: 'large',
                        fix: true,
                        fullscreen: true
                    }
                });
            }
            return h('div', {
                'class': 'loading-fullscreen loading-fullscreen-wrapper'
            }, [vnode]);
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const loading = Instance.$children[0];

    return {
        show () {
            loading.visible = true;
        },
        remove (cb) {
            loading.visible = false;
            setTimeout(function() {
                loading.$parent.$destroy();
                document.body.removeChild(document.getElementsByClassName('loading-fullscreen')[0]);
                cb();
            }, 500);
        },
        component: loading
    };
};
export default Loading;