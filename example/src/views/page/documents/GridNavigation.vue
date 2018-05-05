<template>
    <Example>
        {{activeName}}
        <GridNavigation :activeName="activeName" @on-select="handleSelect">
            <GridNavigationMenuItem title="item1" icon="user" name="item1"></GridNavigationMenuItem>
            <GridNavigationMenuItem title="item2" icon="user" name="item2"></GridNavigationMenuItem>
            <GridNavigationMenuItem title="item3" icon="user" name="item3"></GridNavigationMenuItem>
            <GridNavigationMenuItem title="item3" icon="user" name="item3"></GridNavigationMenuItem>
            <GridNavigationMenuItem title="item4" icon="user" name="item4"></GridNavigationMenuItem>
            <GridNavigationMenuItem title="item5" icon="user" name="item5"></GridNavigationMenuItem>
            <GridNavigationMenuItem title="item6" icon="user" name="item6"></GridNavigationMenuItem>
            <GridNavigationMenuItem title="item7" icon="user" name="item7"></GridNavigationMenuItem>
            <GridNavigationMenuItem title="item8" icon="user" name="item8"></GridNavigationMenuItem>
        </GridNavigation>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentGridNavigation',
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