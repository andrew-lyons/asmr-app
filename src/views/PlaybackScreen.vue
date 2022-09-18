<template>
    <ion-page>
        <ion-content>
            <div class="playback-main">
                {{ title }}


                {{ assetRoute }}
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage } from '@ionic/vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'HomeScreen',
    components: {
        IonContent,
        IonPage
    },
    setup() {
        const route = useRoute();

        const title = ( route.params['category'] as string);

        const assetRoute = `../assets/mp3/${title}`;

        const audio = require.context(
            '../assets/mp3',
            true,
            /^.*\.mp3/
        ).keys();
        
        return {
            title,
            assetRoute
        }
    }
});
</script>
  
<style lang="scss" scoped>
    @mixin rings($duration, $delay) {
    opacity: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -2px;
    left: -3px;
    right: 0;
    bottom: 0;
    content: '';
    height: 100%;
    width: 100%;
    border: 4px solid rgba(0,0,0,0.2);
    box-shadow: 0 0 40px 15px lightgrey;
    border-radius: 100%;
    animation-name: ripple;
    animation-duration: $duration;
    animation-delay: $delay;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: -1;
}

@keyframes ripple {
    from {
        opacity: 1;
        transform: scale3d(0.75, 0.75, 1);
    }

    to {
        opacity: 0;
        transform: scale3d(1.5, 1.5, 1);
    }
}

ion-content {
    --overflow: hidden;
    --background: rgba(209, 210, 249, 0.25);
}

.home-main {
    display: flex;
    height: 100%;
}

.icon-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 64px;
    width: 100%;
    background: linear-gradient(135deg, #85C9C8, #D4FEE6, #E5FDC9);
    background-size: 400% 400%;
    animation-name: gradient;
    animation-duration: 60s;
    animation-iteration-count: infinite;

    @keyframes gradient {
        0% {
            background-position: 0% 0%;
        }

        50% {
            background-position: 100% 100%;
        }

        100% {
            background-position: 0% 0%;
        }
    }

    &-section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        &:nth-child(2n) {
            justify-content: flex-end;
        }

        &:nth-child(2n+1) {
            justify-content: flex-start;
        }

        &-contents {
            position: relative;
            text-align: center;
            width: 33vw;
            height: 33vw;
            padding-top: 6vw;
            border-radius: 50%;
            cursor: pointer;

            &::before {
                position: absolute;
                background: linear-gradient(135deg, #85C9C8, #D4FEE6, #E5FDC9);
                background-size: 400% 400%;
                background-position: 50% 60%;
                content: "";
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 2;
                border-radius: 50%;
                border: 1px solid rgba(0, 0, 0, 0.25);
                box-shadow: 0 0 20px 0 rgba(0,0,0,0.25);
            }

            h2 {
                color: black;
                font-size: 6vw;
                line-height: 6vw;
                margin: 0;
                position: relative;
                z-index: 2;
            }

            ion-icon {
                width: 100%;
                height: 12vw;
                position: relative;
                z-index: 2;
            }

            &-ripple {
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 50%;
                height: 100%;
                width: 100%;
                z-index: 1;

                &::after {
                    @include rings(5s, 0s);
                }
                
                &::before {
                    @include rings(5s, 2.5s);
                }
            }
        }
    }
}
</style>
  