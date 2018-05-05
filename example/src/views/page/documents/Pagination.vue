<template>
    <div>
        <Pagination :total="total" show-sizer show-elevator show-total :current.sync="current"></Pagination>
        <div class="margin-top-1 margin-bottom-1">
            <Button @click="subject">Subject</Button>
            <Button @click="change">Change</Button>
            {{ current }}
        </div>
        <Pagination :current="2" :total="50"></Pagination>
    </div>
</template>

<script>
    export default {
        name: 'DocumentPagination',
        data () {
            return {
                current: 1,
                total: 21
            }
        },
        methods: {
            subject() {
                this.total -= 1;
            },
            change() {
                this.current = 1;
            }
        }
    };
</script>

<style scoped>

</style>