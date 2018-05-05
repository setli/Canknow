<template>
    <div>
        <div class="row">
            <div class="column-5 md content-padding">
                <Swiper dots="inside" trigger="hover" autoplay loop v-model="value1">
                    <SwiperItem>
                        <img src="./../../../image/slider/1.jpg">
                    </SwiperItem>
                    <SwiperItem>
                        <img src="./../../../image/slider/2.jpg">
                    </SwiperItem>
                    <SwiperItem>
                        <img src="./../../../image/slider/3.jpg">
                    </SwiperItem>
                </Swiper>
            </div>
            <div class="column-5 md content-padding">
                <Swiper dots="inside" trigger="hover" autoplay loop radiusDot v-model="value1">
                    <SwiperItem>
                        <img src="./../../../image/slider/1.jpg">
                    </SwiperItem>
                    <SwiperItem>
                        <img src="./../../../image/slider/2.jpg">
                    </SwiperItem>
                    <SwiperItem>
                        <img src="./../../../image/slider/3.jpg">
                    </SwiperItem>
                </Swiper>
            </div>
        </div>
        <div class="row">
            <div class="column-5 md content-padding">
                <Swiper dots="inside" trigger="hover" autoplay loop v-model="value2">
                    <SwiperItem>
                        <img src="./../../../image/slider/1.jpg">
                    </SwiperItem>
                </Swiper>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DocumentSwiper',
        data () {
            return {
                value1: 0,
                value2: 0
            }
        }
    };
</script>

<style scoped>

</style>