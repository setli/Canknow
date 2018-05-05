<template>
    <div class="page-footer-wrap" ref="pageFooterWrap">
        <footer class="page-footer">
            <p class="copyright-logo-wrap" v-if="copyRightLogo">
                <img class="copyright-logo" :src="copyRightLogo"/>
            </p>
            <p class="statement" v-if="statement">
                {{statement}}
            </p>
            <p>
                <label class="copyright" v-if="copyRight">© {{copyRight}}</label>
                <label class="about-us" v-if="aboutUs">{{aboutUs}}</label>
            </p>
        </footer>
        <slot name="out"></slot>
    </div>
</template>

<script>
    import { oneOf, findComponentsDownward, getStyle } from '../utils/assist';

    export default {
        name: 'PageFooter',
        props: {
            statement: {
                type: String
            },
            aboutUs: {
                type: String
            },
            copyRightLogo: {
                type: String
            },
            copyRight: {
                type: String
            },
        },
        mounted(){
            const bottomNavigation = findComponentsDownward(this, 'BottomNavigation');
            if (bottomNavigation && bottomNavigation.length) {
                this.$refs.pageFooterWrap.style.paddingBottom = parseFloat(getStyle(this.$refs.pageFooterWrap, 'paddingBottom'))
                    + parseFloat(getStyle(bottomNavigation[0].$el, 'height')) + 'px';
            }
        }
    };
</script>

<style scoped>

</style>