<template>
    <div>
        <Example>
            <Row :gutter="1" class="demo-row">
                <Column span="6">
                    <div>col-6</div>
                </Column>
                <Column span="6">
                    <div>col-6</div>
                </Column>
                <Column span="6">
                    <div>col-6</div>
                </Column>
                <Column span="6">
                    <div>col-6</div>
                </Column>
            </Row>
        </Example>
        <Example>
            <Row :gutter="1" class="demo-row">
                <Column span="6" md>
                    <div>col-6</div>
                </Column>
                <Column span="6" md>
                    <div>col-6</div>
                </Column>
                <Column span="6" md>
                    <div>col-6</div>
                </Column>
                <Column span="6" md>
                    <div>col-6</div>
                </Column>
            </Row>
        </Example>
        <Example>
            <p>子元素向左排列</p>
            <Row type="flex" justify="start" class="demo-row">
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
            </Row>
            <p>子元素向右排列</p>
            <Row type="flex" justify="end" class="demo-row">
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
            </Row>
            <p>子元素居中排列</p>
            <Row type="flex" justify="center" class="demo-row">
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
            </Row>
            <p>子元素等宽排列</p>
            <Row type="flex" justify="space-between" class="demo-row">
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
            </Row>
            <p>子元素分散排列</p>
            <Row type="flex" justify="space-around" class="demo-row">
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
                <Column span="4"><div>col-4</div></Column>
            </Row>
        </Example>
        <Example>
            <p>顶部对齐</p>
            <Row type="flex" justify="center" align="top" class="demo-row">
                <Column span="4"><div>col-4</div></Column>
                <Column span="4" class="height-em10"><div>col-4</div></Column>
                <Column span="4" class="height-em15"><div>col-4</div></Column>
                <Column span="4" class="height-em20"><div>col-4</div></Column>
            </Row>
            <p>底部对齐</p>
            <Row type="flex" justify="center" align="bottom" class="demo-row">
                <Column span="4"><div>col-4</div></Column>
                <Column span="4" class="height-em10"><div>col-4</div></Column>
                <Column span="4" class="height-em15"><div>col-4</div></Column>
                <Column span="4" class="height-em20"><div>col-4</div></Column>
            </Row>
            <p>居中对齐</p>
            <Row type="flex" justify="center" align="middle" class="demo-row">
                <Column span="4"><div>col-4</div></Column>
                <Column span="4" class="height-em10"><div>col-4</div></Column>
                <Column span="4" class="height-em15"><div>col-4</div></Column>
                <Column span="4" class="height-em20"><div>col-4</div></Column>
            </Row>
        </Example>
    </div>
</template>

<script>
    export default {
        name: 'DocumentGrid'
    }
</script>

<style lang="scss" scoped>
    @import "./../../../../../src/scss/variables";
    .demo-row{
        background: #eee;
        [class*='column-'] {
            div{
                background: $primary-color;
                color:#fff;
                height: $component-size;
                line-height: $component-size;
                text-align: center;
            }
        }
    }
</style>