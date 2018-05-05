<template>
    <ul :class="[prefixClass + '-list']">
        <li
                v-for="file in files"
                :class="fileClass(file)"
                @click="handleClick(file)">
            <label class="upload-list-file-info" @click="handlePreview(file)">
                <Icon class="upload-list-file-icon" :type="format(file)"></Icon>
                <span class="upload-list-file-name">{{ file.name }}</span>
            </label>
            <Icon
                    type="error"
                    :class="[prefixClass + '-list-remove']"
                    v-show="file.status === 'finished'"
                    @click.native="handleRemove(file)"></Icon>
            <transition name="fade">
                <i-progress
                        v-if="file.showProgress"
                        :stroke-width="2"
                        :percent="parsePercentage(file.percentage)"
                        :status="file.status === 'finished' && file.showProgress ? 'success' : 'normal'"></i-progress>
            </transition>
        </li>
    </ul>
</template>

<script>
    import Icon from '../Icon.vue';
    import Progress from '../Progress.vue';
    const prefixClass = 'upload';

    export default {
        name: 'UploadList',
        components: { Icon, Progress },
        props: {
            baseUrl: {
                type: String,
                default: ''
            },
            files: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data () {
            return {
                prefixClass: prefixClass
            };
        },
        methods: {
            fileClass (file) {
                return [
                    `${prefixClass}-list-file`,
                    {
                        [`${prefixClass}-list-file-finish`]: file.status === 'finished'
                    }
                ];
            },
            handleClick (file) {
                this.$emit('on-file-click', file);
            },
            handlePreview (file) {
                this.$emit('on-file-preview', file);
            },
            handleRemove (file) {
                this.$emit('on-file-remove', file);
            },
            format (file) {
                const format = file.name.split('.').pop().toLocaleLowerCase() || '';
                let type = 'document';
                if (['gif','jpg','jpeg','png','bmp','webp'].indexOf(format) > -1) {
                    type = 'picture';
                }
                if (['mp4','m3u8','rmvb','avi','swf','3gp','mkv','flv'].indexOf(format) > -1) {
                    type = 'video';
                }
                if (['mp3','wav','wma','ogg','aac','flac'].indexOf(format) > -1) {
                    type = 'audio';
                }
                if (['doc','txt','docx','pages','epub','pdf'].indexOf(format) > -1) {
                    type = 'document';
                }
                if (['numbers','csv','xls','xlsx'].indexOf(format) > -1) {
                    type = 'excel';
                }
                if (['keynote','ppt','pptx'].indexOf(format) > -1) {
                    type = 'ppt';
                }
                return type;
            },
            parsePercentage (val) {
                return parseInt(val, 10);
            }
        }
    }
</script>
