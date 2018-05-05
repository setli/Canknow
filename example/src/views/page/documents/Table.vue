<template>
    <div>
        <Example>
            <i-table
                    :data="tableData"
                    highlight-current-row>
                <i-table-column
                        prop="date"
                        label="date"
                        width="180">
                </i-table-column>
                <i-table-column
                        prop="name"
                        label="name"
                        width="180">
                </i-table-column>
                <i-table-column
                        prop="address"
                        label="address">
                </i-table-column>
            </i-table>
        </Example>
        <Example>
            <i-table
                    :data="tableData"
                    highlight-current-row>
                <i-table-column
                        type="selection"
                        width="55">
                </i-table-column>
                <i-table-column
                        prop="date"
                        label="date"
                        width="180">
                </i-table-column>
                <i-table-column
                        prop="name"
                        label="name"
                        width="180">
                </i-table-column>
                <i-table-column
                        prop="address"
                        label="address">
                </i-table-column>
            </i-table>
        </Example>
        <Example>
            <i-table
                    :data="tableData"
                    height="200"
                    border
                    style="width: 100%">
                <i-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </i-table-column>
                <i-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </i-table-column>
                <i-table-column
                        prop="address"
                        label="地址">
                </i-table-column>
            </i-table>
        </Example>
        <Example>
            <i-table
                    :data="tableData"
                    v-loading="true"
                    highlight-current-row>
                <i-table-column
                        prop="date"
                        label="date"
                        width="180">
                </i-table-column>
                <i-table-column
                        prop="name"
                        label="name"
                        width="180">
                </i-table-column>
                <i-table-column
                        prop="address"
                        label="address">
                </i-table-column>
            </i-table>
        </Example>
        <Example>
            <row>
                <column :span="12">
                    <i-table
                            :data="tableData1"
                            border>
                        <table-column
                                fixed
                                prop="date"
                                label="date"
                                width="150">
                        </table-column>
                        <table-column
                                prop="name"
                                label="name"
                                width="120">
                        </table-column>
                        <table-column
                                prop="province"
                                label="province"
                                width="120">
                        </table-column>
                        <table-column
                                prop="city"
                                label="city"
                                width="120">
                        </table-column>
                        <table-column
                                prop="address"
                                label="address"
                                width="300">
                        </table-column>
                        <table-column
                                prop="zip"
                                label="zip"
                                width="120">
                        </table-column>
                        <table-column
                                fixed="right"
                                label="action"
                                width="200">
                            <template slot-scope="scope">
                                <i-button border circle @click="handleClick(scope.row)" size="small">detail</i-button>
                                <i-button border circle size="small">edit</i-button>
                            </template>
                        </table-column>
                    </i-table>
                </column>
            </row>
        </Example>
    </div>
</template>

<script>
    import TabPane from "../../../../../src/vue/components/tab/Pane";

    export default {
        components: {TabPane},
        name: 'DocumentTable',
        data() {
            return {
                display: false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                tableData1: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }]
            }
        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            show () {
                this.display = true;
            }
        }
    };
</script>