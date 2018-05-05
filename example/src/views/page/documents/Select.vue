<template>
    <div>
        <Example>
            <i-select v-model="model" style="width:200px">
                <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
            <label>{{model}}</label>
        </Example>
        <Example>
            <i-select v-model="model" style="width:200px" :clearable="true">
                <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
            <label>{{model}}</label>
        </Example>
        <Example>
            <i-select v-model="model" filterable style="width:200px">
                <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </i-select>
        </Example>
        <Example>
            <i-select v-model="multiModel" multiple block>
                <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
        </Example>
        <Example>
            <i-select block>
                <template slot="selectValue">
                    <span class="culture-flag-zw select-selected-icon"></span><span class="select-selected-text">culture-flag-zw</span>
                </template>
                <i-option :value="0">
                    <span class="culture-flag-zw select-item-icon"></span><span class="select-item-text">culture-flag-zw</span>
                </i-option>
                <i-option :value="1">
                    <span class="culture-flag-zm-flag-zw select-item-icon"></span><span class="select-item-text">culture-flag-zm</span>
                </i-option>
            </i-select>
        </Example>
    </div>
</template>

<script type="text/jsx">
    export default {
        name: 'DocumentSelect',
        data () {
            return {
                multiModel: [],
                model: '',
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
            }
        },
        methods: {
            getLabel () {
                return (
                    <span class="culture-flag-zw select-item-icon"></span>
                )
            }
        }
    };
</script>

<style scoped>

</style>