<template>
    <div>
        <Example>
            <i-button border circle @click="showLoading">{{'showLoading'}}</i-button>
        </Example>
        <Example>
            <div class="height-em30 bg-color-blueLight" v-loading="loading"></div>
            <div class="margin-top-1">
                <i-button border circle @click="toggleLoading">toggle loading</i-button>
            </div>
        </Example>
        <Example>
            <div class="height-em30 bg-color-blueLight" v-loading="true" loading-text="loading text by attribute"></div>
        </Example>
        <Example>
            <Loading>loading text</Loading>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentLoading',
        data () {
            return {
                loading: false
            }
        },
        methods: {
            toggleLoading () {
                this.loading = !this.loading;
            },
            showLoading () {
                this.$Loading.show();
                setTimeout(() => {
                    this.$Loading.hide();
                }, 5000);
            }
        }
    };
</script>