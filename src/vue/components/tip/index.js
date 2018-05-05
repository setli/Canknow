import TipManage from './newInstance';

const prefixClass = 'tip';
const prefixKey = 'tip_key_';

const defaults = {
    duration: 5
};

let tipInstance;
let name = 1;

function getTipInstance () {
    tipInstance = tipInstance || TipManage.newInstance({
        prefixCls: prefixClass,
    });
    return tipInstance;
}

function tip (content = '', duration = defaults.duration, onClose = function () {}, closable = false) {
    let instance = getTipInstance();

    instance.tip({
        name: `${prefixKey}${name}`,
        duration: duration,
        transitionName: 'move-up',
        content: content,
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
    name: 'Tip',
    tip(options){

        if (typeof options === 'string') {
            options = {
                content: options
            };
        }
        return tip(options.content, options.duration, options.onClose, options.closable);
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
        let instance = getTipInstance();
        tipInstance = null;
        instance.destroy('tip');
    }
};
