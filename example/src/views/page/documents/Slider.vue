<template>
    <Example>
        <Slider v-model="value1"></Slider>
        <Slider v-model="value2" range></Slider>
        <Slider v-model="value3" range disabled></Slider>
    </Example>
</template>

<script>
    export default {
        name: 'DocumentSlider',
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50]
            }
        }
    };
</script>

<style scoped>

</style>