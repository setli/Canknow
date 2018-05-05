<template>
    <div class="toolbar-item" ref="toolbarItem" :class="{ active: active}">
        <i-button border type="icon" @click="handleClick" icon="video"></i-button>
        <modal v-model="showModal" :title="t('core.richEditor.toolbar.video.modal.title')">
            <div class="content-padding">
                <div class="margin-bottom-1">
                    <i-input block type="url" v-model="videoHtml"></i-input>
                </div>
                <p>{{t('core.richEditor.toolbar.video.help')}}：&#60;iframe src=... &#62;&#60;/iframe&#62;</p>
            </div>
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
        name: 'Video',
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
                videoHtml: null,
                showModal: false,
                active: false
            }
        },
        computed: {
            disabledInsert () {
                if (!this.videoHtml)  {
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
                editor.command.do('insertHTML', `${this.videoHtml}<p><br></p>`);
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