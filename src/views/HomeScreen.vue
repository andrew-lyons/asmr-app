<template>
    <ion-page>
        <ion-content>
            <div class="body">
                <h1>ASMR App</h1>
            </div>

            <div class="icon-wrapper">
                <div class="icon-wrapper-section">
                    <ion-icon
                        size="large"
                        color="blue"
                        @click="setActiveIcon('rainy')"
                        :icon="iconHover && activeIcon === 'rainy' ? rainySharp : rainyOutline"
                    ></ion-icon>
                </div>

                <div class="icon-wrapper-section">
                    <ion-icon
                        size="large"
                        color="blue"
                        @click="setActiveIcon('music')"
                        :icon="iconHover && activeIcon === 'music' ? musicalNotesSharp : musicalNotesOutline "
                    ></ion-icon>
                </div>

                <div class="icon-wrapper-section">
                    <ion-icon
                        size="large"
                        color="blue"
                        @click="setActiveIcon('book')"
                        :icon="iconHover && activeIcon === 'book' ? bookSharp : bookOutline"
                    ></ion-icon>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { rainyOutline, rainySharp, musicalNotesOutline, musicalNotesSharp, bookOutline, bookSharp } from 'ionicons/icons';
import { IonContent, IonPage, IonIcon } from '@ionic/vue';
import { computed } from '@vue/reactivity';

export default defineComponent({
    name: 'HomeScreen',
    components: {
        IonContent,
        IonPage,
        IonIcon
    },
    setup() {
        const iconHover = ref(false);
        const activeIcon = ref('');

        const deactivateIcon = computed(() => {
            iconHover.value = false;
            activeIcon.value = '';
        })

        const setActiveIcon = (icon: string) => {
            iconHover.value = true;
            activeIcon.value = icon;

            return
        }

        return {
            iconHover,
            activeIcon,

            // computed
            deactivateIcon,

            // methods
            setActiveIcon,

            // icons
            rainyOutline,
            rainySharp,
            musicalNotesOutline,
            musicalNotesSharp,
            bookOutline,
            bookSharp
        }
    }
});
</script>
  
<style lang="scss" scoped>
    ion-content {
        --overflow: hidden;
        --background: rgba(209, 210, 249, 0.25);
    }

    .body {
        display: flex;
        justify-content: center;

        h1 {
            margin: 0;
        }
    }

    .icon-wrapper {
        display: flex;
        flex-wrap: wrap;

        &-section {
            width: 100%;
            text-align: center;

            ion-icon {
                width: 64px;
                height: 64px;
            }
        }
    }
</style>
  