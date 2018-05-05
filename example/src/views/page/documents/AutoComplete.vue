<template>
    <Example>
        <AutoComplete v-model="value" icon="search" :data="data" @on-search="handleSearch" @on-change="handleChange">
            <!--<Option v-for="item in data" :value="item" :label="item" :key="item">-->
            <!--<span style="color: red">{{ item }}</span>-->
            <!--</Option>-->
        </AutoComplete>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentAutoComplete',
        props: {

        },
        data () {
            return {
                value: '',
                data: [],
//                data: ['Burns Bay Road', 'Downing Street', 'Wall Street']
            };
        },
        computed: {},
        methods: {
            handleSearch (value) {
                this.data = !value ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ]
            },
            handleChange(value) {

            }
        }
    };
</script>

<style scoped>

</style>