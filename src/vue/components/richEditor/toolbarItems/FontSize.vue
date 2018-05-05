<template>
    <div class="toolbar-item" ref="toolbarItem" :class="{ active: active}">
        <i-select v-model="selectedValue" @on-change="handleOnChange" :placeholder="t('core.richEditor.toolbar.fontSize.select.placeHolder')">
            <i-option v-for="fontSize in fontSizes" :key="fontSize.name" :value="fontSize.value">{{fontSize.name}}</i-option>
        </i-select>
    </div>
</template>

<script>
    import Locale from '../../../mixins/locale';
    const fontSizes = [
        {
            name: 'x-small',
            value: 1
        },
        {
            name: 'small',
            value: 2
        },
        {
            name: 'normal',
            value: 3
        },
        {
            name: 'large',
            value: 4
        },
        {
            name: 'x-large',
            value: 5
        },
        {
            name: 'xx-large',
            value: 6
        }
    ];

    export default {
        name: 'FontSize',
        mixins: [ Locale ],
        props: {
            editor: {
                type: Object
            }
        },
        data () {
            return {
                selectedValue: null,
                fontSizes,
                active: false
            }
        },
        methods: {
            handleOnChange (value) {
                const editor = this.editor;
                editor.command.do('fontSize', value);
            }
        }
    }
</script>

<style scoped>

</style>