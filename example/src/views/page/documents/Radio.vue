<template>
    <div>
        <Example>
            <Radio v-model="single">radio</Radio>
            <label>{{single}}</label>
        </Example>
        <Example>
            <RadioGroup v-model="animal">
                <Radio label="orange"></Radio>
                <Radio label="apple"></Radio>
                <Radio label="banana"></Radio>
            </RadioGroup>
            <label>{{animal}}</label>
        </Example>
    </div>

</template>

<script>
    export default {
        name: 'DocumentRadio',
        data() {
            return {
                single: false,
                animal: 'orange'
            }
        }
    };
</script>

<style scoped>

</style>