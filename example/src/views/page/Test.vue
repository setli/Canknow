<template>
    <div>
        <Example>
            <tab :animated="false">
                <tab-pane label="tab1">
                    tab 1
                </tab-pane>
                <tab-pane label="tab2">
                    <i-table>
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
                </tab-pane>
            </tab>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'Test'
    }
</script>

<style scoped>

</style>