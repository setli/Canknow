<template>
    <MenuItem :name="name" :disabled="disabled">
        <Icon :type="icon" class="menu-item-icon" v-if="icon"></Icon>
        <label class="menu-item-title">{{title}}</label>
    </MenuItem>
</template>

<script>
    export default {
        name: 'TabNavigationMenuItem',
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            title:{
                type: [String, Number],
                required: true
            },
            icon: {
                type: String
            }
        },
        methods:{
        }
    };
</script>

<style scoped>

</style>