<template>
    <div>
        <Example>
            <Menu mode="horizontal">
                <MenuItem name="1-1">article</MenuItem>
                <MenuItem name="1-2">comment</MenuItem>
                <MenuItem name="1-3">order</MenuItem>
            </Menu>
        </Example>
        <Example>
            <div class="page-sidebar">
                <div class="page-sidebar-wrap">
                    <Menu class="width-em30" accordion>
                        <SubMenu name="1">
                            <template slot="title">
                                content
                            </template>
                            <MenuItem name="1-1">article</MenuItem>
                            <MenuItem name="1-2">comment</MenuItem>
                            <MenuItem name="1-3">order</MenuItem>
                        </SubMenu>
                        <SubMenu name="2" icon="user">
                            <template slot="title">
                                user
                            </template>
                            <MenuItem name="2-1">create user</MenuItem>
                            <MenuItem name="2-2">active user</MenuItem>
                        </SubMenu>
                        <MenuItem name="3-1">create user</MenuItem>
                    </Menu>
                </div>
            </div>
        </Example>
        <Example>
            <Menu class="width-em30">
                <SubMenu name="1">
                    <template slot="title">
                        content
                    </template>
                    <MenuItem name="1-1">article</MenuItem>
                    <MenuItem name="1-2">comment</MenuItem>
                    <MenuItem name="1-3">order</MenuItem>
                </SubMenu>
                <SubMenu name="2" icon="user">
                    <template slot="title">
                        user
                    </template>
                    <MenuItem name="2-1">create user</MenuItem>
                    <MenuItem name="2-2">active user</MenuItem>
                </SubMenu>
                <SubMenu name="3" icon="user">
                    <template slot="title">
                        user
                    </template>
                    <MenuItem name="3-1">create user</MenuItem>
                    <MenuItem name="3-2">active user</MenuItem>
                </SubMenu>
            </Menu>
        </Example>
        <Example>
            <Menu class="width-em30" accordion>
                <SubMenu name="1">
                    <template slot="title">
                        content
                    </template>
                    <MenuItem name="1-1">article</MenuItem>
                    <MenuItem name="1-2">comment</MenuItem>
                    <MenuItem name="1-3">order</MenuItem>
                </SubMenu>
                <SubMenu name="2" icon="user">
                    <template slot="title">
                        user
                    </template>
                    <MenuItem name="2-1">create user</MenuItem>
                    <MenuItem name="2-2">active user</MenuItem>
                </SubMenu>
            </Menu>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentMenu'
    }
</script>

<style scoped>

</style>