<template>
    <Example>
        <TabNavigation :activeName="activeName" @on-select="handleSelect" class="margin-bottom-1">
            <TabNavigationMenuItem title="item1" icon="user" name="item1"></TabNavigationMenuItem>
            <TabNavigationMenuItem title="item2" icon="user" name="item2"></TabNavigationMenuItem>
            <TabNavigationMenuItem title="item3" icon="user" name="item3"></TabNavigationMenuItem>
        </TabNavigation>
        <TabNavigation match-parent :activeName="activeName" @on-select="handleSelect" class="margin-bottom-1">
            <TabNavigationMenuItem title="item1" icon="user" name="item1"></TabNavigationMenuItem>
            <TabNavigationMenuItem title="item2" icon="user" name="item2"></TabNavigationMenuItem>
            <TabNavigationMenuItem title="item3" icon="user" name="item3"></TabNavigationMenuItem>
        </TabNavigation>
        <TabNavigation :activeName="activeName" type="card" @on-select="handleSelect">
            <TabNavigationMenuItem title="item1" icon="user" name="item1"></TabNavigationMenuItem>
            <TabNavigationMenuItem title="item2" icon="user" name="item2"></TabNavigationMenuItem>
            <TabNavigationMenuItem title="item3" icon="user" name="item3"></TabNavigationMenuItem>
        </TabNavigation>
        <TabNavigation match-parent :activeName="activeName" type="card" @on-select="handleSelect">
            <TabNavigationMenuItem title="item1" icon="user" name="item1"></TabNavigationMenuItem>
            <TabNavigationMenuItem title="item2" icon="user" name="item2"></TabNavigationMenuItem>
            <TabNavigationMenuItem title="item3" icon="user" name="item3"></TabNavigationMenuItem>
        </TabNavigation>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentTabNavigation',
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