export function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);

    if (r != null)
        return unescape(r[2]);
}

export function getUrlRelativePath() {
    let url = document.location.toString();
    let arrUrl = url.split("//");

    let start = arrUrl[1].indexOf("/");
    let relUrl = arrUrl[1].substring(start);

    if (relUrl.indexOf("?") != -1) {
        relUrl = relUrl.split("?")[0];
    }
    return relUrl;
}

export function parsePath(path) {
    let pathItems = path.split("/");
    return pathItems;
}

export function normalizeNumber(number, min, max, defaultValue) {

    if (number == undefined || number == null || isNaN(number)) {
        return defaultValue;
    }

    if (number < min) {
        return min;
    }

    if (number > max) {
        return max;
    }
    return number;
}

/* Formats a string just like string.format in c#.
 *  Example:
 *  formatString('Hello {0}','Halil') = 'Hello Halil'
 *************************************************************************/
export function formatString() {

    if (arguments.length == 0) {
        return null;
    }
    let str = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        let placeHolder = '{' + (i - 1) + '}';
        str = str.replace(placeHolder, arguments[i]);
    }
    return str;
}


// For Modal scrollBar hidden
let cached;
export function getScrollBarSize (fresh) {

    if (fresh || cached === undefined) {
        const inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        const outer = document.createElement('div');
        const outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        const widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        let widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }
        document.body.removeChild(outer);
        cached = widthContained - widthScroll;
    }
    return cached;
}

export function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

export function getStyle (element, styleName) {

    if (!element || !styleName)
        return null;
    styleName = camelCase(styleName);

    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    }
    catch(e) {
        return element.style[styleName];
    }
}

// firstUpperCase
export function firstUpperCase(string) {
    return string.toString()[0].toUpperCase() + string.toString().slice(1);
}

export function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'Date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
}

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500) {

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000/60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {

        if (start === end)
            return;

        let d = (start + step > end) ? end : start + step;

        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        }
        else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}

export function getType (obj) {
    return Object.prototype.toString.call(obj)
}

export const types = {
    bool: '[object Boolean]',
    number: '[object Number]',
    string: '[object String]',
    function: '[object Function]',
    array: '[object Array]',
    date: '[object Date]',
    reg: '[object RegExp]',
    object: '[object Object]',
    error: '[object Error]'
};

//  是否是数组
export function isArray (obj) {
    return getType(obj) === types.array;
}

//  是否是数值
export function isNumber (obj) {
    return getType(obj) === types.number;
}

//  是否是日期
export function isDate (obj) {
    return getType(obj) === types.date;
}

export function isString (obj) {
    return getType(obj) === types.string;
}

export function isObject (obj) {
    return getType(obj) == types.object;
}