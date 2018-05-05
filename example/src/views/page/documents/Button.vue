<template>
    <div>
        <Example>
            <i-button>default</i-button>
            <i-button scene="dark">dark</i-button>
            <i-button scene="light">light</i-button>
            <i-button scene="gray">gray</i-button>
            <i-button scene="primary">primary</i-button>
            <i-button scene="secondary">secondary</i-button>
            <i-button scene="info">info</i-button>
            <i-button scene="success">success</i-button>
            <i-button scene="warning">warning</i-button>
            <i-button scene="danger">danger</i-button>
            <i-button scene="default">default</i-button>
            <i-button scene="default" :synching="synching" sync-button @click="()=>{ synching = !synching }">default</i-button>
            <i-button scene="default" :loading="true">default</i-button>
        </Example>
        <Example>
            <i-button icon="user">default</i-button>
            <i-button scene="dark" icon="user">dark</i-button>
            <i-button scene="light" icon="user">light</i-button>
            <i-button scene="gray" icon="user">gray</i-button>
            <i-button scene="primary" icon="user">primary</i-button>
            <i-button scene="secondary" icon="user">secondary</i-button>
            <i-button scene="info" icon="user">info</i-button>
            <i-button scene="success" icon="user">success</i-button>
            <i-button scene="warning" icon="user">warning</i-button>
            <i-button scene="danger" icon="user">danger</i-button>
            <i-button scene="default" icon="user">default</i-button>
        </Example>
        <Example>
            <i-button v-ripple="true">default</i-button>
            <i-button scene="dark" v-ripple="true">dark</i-button>
            <i-button scene="primary" v-ripple="true">primary</i-button>
        </Example>
        <Example>
            <i-button ghost>default</i-button>
            <i-button scene="dark" ghost>dark</i-button>
            <i-button scene="light" ghost>light</i-button>
            <i-button scene="gray" ghost>gray</i-button>
            <i-button scene="primary" ghost>primary</i-button>
            <i-button scene="secondary" ghost>secondary</i-button>
            <i-button scene="info" ghost>info</i-button>
            <i-button scene="success" ghost>success</i-button>
            <i-button scene="warning" ghost>warning</i-button>
            <i-button scene="danger" ghost>danger</i-button>
            <i-button scene="default" ghost>default</i-button>
        </Example>
        <Example>
            <i-button icon="user" ghost>default</i-button>
            <i-button scene="dark" icon="user" ghost>dark</i-button>
            <i-button scene="light" icon="user" ghost>light</i-button>
            <i-button scene="gray" icon="user" ghost>gray</i-button>
            <i-button scene="primary" icon="user" ghost>primary</i-button>
            <i-button scene="secondary" icon="user" ghost>secondary</i-button>
            <i-button scene="info" icon="user" ghost>info</i-button>
            <i-button scene="success" icon="user" ghost>success</i-button>
            <i-button scene="warning" icon="user" ghost>warning</i-button>
            <i-button scene="danger" icon="user" ghost>danger</i-button>
            <i-button scene="default" icon="user" ghost>default</i-button>
        </Example>
        <Example>
            <i-button border>default</i-button>
            <i-button scene="dark" border>dark</i-button>
            <i-button scene="light" border>light</i-button>
            <i-button scene="gray" border>gray</i-button>
            <i-button scene="primary" border>primary</i-button>
            <i-button scene="secondary" border>secondary</i-button>
            <i-button scene="info" border>info</i-button>
            <i-button scene="success" border>success</i-button>
            <i-button scene="warning" border>warning</i-button>
            <i-button scene="danger" border>danger</i-button>
            <i-button scene="default" border>default</i-button>
        </Example>
        <Example>
            <i-button border circle>default</i-button>
            <i-button scene="dark" border circle>dark</i-button>
            <i-button scene="light" border circle>light</i-button>
            <i-button scene="gray" border circle>gray</i-button>
            <i-button scene="primary" border circle>primary</i-button>
            <i-button scene="secondary" border circle>secondary</i-button>
            <i-button scene="info" border circle>info</i-button>
            <i-button scene="success" border circle>success</i-button>
            <i-button scene="warning" border circle>warning</i-button>
            <i-button scene="danger" border circle>danger</i-button>
            <i-button scene="default" border circle>default</i-button>
        </Example>
        <Example>
            <i-button icon="user" border>default</i-button>
            <i-button scene="dark" icon="user" border>dark</i-button>
            <i-button scene="light" icon="user" border>light</i-button>
            <i-button scene="gray" icon="user" border>gray</i-button>
            <i-button scene="primary" icon="user" border>primary</i-button>
            <i-button scene="secondary" icon="user" border>secondary</i-button>
            <i-button scene="info" icon="user" border>info</i-button>
            <i-button scene="success" icon="user" border>success</i-button>
            <i-button scene="warning" icon="user" border>warning</i-button>
            <i-button scene="danger" icon="user" border>danger</i-button>
            <i-button scene="default" icon="user" border>default</i-button>
        </Example>
        <Example>
            <i-button scene="default" size="small">small</i-button>
            <i-button scene="default">dault</i-button>
            <i-button scene="default" size="large">large</i-button>
        </Example>
        <Example>
            <i-button scene="default">default</i-button>
            <i-button scene="default" border>border</i-button>
            <i-button scene="default" circle>circle</i-button>
            <i-button scene="default" circle border>circle border</i-button>
        </Example>
        <Example>
            <i-button type="icon" icon="lock"></i-button>
            <i-button type="icon" icon="lock" scene="primary"></i-button>
            <i-button type="icon" icon="lock" scene="primary" border></i-button>
            <i-button type="icon" icon="lock" scene="primary" fill circle></i-button>
            <i-button type="icon" icon="lock" scene="primary" border circle></i-button>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'Documenti-button',
        data () {
            return {
                synching: false
            }
        }
    };
</script>

<style scoped>

</style>