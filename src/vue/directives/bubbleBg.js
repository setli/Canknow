import {getStyle} from './../utils/assist';

class Bubble{
    static get defaultConfig() {
        return {
            shadowColor: "#fff",
            colorStart: "#2AE",
            colorStop: "#17B",
            canvas: null,
            bubbleFunc: () => `hsla(0, 0%, 100%, ${Math.random() * 0.1})`,
            animate: true,
            parent: document.body,
            compose: "lighter"
        }
    }
    constructor(options) {
        this.config = Object.assign({}, Bubble.defaultConfig, options);
        this.initialize();
    }
    initialize() {
        const random = Math.random;
        this.canvas = this.config.canvas || document.createElement("canvas");
        this.canvas.style.width='100%';
        this.canvas.style.height='100%';
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        if (this.canvas.parentNode === null) {
            this.canvas.setAttribute("style", "position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;");
            this.width = this.canvas.width = window.innerWidth;
            this.height = this.canvas.height = window.innerHeight;
            this.config.parent.appendChild(this.canvas);
        }
        this.context = this.canvas.getContext("2d");
        this.context.shadowColor = this.config.shadowColor || "#fff";
        this.context.shadowBlur = this.config.blur || 4;

        this.gradient = this.context.createLinearGradient(0, 0, this.width, this.height);
        this.gradient.addColorStop(0, this.config.colorStart || "#2AE");
        this.gradient.addColorStop(1, this.config.colorStop || "#17B");
        const nrBubbles = this.config.bubbles || Math.floor((this.width + this.height) * 0.02);
        this.bubbles = [];

        for (let i = 0; i < nrBubbles; i++) {
            this.bubbles.push({
                f: this.config.bubbleFunc(), // fillStyle
                x: random() * this.width, // x-position
                y: random() * this.height, // y-position
                r: 4 + (random() * this.width / 25), // radius
                a: random() * Math.PI * 2, // angle
                v: 0.1 + random() * 0.5 // velocity
            });
        }
        this.draw();
    }
    draw() {
        if (this.canvas.parentNode === null) {
            return cancelAnimationFrame(this.draw)
        }
        if (this.config.animate !== false) {
            requestAnimationFrame(this.draw.bind(this));
        }
        this.context.globalCompositeOperation = "source-over";
        this.context.fillStyle = this.gradient;
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.globalCompositeOperation = this.config.compose;
        this.bubbles.forEach(bubble => {
            this.context.beginPath();
            this.context.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
            this.context.fillStyle = bubble.f;
            this.context.fill();
            // update positions for next draw
            bubble.x += Math.cos(bubble.a) * bubble.v;
            bubble.y += Math.sin(bubble.a) * bubble.v;
            if (bubble.x - bubble.r > this.width) {
                bubble.x = -bubble.r;
            }
            if (bubble.x + bubble.r < 0) {
                bubble.x = this.width + bubble.r;
            }
            if (bubble.y - bubble.r > this.height) {
                bubble.y = -bubble.r;
            }
            if (bubble.y + bubble.r < 0) {
                bubble.y = this.height + bubble.r;
            }
        });
    }
}
export default {
    bind (el, binding, vnode) {
        new Bubble({
            parent: el,
            colorStart: "#fff4e6",
            colorStop: "#ffe9e4",
            blur: 1,
            compose: "source-over",
            bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
        });
    },
    update () {

    },
    unbind (el, binding) {

    }
};