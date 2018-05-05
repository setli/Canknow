<template>
    <Example>
        {{activeName}}
        <BottomNavigation :activeName="activeName" @on-select="handleSelect">
            <BottomNavigationMenuItem title="item1" icon="user" name="item1"></BottomNavigationMenuItem>
            <BottomNavigationMenuItem title="item2" icon="user" name="item2"></BottomNavigationMenuItem>
            <BottomNavigationMenuItem title="item3" icon="user" name="item3"></BottomNavigationMenuItem>
        </BottomNavigation>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentBottomNavigation',
        data () {
            return {
                activeName: 'item1'
            }
        },
        methods: {
            handleSelect (name) {
                this.activeName = name;
            }
        }
    };
</script>

<style scoped>

</style>