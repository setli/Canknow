Array.prototype.clone = function(){
    let tmp = [];
    for (let i = 0; i < this.length; i++) tmp[i] = this[i];
    return tmp;
};

Array.prototype.max = function () {
    return Math.max.apply({}, this);
};

Array.prototype.min = function () {
    return Math.min.apply({}, this);
};

Array.prototype.reset = function () {
    for (let i = 0; i < arguments.length; i++)
        this[i] = arguments[i];
    return this;
};

Array.prototype.contains = function (value) {

    for (let i = 0; i < this.length; i++) {

        if (this[i] == value) {
            return true;
        }
    }
    return false;
};

Array.prototype.unique = function() {
    let n = {}, r = [], len = this.length, val, type;
    for (let i = 0; i < this.length; i++) {
        val = this[i];
        type = typeof val;
        if (!n[val]) {
            n[val] = [type];
            r.push(val);
        } else if (n[val].indexOf(type) < 0) {
            n[val].push(type);
            r.push(val);
        }
    }
    return r;
};