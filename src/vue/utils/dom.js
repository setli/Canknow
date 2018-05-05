export function viewport () {
    let element = window,
        a = 'inner';

    if (!('innerWidth' in window)) {
        a = 'client';
        element = document.documentElement || document.body;
    }

    return {
        width: element[a + 'Width'],
        height: element[a + 'Height']
    }
}

export const on = (function() {
    return function(element, event, handler) {
        if (element && event && handler) {
            element.addEventListener(event, handler, false);
        }
    };
})();

export const off = (function() {
    return function(element, event, handler) {
        if (element && event) {
            element.removeEventListener(event, handler, false);
        }
    };
})();

export const once = function(element, event, fn) {
    const listener = function() {
        if (fn) {
            fn.apply(this, arguments);
        }
        off(element, event, listener);
    };
    on(element, event, listener);
};

export function hasClass(element, className) {
  return element.classList && element.classList.contains(className);
}

export function addClass(element, className) {
    return element.classList && element.classList.add(className);
}

export function removeClass(element, className) {
    return element.classList && element.classList.remove(className);
}

export function getStyle (element, property) {
    return window.getComputedStyle(element).getPropertyValue(property);
}

export function height (element) {
    if (element === window) {
        return viewport().height;
    }
    return parseFloat(getStyle(element, 'height'));
}

export function width (element) {
    if (element === window) {
        return viewport().width;
    }
    return parseFloat(getStyle(element, 'width'));
}

export function offset (element) {
    if (element === window) {
        return {top: 0, left: 0};
    }
    let {top, left} = element.getBoundingClientRect();
    return {top, left}
}

let _scrollBarWidth;

export const scrollBarWidth = function () {
    if (scrollBarWidth !== undefined)
        return _scrollBarWidth;
    const outer = document.createElement('div');
    outer.className = 'scrollbar-wrap';
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    _scrollBarWidth = widthNoScroll - widthWithScroll;

    return scrollBarWidth;
};

export const getElementLeft = function (element){
    let actualLeft = element.offsetLeft;
    let current = element.offsetParent;

    while (current !== null){
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
};

export const getElementTop = function (element){
    let actualTop = element.offsetTop;
    let current = element.offsetParent;

    while (current !== null){
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
};

// parentUntil 找到符合 selector 的父节点
export const closest = (selector, currentElement) => {
    const results = document.querySelectorAll(selector);
    const length = results.length;
    if (!length) {
        // 传入的 selector 无效
        return null;
    }
    const element = currentElement;
    if (element.nodeName === 'BODY') {
        return null;
    }
    const parent = element.parentElement;
    for (let i = 0; i < length; i++) {
        if (parent === results[i]) {
            // 找到，并返回
            return parent;
        }
    }
    // 继续查找
    return closest(selector, parent);
};
