<template>
    <div>
        <h1>关于{{name}}</h1>
        <p>{{name}}是一套基于 Vue.js 的开源 UI 组件库，既是服务于 PC 界面的中后台产品，也是优秀的移动端组件构架工具。</p>
        <ul class="counter-list">
            <li>高质量、功能丰富</li>
            <li>友好的 API ，自由灵活地使用空间</li>
            <li>事无巨细的文档</li>
            <li>细致、漂亮的 UI</li>
            <li>使用单文件的 Vue 组件化开发模式</li>
            <li>基于 npm + webpack + babel 开发，支持 ES2015</li>
        </ul>
    </div>
</template>
<script>
    import packageConfig from './../../../../../package';
    export default {
        name:'DocumentIndex',
        computed:{
            author:()=>{
                return packageConfig.author;
            },
            name:()=>{
                return packageConfig.name;
            },
        },
    }
</script>