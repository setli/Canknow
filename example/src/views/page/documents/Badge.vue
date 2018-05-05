<template>
    <Example>
        <Badge dot>
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge dot>
            <Icon type="user" size="2.4"></Icon>
        </Badge>
        <Badge count="100">
            <a href="#" class="demo-badge"></a>
        </Badge>
        <Badge count="1000" overflow-count="999">
            <a href="#" class="demo-badge"></a>
        </Badge>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentBadge'
    }
</script>
<style lang="scss">
    @import "./../../../../../src/scss/variables.scss";
    .demo-badge{
        width: $component-size-large;
        height: $component-size-large;
        background: $background-color;
        border-radius: $border-radius;
        display: inline-block;
    }
</style>