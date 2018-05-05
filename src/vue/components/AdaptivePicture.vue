<template>
    <div class="adaptive-picture" :class="{'ratio': ratio}" ref="adaptiveWrap" :style="styles">
        <img class="adaptive-picture-default-picture" v-if="defaultPicture&&!this.loaded" :src="defaultPicture">
        <img ref="img" v-if="mode=='image'&&!(defaultPicture&&!this.loaded)">
    </div>
</template>

<script>
    import {getStyle, oneOf} from '../utils/assist';

    export default {
        name: 'AdaptivePicture',
        props: {
            src: {
                type: String
            },
            width: {
                type: [String, Number],
                default: 64
            },
            height: {
                type: [String, Number],
                default: 48
            },
            ratio: null,
            defaultPicture: {
                type: String
            }
        },
        data:()=>{
          return {
              styles: {},
              mode: 'background',
              loaded: false
          }
        },
        watch:{
            src:function () {
                this.process();
            },
            width: function () {
                this.process();
            },
            height: function () {
                this.process();
            },
            src:function () {
                this.process();
            }
        },
        methods:{
            process(){
                if(!this.ratio){
                    this.styles= {
                        width: `${this.width}px`,
                        height: `${this.height}px`,
                        'backgroundImage': `url(${this.src})`
                    };
                    this.loaded=true;
                }
                else if(this.src){
                    this.mode='image';
                    const image=new Image();
                    image.src=this.src;
                    image.onload=(e)=>{
                        const ratio = e.target.height/e.target.width;
                        if(ratio>this.ratio){
                            this.mode='background';
                            this.computeStylesForRatio();
                            window.addEventListener('resize',()=>{
                                this.computeStylesForRatio();
                            });
                            this.loaded=true;
                        }
                        else{
                            this.$refs.img.src=this.src;
                            this.loaded=true;
                        }
                    };
                }
            },
            computeStylesForRatio(){
                const width=getStyle(this.$refs.adaptiveWrap,'width');
                const height=parseFloat(width)*this.ratio+'px';
                this.styles={
                    height,
                    'backgroundImage': `url(${this.src})`
                }
            }
        },
        mounted(){
            this.process();
        }
    };
</script>

<style scoped>

</style>