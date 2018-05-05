<template>
    <div class="toolbar-item" ref="toolbarItem" :class="{ active: active}">
        <i-button border type="icon" @click="handleClick" icon="picture"></i-button>
        <modal v-model="showModal" :title="t('core.richEditor.toolbar.picture.modal.title')">
            <tab v-model="activeName">
                <tab-pane name="pictureUploader" :label="t('core.richEditor.toolbar.picture.pictureUploader')">
                    <div class="content-padding text-center">
                        <Uploader :action="editor.configs.action"
                                  type="image"
                                  :showUploadList="false"
                                  v-model="uploadedPicture"
                                  :clearable="false"
                                  :headers="editor.configs.headers"
                                  :resultParse="editor.configs.resultParse"
                                  :withCredentials="editor.configs.withCredentials"
                                  :baseUrl="editor.configs.baseUrl"
                                  :onSuccess="editor.configs.onSuccess">
                        </Uploader>
                    </div>
                </tab-pane>
                <tab-pane name="netPicture" :label="t('core.richEditor.toolbar.picture.netPicture')">
                    <div class="content-padding">
                        <i-input block type="url" v-model="netPicture"></i-input>
                        <div class="net-picture-wrap">
                            <img :src="netPicture" v-if="netPicture">
                        </div>
                    </div>
                </tab-pane>
            </tab>
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
    import Tab from '../../tab/Tab';
    import TabPane from "../../tab/Pane";

    export default {
        name: 'Picture',
        mixins: [ Locale ],
        components: {
            Tab,
            TabPane,
            Uploader
        },
        props: {
            editor: {
                type: Object
            }
        },
        data () {
            return {
                uploadedPicture: null,
                netPicture: null,
                activeName: 'pictureUploader',
                showModal: false,
                active: false
            }
        },
        computed: {
            disabledInsert () {
                if (this.activeName === 'pictureUploader' && !this.uploadedPicture)  {
                    return true;
                }
                else if (this.activeName === 'netPicture' && !this.netPicture) {
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
                if (this.activeName === 'pictureUploader') {
                    editor.command.do('insertHTML', `<img src="${editor.configs.baseUrl + this.uploadedPicture}"/>`);
                    this.uploadedPicture =null;
                }
                else {
                    editor.command.do('insertHTML', `<img src="${editor.configs.baseUrl + this.netPicture}"/>`);
                    this.netPicture =null;
                }
                this.showModal = false;
            },
            handleClick () {
                this.showModal = true;
            },
            // 试图改变 active 状态
            tryChangeActive (e) {
                const editor = this.editor;
                if (editor.selectedImage) {
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