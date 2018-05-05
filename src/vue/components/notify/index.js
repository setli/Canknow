import NotifyManage from './newInstance';

const prefixClass = 'notify';
const prefixKey = 'notify_key_';

const defaults = {
    duration: 5
};

let notifyInstance;
let name = 1;

const iconTypes = {
    'info': 'info',
    'success': 'smile',
    'warning': 'warning',
    'error': 'cry',
    'loading': 'loading-3'
};

function getNotifyInstance () {
    notifyInstance = notifyInstance || NotifyManage.newInstance({
        prefixCls: prefixClass
    });
    return notifyInstance;
}

function notify (title, content = '', duration = defaults.duration, type, onClose = function () {}, closable = false) {
    const icon = iconTypes[type];
    let instance = getNotifyInstance();
    instance.notify({
        name: `${prefixKey}${name}`,
        className: type,
        icon,
        title,
        content,
        duration: duration,
        styles: {},
        transitionName: 'move-up',
        onClose: onClose,
        closable: closable,
    });

    // 用于手动消除
    return (function () {
        let target = name++;

        return function () {
            instance.remove(`${prefixKey}${target}`);
        };
    })();
}

export default {
    name: 'Notify',

    info (options) {
        return this.notify('info', options);
    },
    success (options) {
        return this.notify('success', options);
    },
    warning (options) {
        return this.notify('warning', options);
    },
    error (options) {
        return this.notify('error', options);
    },
    notify(type, options){
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }
        return notify(options.title, options.content, options.duration, type, options.onClose, options.closable);
    },
    config (options) {
        if (options.top || options.top === 0) {
            defaults.top = options.top;
        }
        if (options.duration || options.duration === 0) {
            defaults.duration = options.duration;
        }
    },
    destroy () {
        let instance = getNotifyInstance();
        notifyInstance = null;
        instance.destroy('notify');
    }
};
