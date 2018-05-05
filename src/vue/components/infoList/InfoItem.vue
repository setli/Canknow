<template>
    <li class="info-item">
        <label class="info-item-label" :style="labelStyles">{{label}}</label>
        <div class="info-item-content"><slot></slot></div>
    </li>
</template>

<script>
    export default {
        name: 'InfoItem',
        props: {
            labelWidth: {
              type: [String, Number]
            },
            label: {
                type: String
            }
        },
        computed: {
            labelStyles () {
                let style = {};
                const labelWidth = this.labelWidth || this.infoList.labelWidth;

                if (labelWidth) {
                    style.width = `${labelWidth}px`;
                }
                return style;
            },
            infoList() {
                return this.$parent;
            },
        }
    }
</script>
