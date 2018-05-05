<template>
    <MenuItem :name="name" :disabled="disabled" :on-menu-item-select="handleSelect">
        <Icon :type="icon" class="menu-item-icon"></Icon>
        <label class="menu-item-title">{{title}}</label>
    </MenuItem>
</template>

<script>
    export default {
        name: 'CategoryNavigationMenuItem',
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
                type: String,
                required: true
            }
        },
        methods:{
            handleSelect(name) {
                this.$emit('on-menu-item-select', name);
            }
        }
    };
</script>

<style scoped>

</style>