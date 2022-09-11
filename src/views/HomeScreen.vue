<template>
    <ion-page>
        <ion-content>
            <div class="home-main">
                <div class="icon-wrapper">
                    <div
                        v-for="category, idx in categories"
                        :key="category.title + idx"
                        @click="setActiveIcon(category.slug)"
                        class="icon-wrapper-section"
                    >
                        <ion-icon
                            size="large"
                            color="primary"
                            :icon="iconHover && activeIcon === category.slug ? category.iconSharp : category.iconOutline"
                        ></ion-icon>
                        <h2>{{ category.title }}</h2>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { balloonOutline, balloonSharp, settingsOutline, rainyOutline, rainySharp, musicalNotesOutline, musicalNotesSharp, bookOutline, bookSharp, musicalNoteSharp, settingsSharp } from 'ionicons/icons';
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

        const categories = [
            {
                title: 'Nature',
                slug: 'rainy',
                iconOutline: rainyOutline,
                iconSharp: rainySharp
            },
            {
                title: 'Music',
                slug: 'music',
                iconOutline: musicalNotesOutline,
                iconSharp: musicalNoteSharp
            },
            {
                title: 'Objects',
                slug: 'book',
                iconOutline: bookOutline,
                iconSharp: bookSharp
            },
            {
                title: 'Misc.',
                slug: 'balloon',
                iconOutline: balloonOutline,
                iconSharp: balloonSharp
            },
            {
                title: 'Settings',
                slug: 'cog',
                iconOutline: settingsOutline,
                iconSharp: settingsSharp
            }
        ]

        return {
            iconHover,
            activeIcon,
            categories,

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
            bookSharp,
            settingsOutline
        }
    }
});
</script>
  
<style lang="scss" scoped>
    ion-content {
        --overflow: hidden;
        --background: rgba(209, 210, 249, 0.25);
    }

    .home-main {
        display: flex;
        height: 100%;
        align-items: flex-end;
    }

    .icon-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        &-section {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
            width: 100%;
            height: 20vh;
            padding: 20px 20px 20px 30%;

            h2 {
                color: black;
                font-size: 7vw;
                line-height: 7vw;
                margin: 0 0 0 16px;
            }

            ion-icon {
                width: 12vw;
                height: 12vw;
            }

            &:first-child {
                background: #C9CAD9;
            }

            &:nth-child(2) {
                background: linear-gradient(
                    0deg,
                    rgba(201, 202, 217, 0.4),
                    rgba(201, 202, 217, 0.4)
                ),
                #D1D2F9;
            }

            &:nth-child(3) {
                background: linear-gradient(
                    0deg,
                    rgba(209, 210, 249, 0.3),
                    rgba(209, 210, 249, 0.3)
                ),
                #A3BCF9;
            }

            &:nth-child(4) {
                background: linear-gradient(
                    0deg,
                    rgba(209, 210, 249, 0.05),
                    rgba(209, 210, 249, 0.05)
                ),
                linear-gradient(
                    0deg,
                    rgba(163, 188, 249, 0.5),
                    rgba(163, 188, 249, 0.5)
                ),
                #7796CB;
            }

            &:nth-child(5) {
                background: linear-gradient(
                    0deg,
                    rgba(209, 210, 249, 0.1),
                    rgba(209, 210, 249, 0.1)
                ),
                linear-gradient(
                    0deg,
                    rgba(119, 150, 203, 0.7),
                    rgba(119, 150, 203, 0.7)
                ),
                #576490;
            }
        }
    }
</style>
  