class Guid {
    constructor(g) {
        let arr = new Array(); //存放32位数值的数组
        this.arr=arr;

        if (typeof (g) == "string") { //如果构造函数的参数为字符串
            this.initByString(arr, g);
        }
        else {
            this.initByOther(arr);
        }
    }

    equals(o) {

        if (o && o.isGuid) {
            return this.toString() == o.toString();
        }
        else {
            return false;
        }
    }

    isGuid() {

    }

    toString(format) {

        if (typeof (format) == "string") {

            if (format == "N" || format == "D" || format == "B" || format == "P") {
                return this.toStringWithFormat(this.arr, format);
            }
            else {
                return this.toStringWithFormat(this.arr, "D");
            }
        }
        else {
            return this.toStringWithFormat(this.arr, "D");
        }
    }

    initByString(arr, g) {
        g = g.replace(/\{|\(|\)|\}|-/g, "");
        g = g.toLowerCase();

        if (g.length != 32 || g.search(/[^0-9,a-f]/i) != -1) {
            this.initByOther(arr);
        }
        else {
            for (let i = 0; i < g.length; i++) {
                arr.push(g[i]);
            }
        }
    }

    initByOther(arr) {
        let i = 32;

        while (i--) {
            arr.push("0");
        }
    }

    toStringWithFormat(arr, format) {
        let str;

        switch (format) {
            case "N":
                return arr.toString().replace(/,/g, "");
            case "D":
                str = arr.slice(0, 8) + "-" + arr.slice(8, 12) + "-" + arr.slice(12, 16) + "-" + arr.slice(16, 20) + "-" + arr.slice(20, 32);
                str = str.replace(/,/g, "");
                return str;
            case "B":
                str = this.toStringWithFormat(arr, "D");
                str = "{" + str + "}";
                return str;
            case "P":
                str = this.toStringWithFormat(arr, "D");
                str = "(" + str + ")";
                return str;
            default:
                return new Guid();
        }
    }

    static Empty() {
        return new Guid();
    }

    static NewGuid() {
        let g = "";
        let i = 32;

        while (i--) {
            g += Math.floor(Math.random() * 16.0).toString(16);
        }
        return new Guid(g);
    }
}

export default Guid;

export function createGuid() {
    return Guid.NewGuid();
}