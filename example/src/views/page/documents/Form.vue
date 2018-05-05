<template>
    <div>
        <Example>
            <Form ref="formInline" :model="formData" :rules="rules" type="inline">
                <FormItem prop="input1">
                    <i-input type="text" v-model="formData.input1" placeholder="input1"></i-input>
                </FormItem>
                <FormItem prop="input2">
                    <i-input type="text" v-model="formData.input2" placeholder="input2"></i-input>
                </FormItem>
                <FormItem>
                    <i-button block scene="primary">submit</i-button>
                </FormItem>
            </Form>
        </Example>
        <Example>
            <Form :label-width="100" :model="formData" :rules="rules" label-position="right">
                <FormItem label="input1" prop="input1">
                    <i-Input v-model="formData.input1" class="block"></i-Input>
                </FormItem>
                <FormItem label="input2" prop="input2">
                    <i-Input v-model="formData.input2" class="block"></i-Input>
                    <span slot="help">this is help text</span>
                </FormItem>
                <FormItem label="">
                    <i-button block scene="primary">submit</i-button>
                </FormItem>
            </Form>
        </Example>
        <Example>
            <Form :label-width="100" :model="formData" :rules="rules">
                <FormItem label="input1" prop="input1">
                    <i-Input v-model="formData.input1" class="block"></i-Input>
                </FormItem>
                <FormItem label="input2" prop="input2">
                    <i-Input v-model="formData.input2" class="block"></i-Input>
                    <span slot="help">this is help text</span>
                </FormItem>
                <FormItem label="">
                    <i-button block scene="primary">submit</i-button>
                </FormItem>
            </Form>
        </Example>
        <Example>
            <Form type="mobile" :model="formData" :rules="rules" label-position="left" :label-width="100">
                <FormItem label="input1" prop="input1">
                    <i-Input v-model="formData.input1" class="block"></i-Input>
                    <span slot="help">this is help text</span>
                </FormItem>
                <FormItem label="input2" prop="input2">
                    <i-Input v-model="formData.input2" class="block"></i-Input>
                </FormItem>
            </Form>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentForm',
        data () {
            return {
                formData: {
                    input1: '',
                    input2: ''
                },
                rules: {
                    input1: [
                        { required: true, message: 'input1', trigger: 'blur' }
                    ],
                    input2: [
                        { required: true, message: 'input2', trigger: 'blur' }
                    ],
                    input3: [
                        { required: true, message: 'input3', trigger: 'blur' }
                    ],
                }
            };
        }
    };
</script>

<style scoped>

</style>