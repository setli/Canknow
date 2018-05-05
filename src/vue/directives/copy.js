import Clipboard from 'clipboard';
import Message from './../components/message/index';
import { t } from './../locale/index';

export default {
    bind (el, binding, vnode) {
        const clipboard = new Clipboard(el);
        clipboard.on('success', e => {
            Message.success(t('core.copy.success'));
        });
        clipboard.on('error', e => {
            console.log(e);
            clipboard.destroy()
        });
    }
};
