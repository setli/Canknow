<template>
    <div class="file-uploader" :class="classes">
        <PictureUploadList
                v-if="showUploadList&&type=='image'"
                :files="fileList"
                :baseUrl="baseUrl"
                :height="height"
                :defaultPicture="defaultPicture"
                @on-file-remove="handleRemove"
                @on-file-preview="handlePreview">
            <li class="picture-box">
                <div class="file-uploader-box">
                    <div class="picture-box" @click="handleClick">
                        <img class="picture-box-img" :height="height" :src="filePath"/>
                    </div>
                    <input ref="input" type="file" @change="handleChange" :multiple="multiple" accept="accept">
                </div>
            </li>
        </PictureUploadList>
        <div class="file-uploader-box" v-if="!(showUploadList&&type=='image')">
            <div class="picture-box" @click="handleClick" v-if="type=='image'">
                <i-button size="small"
                          v-if="path&&clearable"
                          scene="danger"
                          class="picture-uploader-remove-button"
                          type="icon"
                          icon="error"
                          @click="clearFile"></i-button>
                <img class="picture-box-img" :height="height" :src="filePath"/>
            </div>
            <slot @click="handleClick"></slot>
            <input ref="input" type="file" @change="handleChange" :multiple="multiple" accept="accept">
            <div class="file-select-block"
                 @drop.prevent="onDrop"
                 @dragover.prevent="dragOver = true"
                 @dragleave.prevent="dragOver = false"
                 v-if="drag">
                <i class="file-icon icon-upload"></i>
                <div class="upload-helper"></div>
                <div class="file-path"></div>
            </div>
        </div>
        <Progress ref="progress" :percent="percent" v-if="progress"></Progress>
        <UploadList
                v-if="showUploadList&&type!='image'"
                :files="fileList"
                :baseUrl="baseUrl"
                @on-file-remove="handleRemove"
                @on-file-preview="handlePreview"></UploadList>
    </div>
</template>

<script>
    import ajax from './ajax';
    import Emitter from '../../mixins/emitter';
    import Locale from '../../mixins/locale';
    import defaultPicture from './../../../image/upload-picture.png';
    import { oneOf } from '../../utils/assist';
    import UploadList from './UploadList';
    import PictureUploadList from './PictureUploadList';

    export default {
        name: 'Uploader',
        mixins: [ Locale, Emitter ],
        components: {
            UploadList,
            PictureUploadList
        },
        props:{
            action: {
                type: String,
            },
            baseUrl: {
                type: String
            },
            defaultPicture: {
                type: String,
                default: defaultPicture
            },
            type: {
                type: String,
                default: 'file',
                validator (value) {
                    return oneOf(value, ['file', 'image']);
                },
            },
            headers: {
                type: Object,
                default () {
                    return {};
                }
            },
            multiple: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: true
            },
            data: {
                type: Object
            },
            value: {
                type: String
            },
            name: {
                type: String,
                default: 'file'
            },
            block: {
                type: Boolean,
                default: false
            },
            progress: {
                type: Boolean,
                default: false
            },
            drag: {
                type: Boolean,
                default: false
            },
            withCredentials: {
                type: Boolean,
                default: false
            },
            showUploadList: {
                type: Boolean,
                default: true
            },
            format: {
                type: Array,
                default () {
                    return [];
                }
            },
            accept: {
                type: String
            },
            maxSize: {
                type: Number
            },
            beforeUpload: Function,
            onProgress: {
                type: Function,
                default () {
                    return {};
                }
            },
            onSuccess: {
                type: Function,
                default () {
                    return {};
                }
            },
            onError: {
                type: Function,
                default () {
                    return {};
                }
            },
            onRemove: {
                type: Function,
                default () {
                    return {};
                }
            },
            onPreview: {
                type: Function,
                default () {
                    return {};
                }
            },
            onExceededSize: {
                type: Function,
                default () {
                    return {};
                }
            },
            onFormatError: {
                type: Function,
                default () {
                    return {};
                }
            },
            height: {
                type: Number,
                default: 96
            },
            defaultFileList: {
                type: Array,
                default() {
                    return [];
                }
            },
            resultParse: {
                type: Function,
                default () {
                    return {};
                }
            },
            radius: Boolean
        },
        computed: {
            filePath () {
                let path = this.path;
                if (this.path) {
                    if (!this.path.includes('//') && this.baseUrl) {
                        path = this.baseUrl + this.path;
                    }
                }
                return path || this.defaultPicture;
            },
            classes () {
                return [
                    {
                        ['picture-list-uploader']: this.showUploadList && this.type === 'image',
                        ['block']: this.block!= null&& this.block,
                        ['radius']: this.radius!= null&& this.radius
                    }
                ];
            }
        },
        data () {
            return {
                percent: 0,
                dragOver: false,
                fileList: [],
                path: null,
                tempIndex: 1
            };
        },
        methods: {
            clearFile () {
                this.path = null;
            },
            handleClick () {
                this.$refs.input.click();
            },
            handleChange (e) {
                const files = e.target.files;
                if (!files) {
                    return;
                }
                this.uploadFiles(files);
                this.$refs.input.value = null;
            },
            onDrop (e) {
                this.dragOver = false;
                this.uploadFiles(e.dataTransfer.files);
            },
            uploadFiles (files) {
                let postFiles = Array.prototype.slice.call(files);
                if (postFiles.length === 0) {
                    return;
                }
                if (!this.multiple) {
                    postFiles = postFiles.slice(0, 1);
                }
                postFiles.forEach(file => {
                    this.upload(file);
                });
            },
            upload (file) {
                if (!this.beforeUpload) {
                    return this.post(file);
                }
                const before = this.beforeUpload(file);

                if (before && before.then) {
                    before.then(processedFile => {
                        if (Object.prototype.toString.call(processedFile) === '[object File]') {
                            this.post(processedFile);
                        }
                        else {
                            this.post(file);
                        }
                    }, () => {
                        this.$emit('cancel', file);
                    });
                }
                else if (before !== false) {
                    this.post(file);
                }
                else {
                    this.$emit('cancel', file);
                }
            },
            post (file) {
                // check format
                if (this.format.length) {
                    const _file_format = file.name.split('.').pop().toLocaleLowerCase();
                    const checked = this.format.some(item => item.toLocaleLowerCase() === _file_format);

                    if (!checked) {
                        this.onFormatError(file, this.fileList);
                        return false;
                    }
                }

                // check maxSize
                if (this.maxSize) {

                    if (file.size > this.maxSize * 1024) {
                        this.onExceededSize(file, this.fileList);
                        return false;
                    }
                }
                this.handleStart(file);
                let formData = new FormData();
                formData.append(this.name, file);

                ajax({
                    headers: this.headers,
                    withCredentials: this.withCredentials,
                    file: file,
                    data: this.data,
                    filename: this.name,
                    action: this.action,
                    onProgress: e => {
                        this.handleProgress(e, file);
                    },
                    onSuccess: res => {
                        this.handleSuccess(res, file);
                    },
                    onError: (err, response) => {
                        this.handleError(err, response, file);
                    }
                });
            },
            handleStart (file) {
                file.uid = Date.now() + this.tempIndex++;
                const _file = {
                    status: 'uploading',
                    name: file.name,
                    size: file.size,
                    percentage: 0,
                    uid: file.uid,
                    showProgress: true
                };
                if (this.multiple) {
                    this.fileList.push(_file);
                }
                else {
                    this.fileList.splice(0, this.fileList.length, _file);
                }
            },
            getFile (file) {
                const fileList = this.fileList;
                let target;
                fileList.every(item => {
                    target = file.uid === item.uid ? item : null;
                    return !target;
                });
                return target;
            },
            handleProgress (e, file) {
                const _file = this.getFile(file);
                this.onProgress(e, _file, this.fileList);
                this.percent = e.percent || 0;
                _file.percentage = e.percent || 0;
            },
            handleSuccess (response, file) {
                const _file = this.getFile(file);
                if (_file) {
                    _file.status = 'finished';
                    _file.response = response;

                    const filePath = this.resultParse(response);
                    _file.filePath = filePath;
                    this.$emit('input', filePath);
                    this.dispatch('FormItem', 'on-form-change', _file);
                    this.onSuccess(response, _file, this.fileList);

                    setTimeout(() => {
                        _file.showProgress = false;
                    }, 1000);
                }
            },
            handleError (err, response, file) {
                const _file = this.getFile(file);
                const fileList = this.fileList;
                _file.status = 'fail';
                fileList.splice(fileList.indexOf(_file), 1);
                this.onError(err, response, file);
            },
            handleRemove(file) {
                const fileList = this.fileList;
                fileList.splice(fileList.indexOf(file), 1);
                this.onRemove(file, fileList);
            },
            handlePreview(file) {
                if (file.status === 'finished') {
                    this.onPreview(file);
                }
            },
            clearFiles() {
                this.fileList = [];
            }
        },
        watch: {
            value(newValue) {
                this.path = newValue;
            },
            defaultFileList: {
                immediate: true,
                handler(fileList) {
                    this.fileList = fileList.map(item => {
                        item.status = 'finished';
                        item.percentage = 100;
                        item.uid = Date.now() + this.tempIndex++;
                        return item;
                    });
                }
            }
        },
        mounted() {
            this.path = this.value;
        }
    };
</script>