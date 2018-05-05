<template>
    <div class="toolbar-item" ref="toolbarItem" :class="{ active: active}">
        <i-button border type="icon" @click="handleClick" icon="link"></i-button>
        <modal v-model="showModal" :title="t('core.richEditor.toolbar.link.modal.title')">
            <i-form>
                <form-item>
                    <i-input block name="url" type="url" v-model="url" :placeholder="t('core.richEditor.toolbar.link.urlPlaceholder')"></i-input>
                </form-item>
                <form-item>
                    <i-input block value="text" type="text" v-model="text" :placeholder="t('core.richEditor.toolbar.link.textPlaceholder')"></i-input>
                </form-item>
            </i-form>
            <div slot="footer">
                <i-button border circle icon="back" @click="handleCancel">{{t('core.modal.cancelText')}}</i-button>
                <i-button :disabled="disabledInsert" border circle icon="save" scene="primary" @click="insert">{{t('core.modal.okText')}}</i-button>
            </div>
        </modal>
    </div>
</template>

<script>
    import Uploader from './../../uploader/Uploader';
    import Locale from '../../../mixins/locale';

    export default {
        name: 'Link',
        mixins: [ Locale ],
        components: {
            Uploader
        },
        props: {
            editor: {
                type: Object
            }
        },
        data () {
            return {
                url: null,
                text: null,
                showModal: false,
                active: false
            }
        },
        computed: {
            disabledInsert () {
                if (!this.url || !this.text)  {
                    return true;
                }
                return false;
            }
        },
        methods: {
            handleCancel () {
              this.showModal = false;
            },
            insert () {
                const editor = this.editor;
                editor.command.do('insertHTML', ``);
                this.videoHtml =null;
                this.showModal = false;
            },
            handleClick () {
                this.showModal = true;
            }
        }
    }
</script>

<style scoped>

</style>