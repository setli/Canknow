<template>
    <div class="example">
        <div class="demo">
            <slot></slot>
        </div>
        <div class="code-box">
            <slot name="code"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Example',
        mounted(){

        }
    };
</script>

<style scoped>

</style>