<template>
    <div>
        <Example>
            <Uploader :drag="true"></Uploader>
        </Example>
        <Example>
            <Uploader :drag="true" block progress></Uploader>
        </Example>
        <Example>
            <Uploader v-model="path" type="image" :before-upload="handleUpload"></Uploader>
        </Example>
        <Example>
            <Uploader>
                <Button type="text">
                    <Icon type="upload"></Icon>
                    Upload File
                </Button>
            </Uploader>
        </Example>
        <Example>
            <Uploader type="image"
                      multiple
                      :default-file-list="defaultList"
                      :before-upload="handlePictureListUpload"
                      :showUploadList="true"></Uploader>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentUploader',
        data() {
            return {
                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'filePath': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'filePath': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                loadingStatus: false,
                file: null,
                path: null
            }
        },
        methods: {
            handleUpload (file) {
                this.file = file;
                this.upload();
                return false;
            },
            handlePictureListUpload (file) {
                setTimeout(() => {
                    this.defaultList.push({
                        'name': file.name,
                        'filePath': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    });
                }, 1000);
            },
            upload () {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.path = 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar';
                    this.loadingStatus = false;
                    this.$Message.success('Success');
                }, 1500);
            }
        }
    };
</script>

<style scoped>

</style>