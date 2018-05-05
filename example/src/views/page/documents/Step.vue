<template>
    <Example>
        <Steps :current="current">
            <Step v-for="(item, index) in activityList" :title="item.approveUserName" :key="index" :content="item.startTime"></Step>
        </Steps>
        <Steps current="1" status="error">
            <Step v-for="(item, index) in activityList" :title="item.approveUserName" :key="index" :content="item.startTime"></Step>
        </Steps>
        <Button @click="next">next</Button>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentStep',
        data () {
            return {
                current: 0,
                activityList:[
                    {
                        approveUserName:'123',
                        startTime:'1'
                    },
                    {
                        approveUserName:'123',
                        startTime:'2'
                    },
                    {
                        approveUserName:'123',
                        startTime:'3'
                    }
                ]
            }
        },
        computed: {

        },
        methods: {
            next () {

                if (this.current == 2) {
                    this.current = 0;
                }
                else {
                    this.current += 1;
                }
            },
        },
    };
</script>

<style scoped>

</style>