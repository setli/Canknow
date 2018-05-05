<template>
    <Example>
        <Tooltip content="这里是提示文字">
            当鼠标经过这段文字时，会显示一个气泡框
        </Tooltip>
        <div slot="code" v-highlight>
            <pre>
                <code>
                    var count = 0;
                </code>
            </pre>
        </div>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentTooltip'
    };
</script>

<style scoped>

</style>