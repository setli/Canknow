<template>
    <div class="toolbar-item" ref="toolbarItem" :class="{ active: active}">
        <i-button border type="icon" @click="handleClick" icon="justifyright"></i-button>
    </div>
</template>

<script>
    export default {
        name: 'JustifyRight',
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
                editor.command.do('justifyRight');
            },
            tryChangeActive (e) {
                const editor = this.editor;
                if (editor.command.queryCommandState('justifyRight')) {
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