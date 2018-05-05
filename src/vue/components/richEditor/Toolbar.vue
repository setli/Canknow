<template>
    <div ref="toolbar" class="rich-editor-toolbar">
        <component :editor="editor" :is="key" v-for="(key, value) in toolbarItems"></component>
    </div>
</template>
<script>
    import toolbarItems from './toolbarItems';

    export default {
        name: 'Toolbar',
        props: {
          editor: {
              type: Object
          }
        },
        data () {
          return {
              toolbarItems: toolbarItems
          }
        },
        methods: {
            // 尝试修改菜单状态
            changeActive () {
                this.$children.forEach((child) => {
                    if (child.tryChangeActive) {
                        setTimeout(() => {
                            child.tryChangeActive();
                        }, 100);
                    }
                });
            }
        },
        mounted () {

        }
    }
</script>