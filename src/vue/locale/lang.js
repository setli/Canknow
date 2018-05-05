import container from './../container';

export default function (lang) {

    if (typeof window[container.name] !== 'undefined') {

        if (!('langs' in window[container.name])) {
            window[container.name].langs = {};
        }
        window[container.name].langs[lang.core.locale] = lang;
    }
};