<template>
    <div>
        <Example>
            <date-picker></date-picker>
            <date-picker type="datetime"></date-picker>
            <DatePicker type="daterange" placement="bottom-left" placeholder="Select date" style="width: 200px"></DatePicker>
        </Example>
        <Example>
            <date-picker type="daterange" block :transfer="true"></date-picker>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentDatePicker'
    };
</script>

<style scoped>

</style>