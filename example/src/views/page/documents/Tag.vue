<template>
    <Example>
        <Tag>tag</Tag>
        <Tag :closable="true">tag</Tag>
        <Tag :closable="true" :disabled="true">tag</Tag>
        <Tag scene="dark" :closable="true" color="blue">tag</Tag>
    </Example>
</template>

<script>
    export default {
        name: "DocumentTag"
    }
</script>