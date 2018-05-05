<template>
    <Example>
        <Breadcrumb>
            <BreadcrumbItem to="/">Home4</BreadcrumbItem>
            <BreadcrumbItem :to="{name: 'user', params: { userId: 123 }}">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentBreadcrumb'
    }
</script>

<style scoped>

</style>