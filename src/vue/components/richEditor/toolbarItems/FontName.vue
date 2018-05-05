<template>
    <div class="toolbar-item" ref="toolbarItem" :class="{ active: active}">
        <i-select v-model="selectedValue" @on-change="handleOnChange" :placeholder="t('core.richEditor.toolbar.fontName.select.placeHolder')">
            <i-option v-for="fontName in fontNames" :key="fontName" :value="fontName">{{fontName}}</i-option>
        </i-select>
    </div>
</template>

<script>
    import Locale from '../../../mixins/locale';
    const fontNames = [
        '宋体',
        '微软雅黑',
        'Arial',
        'Tahoma',
        'Verdana'
    ];

    export default {
        name: 'FontName',
        mixins: [ Locale ],
        props: {
            editor: {
                type: Object
            }
        },
        data () {
            return {
                selectedValue: null,
                fontNames,
                active: false
            }
        },
        methods: {
            handleOnChange (value) {
                const editor = this.editor;
                editor.command.do('fontName', value);
            }
        }
    }
</script>

<style scoped>

</style>