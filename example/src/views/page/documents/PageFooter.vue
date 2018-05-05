<template>
    <PageFooter :about-us="aboutUs" :copy-right="copyRight" :copyRightLogo="copyRightLogo">
    </PageFooter>
</template>

<script>
    import copyRightLogo from './../../../../../src/image/title-logo.png';
    export default {
        name: 'DocumentPageFooter',
        data () {
            return {
                aboutUs: 'aboutUs',
                copyRight: 'copyRight',
                copyRightLogo: copyRightLogo
            }
        }
    }
</script>
