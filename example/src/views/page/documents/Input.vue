<template>
    <div>
        <Example>
            <div class="margin-bottom-1">
                <i-input block/>
            </div>
            <div class="margin-bottom-1">
                <i-input type="textarea" block></i-input>
            </div>
            <div class="margin-bottom-1">
                <i-input/>
                <i-input label="inputLabel"/>
                <i-input pretty frontIcon="lock"/>
                <i-input frontIcon="lock"/>
                <i-input endIcon="lock"/>
                <i-input type="textarea"/>
                <i-input><i-button slot="append">text</i-button></i-input>
            </div>
            <div class="margin-bottom-1">
                <InputNumber v-model="inputValue"></InputNumber><label v-text="inputValue" class="margin-left-1"></label>
            </div>
            <div class="margin-bottom-1">
                <i-switch>Switch</i-switch>
            </div>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentInput',
        data(){
            return {
                inputValue:1,
            }
        }
    };
</script>

<style scoped>

</style>