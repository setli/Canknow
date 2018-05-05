import Vue from 'vue';
import Modal from './modal.vue';
import Button from '../button/button.vue';
import Locale from '../../mixins/locale';

const prefixClass = 'modal-confirm';

Modal.newInstance = properties => {
    const _props = properties || {};

    const Instance = new Vue({
        mixins: [ Locale ],
        data: Object.assign({}, _props, {
            visible: false,
            width: 416,
            title: '',
            body: '',
            iconType: '',
            iconName: '',
            okText: undefined,
            cancelText: undefined,
            showCancel: false,
            loading: false,
            buttonLoading: false,
            scrollable: false
        }),
        render (h) {
            let footerVNodes = [];

            if (this.showCancel) {
                footerVNodes.push(h(Button, {
                    props: {
                        icon: 'back',
                        circle: true,
                        border: true,
                        scene: 'default',
                        type: 'text',
                    },
                    on: {
                        click: this.cancel
                    }
                }, this.localeCancelText));
            }
            footerVNodes.push(h(Button, {
                props: {
                    icon: 'success',
                    circle: true,
                    border: true,
                    scene: 'primary',
                    loading: this.buttonLoading
                },
                on: {
                    click: this.ok
                }
            }, this.localeOkText));

            // render content
            let body_render;

            if (this.render) {
                body_render = h('div', {
                    attrs: {
                        class: `modal-body ${prefixClass}-body ${prefixClass}-body-render`
                    }
                }, [this.render(h)]);
            }
            else {
                body_render = h('div', {
                    attrs: {
                        class: `${prefixClass}-body`
                    }
                }, [
                    h('i', {
                        class: this.iconTypeClass
                    }),
                    h('div', {
                        attrs: {
                            class: `${prefixClass}-body-content`
                        },
                        domProps: {
                            innerHTML: this.body
                        }
                    })
                ]);
            }

            return h(Modal, {
                props: Object.assign({}, _props, {
                    width: this.width,
                    scrollable: this.scrollable
                }),
                domProps: {
                    value: this.visible
                },
                on: {
                    input: (status) => {
                        this.visible = status;
                    }
                }
            }, [
                h('div', {
                    slot: 'box',
                    attrs: {
                        class: prefixClass
                    }
                }, [
                    h('div', {
                        attrs: {
                            class: `modal-header`
                        }
                    }, [
                        h('div', {
                          attrs: {
                              class: 'modal-header-wrap'
                          }
                        }, [
                            h('div', {
                                attrs: {
                                    class: `modal-title`
                                },
                                domProps: {
                                    innerHTML: this.title
                                }
                            })
                        ])
                    ]),
                    body_render,
                    h('div', {
                        attrs: {
                            class: `modal-footer`
                        }
                    }, footerVNodes)
                ])
            ]);
        },
        computed: {
            iconTypeClass () {
                return [
                    `${prefixClass}-body-icon`,
                    `${prefixClass}-body-icon-${this.iconType}`,
                    `icon-${this.iconName}`
                ];
            },
            iconNameClass () {
                return [
                    `icon-${this.iconName}`
                ];
            },
            localeOkText () {
                if (this.okText) {
                    return this.okText;
                }
                else {
                    return this.t('core.modal.okText');
                }
            },
            localeCancelText () {
                if (this.cancelText) {
                    return this.cancelText;
                }
                else {
                    return this.t('core.modal.cancelText');
                }
            }
        },
        methods: {
            cancel () {
                this.$children[0].visible = false;
                this.buttonLoading = false;
                this.onCancel();
                this.remove();
            },
            ok () {
                if (this.loading) {
                    this.buttonLoading = true;
                }
                else {
                    this.$children[0].visible = false;
                    this.remove();
                }
                this.onOk();
            },
            remove () {
                setTimeout(() => {
                    this.destroy();
                }, 300);
            },
            destroy () {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onOk () {},
            onCancel () {},
            onRemove () {}
        }
    });
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const modal = Instance.$children[0];

    return {
        show (props) {
            modal.$parent.showCancel = props.showCancel;
            modal.$parent.iconType = props.icon;

            switch (props.icon) {
                case 'info':
                    modal.$parent.iconName = 'info';
                    break;
                case 'success':
                    modal.$parent.iconName = 'smile';
                    break;
                case 'warning':
                    modal.$parent.iconName = 'warning';
                    break;
                case 'error':
                    modal.$parent.iconName = 'cry';
                    break;
                case 'confirm':
                    modal.$parent.iconName = 'help-circled';
                    break;
            }

            if ('width' in props) {
                modal.$parent.width = props.width;
            }

            if ('title' in props) {
                modal.$parent.title = props.title;
            }

            if ('content' in props) {
                modal.$parent.body = props.content;
            }

            if ('okText' in props) {
                modal.$parent.okText = props.okText;
            }

            if ('cancelText' in props) {
                modal.$parent.cancelText = props.cancelText;
            }

            if ('onCancel' in props) {
                modal.$parent.onCancel = props.onCancel;
            }

            if ('onOk' in props) {
                modal.$parent.onOk = props.onOk;
            }

            // async for ok
            if ('loading' in props) {
                modal.$parent.loading = props.loading;
            }

            if ('scrollable' in props) {
                modal.$parent.scrollable = props.scrollable;
            }

            // notice when component destroy
            modal.$parent.onRemove = props.onRemove;
            modal.visible = true;
        },
        remove () {
            modal.visible = false;
            modal.$parent.buttonLoading = false;
            modal.$parent.remove();
        },
        component: modal
    };
};

export default Modal;