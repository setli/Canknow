import MessageManage from './newInstance';

const prefixClass = 'message';
const iconPrefixClass = 'icon';
const prefixKey = 'message_key_';

const defaults = {
    duration: 5
};

let messageInstance;
let name = 1;

const iconTypes = {
    'info': 'info',
    'success': 'smile',
    'warning': 'warning',
    'error': 'cry',
    'loading': 'loading-3'
};

function getMessageInstance () {
    messageInstance = messageInstance || MessageManage.newInstance({
        prefixCls: prefixClass
    });
    return messageInstance;
}

function message (title,content = '', duration = defaults.duration, type, onClose = function () {}, closable = false) {
    const iconType = iconTypes[type];

    // if loading
    const loadClass = type === 'loading' ? ' load-loop' : '';

    let instance = getMessageInstance();
    let body =  `<div class="message-body"><i class="message-icon ${iconPrefixClass}-${iconType}${loadClass}"></i>`;

    if(title) {
        body+=`<label class="message-title">${title}</label>`;
    }
    if(content) {
        body+= `<div class="message-content">${content}</div>`;
    }
    body+= `</div>`;
    instance.message({
        name: `${prefixKey}${name}`,
        duration: duration,
        styles: {},
        transitionName: 'move-up',
        className: type,
        body:body,
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
    name: 'Message',

    info (options) {
        return this.message('info', options);
    },
    success (options) {
        return this.message('success', options);
    },
    warning (options) {
        return this.message('warning', options);
    },
    error (options) {
        return this.message('error', options);
    },
    loading (options) {
        return this.message('loading', options);
    },
    message(type, options){
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }
        return message(options.title, options.content, options.duration, type, options.onClose, options.closable);
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
        let instance = getMessageInstance();
        messageInstance = null;
        instance.destroy('message');
    }
};
