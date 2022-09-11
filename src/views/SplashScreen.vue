<template>
    <ion-page>
        <ion-content>
            <div ref="wrapper" class="wrapper">
                <lottie-animation
                    class="lottie-anim"
                    :animationData="animation"
                    :loop="true"
                />

                <div class="logo"></div>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { IonContent, IonPage } from '@ionic/vue';
import { LottieAnimation } from 'lottie-web-vue';
import animation from '../assets/lottie/pulse.json'

export default defineComponent({
    name: 'SplashScreen',
    components: {
        IonContent,
        IonPage,
        LottieAnimation
    },
    setup() {
        const wrapper = ref(null);

        onMounted(() => {
            if (wrapper.value) {
                const el: HTMLElement = wrapper.value;

                setTimeout(() => {
                    el.classList.add('shown');
                }, 1);

                setTimeout(() => {    
                    el.classList.remove('shown');
                    el.classList.add('gone');
                    
                    setTimeout(() => {
                        window.location.href = "/home";
                    }, 750);
                }, 1500);
            }
        })

        return {
            wrapper,
            animation
        }
    }
});
</script>
  
<style lang="scss" scoped>
    ion-content {
        --overflow: hidden;
    }
    .wrapper {
        opacity: 0;
        transition: opacity 0.5s;

        &.shown {
            opacity: 1;
        }

        &.gone {
            opacity: 0;
        }
    }
    .lottie-anim {
        position: absolute;
        height: 99%;
        transform: scale(2);
        background-color: transparent;
    }

    .logo {
        position: absolute;
        top: calc(50% - 100px);
        left: calc(50% - 100px);
        border-radius: 50%;
        z-index: 1;
        padding: 100px;
        background-color: white;
        box-shadow: 0px 0px 30px 0px lightgrey;
        animation: shadow 5s infinite;

        h1 {
            font-size: 32px;
            line-height: 32px;
            margin: 0;
        }
    }

    @keyframes shadow {
        0% {
            box-shadow: 0px 0px 0px 0px lightgrey;
        }
        50% {
            box-shadow: 0px 0px 30px 10px lightgrey;
        }
        100% {
            box-shadow: 0px 0px 0px 0px lightgrey;
        }
    }
</style>
  