<template>
    <div>
        <Example>
            <Tab value="name1">
                <TabPane label="tab1" name="name1">
                    <div class="content-padding">tab1 content</div>
                </TabPane>
                <TabPane label="tab2" name="name2">
                    <div class="content-padding">tab2 content</div>
                </TabPane>
                <TabPane label="tab3" name="name3">
                    <div class="content-padding">tab3 content</div>
                </TabPane>
            </Tab>
        </Example>
        <Example>
            <Tab value="name1" type="card">
                <TabPane label="tab1" name="name1">
                    <div class="content-padding">tab1 content</div>
                </TabPane>
                <TabPane label="tab2" name="name2">
                    <div class="content-padding">tab2 content</div>
                </TabPane>
                <TabPane label="tab3" name="name3">
                    <div class="content-padding">tab3 content</div>
                </TabPane>
            </Tab>
        </Example>
        <Example>
            <Tab value="name1" :flex="true">
                <TabPane label="tab1" name="name1">
                    <div class="content-padding">tab1 content</div>
                </TabPane>
                <TabPane label="tab2" name="name2">
                    <div class="content-padding">tab2 content</div>
                </TabPane>
                <TabPane label="tab3" name="name3">
                    <div class="content-padding">tab3 content</div>
                </TabPane>
            </Tab>
        </Example>
        <Example>
            <Tab value="name1" :animated="false">
                <TabPane label="tab1" name="name1">
                    <div class="content-padding">tab1 content</div>
                </TabPane>
                <TabPane label="tab2" name="name2">
                    <div class="content-padding">tab2 content</div>
                </TabPane>
                <TabPane label="tab3" name="name3">
                    <div class="content-padding">tab3 content</div>
                </TabPane>
            </Tab>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentTab'
    };
</script>

<style scoped>

</style>