<style lang="scss">
    #site-banner{
        height: 640px;
        overflow: hidden;
        background-color: #24292e;
        background-size: 100%;
        text-align: center;
        margin: 0;
        .image-layout-body{
            padding-top: 169px;
            .site-description{
                h1{
                    color:#fff;
                }
                h2{
                    color:#fff;
                }
                p{
                    color:#fff;
                }
            }
        }
        .canvas-box{
            position: absolute;
            left:0;
            top:0;
            width: 100%;
            height: 100%;
        }
    }
</style>
<template>
    <div class="page-content">
        <div class="image-layout" id="site-banner">
            <img src="./../../image/star-bg.svg">
            <div class="image-layout-body">
                <div class="canvas-box" id="canvasBox"></div>
                <div class="container site-description">
                    <h1>Classic modular front-end framework</h1>
                    <p>The front end UI solution for all levels of the front and back apes, the zero threshold open, and the front end for all levels</p>
                    <a class="text-button large light border margin-top-2" href="https://github.com/canknow/Canknow"><Icon type="download"></Icon>Github</a>
                </div>
            </div>
        </div>
        <div class="section">
            <Row>
                <Column :span="12" class="text-center padding-2 banner-title-wrapper">
                    <h1>{{author}} DESIGNs</h1>
                    <p><span>Out of the box with china front design solutions</span></p>
                </Column>
                <Column :span="12" class="text-center padding-2">
                    <img class="width-full" src="https://www.canvasflip.com/images/home-page/first-fold-image.png">
                </Column>
            </Row>
        </div>
        <div class="container">
            <div class="content-wrapper margin-top-2">
                <div class="text-wrapper-bottom">
                    <Row>
                        <Column :span="12" md>
                            <img class="width-full center-block" src="https://t.alipayobjects.com/images/T1lyJkXg4aXXXXXXXX.png">
                        </Column>
                        <Column :span="12" md>
                            <h1 class="text-center"><span>Small. Determination. Happiness</span></h1>
                            <p class="text-center margin-bottom-2"><span>This is a medium - background design language dedicated to improving the use of "users" and "designers".</span></p>
                        </Column>
                    </Row>
                </div>
                <div class="image4 bottom-wrapper"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import packageConfig from './../../../../package';
    import {AdditiveBlending, ImageUtils, PerspectiveCamera,Scene,ParticleCanvasMaterial,ParticleBasicMaterial,Particle , CanvasRenderer} from 'three';
    export default {
        name:'Index',
        computed:{
            author:()=>{
                return packageConfig.author;
            },
            name:()=>{
                return packageConfig.name;
            }
        },
        mounted(){
            let SEPARATION = 100, AMOUNTX = 100, AMOUNTY = 30;
            let container = document.getElementById('canvasBox');
            let camera, scene, renderer;
            let particles, particle, count = 0;
            let mouseX = 0, mouseY = 0;
            let width =window.getComputedStyle(container).width.replace('px','');
            let height=window.getComputedStyle(container).height.replace('px','');
            let windowHalfX =width/ 2;
            let windowHalfY = height/ 2;

            init();
            animate();

            function init() {
                camera = new PerspectiveCamera( 120, width /height, 1, 10000 );
                camera.position.z = 1000;

                scene = new Scene();
                particles = [];

                let PI2 = Math.PI * 2;
                let material = new ParticleCanvasMaterial( {
                    color: 0xe1e1e1,
                    program: function ( context ) {
                        context.beginPath();
                        context.arc( 0, 0, 0.6, 0, PI2, true );
                        context.fill();
                    }
                });
/*                let material=new ParticleBasicMaterial({
                    color: 0xFFFFFF,
                    size: 20,
                    map: ImageUtils.loadTexture(
                        "images/particle.png"
                    ),
                    blending: AdditiveBlending,
                    transparent: true
                });*/
                let i = 0;
                for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

                    for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
                        particle = particles[ i ++ ] = new Particle( material );
                        particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
                        particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
                        scene.add( particle );
                    }
                }
                renderer = new CanvasRenderer({
                    alpha:true,
                });
                renderer.setSize( window.innerWidth, window.innerHeight );
                container.appendChild( renderer.domElement );

                document.addEventListener( 'mousemove', onDocumentMouseMove, false );
                window.addEventListener( 'resize', onWindowResize, false );
            }

            function onWindowResize() {
                let width =window.getComputedStyle(container).width.replace('px','');
                let height=window.getComputedStyle(container).height.replace('px','');

                windowHalfX =width / 2;
                windowHalfY = height/ 2;
                camera.aspect = width/ height;
                camera.updateProjectionMatrix();
                renderer.setSize( width, height);
            }

            function onDocumentMouseMove( event ) {
                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;
            }

            function animate() {
                requestAnimationFrame( animate );
                render();
            }
            function render() {
                camera.position.x += ( mouseX - camera.position.x ) * .05;
                camera.position.y += ( - mouseY - camera.position.y ) * .05+20;
                camera.lookAt( scene.position );
                let i = 0;

                for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

                    for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
                        particle = particles[ i++ ];
                        particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
                        particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;
                    }
                }
                renderer.render( scene, camera );
                count += 0.1;
            }
        }
    }
</script>