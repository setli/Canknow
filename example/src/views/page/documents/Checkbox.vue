<template>
    <div>
        <Example>
            <div class="margin-bottom-1">
                <Checkbox v-model="single" trueValue="yes" falseValue="no">Checkbox</Checkbox><label v-text="single" class="margin-left-1"></label>
            </div>
            <div class="margin-bottom-1">
                <Checkbox-group v-model="fruit">
                    <Checkbox label="banana"></Checkbox>
                    <Checkbox label="apple"></Checkbox>
                    <Checkbox label="orange"></Checkbox>
                </Checkbox-group>
                <label v-text="fruit" class="margin-left-1"></label>
            </div>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentCheckbox',
        data(){
            return {
                single: false,
                fruit: ['apple']
            }
        }
    };
</script>

<style scoped>

</style>