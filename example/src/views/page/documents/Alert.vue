<template>
    <Example>
        <Alert :closable="true" type="info"><a>link test</a>Content of prompt. Content of prompt. Content of prompt. Content of prompt.</Alert>
        <Alert :closable="true" type="success">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</Alert>
        <Alert :closable="true" type="warning">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</Alert>
        <Alert :closable="true" type="danger">Content of prompt. Content of prompt. Content of prompt. Content of prompt.</Alert>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentAlert'
    };
</script>