<template>
    <ul class="picture-uploader-list">
        <li v-for="file in files"
            :class="fileClass(file)"
            @click="handleClick(file)">
            <img class="picture-box-img" :height="height" :src="file.filePath?(baseUrl+file.filePath):defaultPicture" @click="handlePreview(file)"/>
            <Icon
                    type="error"
                    class="picture-uploader-remove-button"
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
        <slot></slot>
    </ul>
</template>

<script>
    import Icon from '../Icon.vue';
    import Progress from '../Progress.vue';

    export default {
        name: 'PictureUploadList',
        components: { Icon, Progress },
        props: {
            baseUrl: {
                type: String
            },
            defaultPicture: {
                type: String
            },
            height: {
                type: Number,
                default: 96
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
            };
        },
        methods: {
            fileClass (file) {
                return [
                    `picture-box`,
                    {
                        [`picture-uploader-item-finish`]: file.status === 'finished'
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
            parsePercentage (val) {
                return parseInt(val, 10);
            }
        }
    }
</script>
