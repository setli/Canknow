<template>
    <footer class="page-footer">
        <p>
            <label class="copyright">© {{aboutUs}}</label>
            <label class="about-us">{{copyRight}}</label>
        </p>
    </footer>
</template>
<script>
    export default {
        name:'PageFooter',
        props:{
            aboutUs:{},
            copyRight:{}
        }
    }
</script>