HTMLElement.prototype.on = function (type, selector, handle) {
    // selector 不为空，证明绑定事件要加代理
    if (!handle) {
        handle = selector;
        selector = null;
    }
    // type 是否有多个
    let types = type.split(/\s+/);

    types.forEach(type => {
        if (!type) {
            return;
        }

        if (!selector) {
            // 无代理
            this.addEventListener(type, handle);
            return;
        }

        // 有代理
        this.addEventListener(type, e => {
            const target = e.target;
            if (target.matches(selector)) {
                handle.call(target, e);
            }
        });
    })
};

HTMLElement.prototype.insertAfter = function (target) {
    const parent = target.parentNode;

    if(parent.lastChild === target)
    {
        parent.appendChild(this);
    }
    else
    {
        parent.insertBefore(this, target.nextSibling);
    }
};

Document.prototype.on = HTMLElement.prototype.on;