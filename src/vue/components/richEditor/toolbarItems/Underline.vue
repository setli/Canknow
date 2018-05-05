<template>
    <div class="toolbar-item" ref="toolbarItem" :class="{ active: active}">
        <i-button border type="icon" @click="handleClick">U</i-button>
    </div>
</template>

<script>
    export default {
        name: 'Underline',
        props: {
            editor: {
                type: Object
            }
        },
        data () {
          return {
              active: false
          }
        },
        methods: {
            handleClick (e) {
                const editor = this.editor;
                const isSelectionEmpty = editor.selection.isSelectionEmpty();
                if (isSelectionEmpty) {
                    // 选区是空的，插入并选中一个“空白”
                    editor.selection.createEmptyRange();
                }
                editor.command.do('underline');

                if (isSelectionEmpty) {
                    // 需要将选取折叠起来
                    editor.selection.collapseRange();
                    editor.selection.restoreSelection();
                }
            },
            tryChangeActive (e) {
                const editor = this.editor;
                if (editor.command.queryCommandState('underline')) {
                    this.active = true;
                }
                else {
                    this.active = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>