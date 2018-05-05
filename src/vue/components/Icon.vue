<template>
    <i :class="classes" :style="styles"></i>
</template>
<script>
    const prefix = 'icon';

    export default {
        name: 'Icon',
        props: {
            type: String,
            size: [Number, String],
            color: String
        },
        computed: {
            classes () {
                return `${prefix}-${this.type}`;
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['font-size'] = `${this.size}rem`;
                }

                if (this.color) {
                    style.color = this.color;
                }
                return style;
            }
        }
    };
</script>
