import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SplashScreen from '../views/SplashScreen.vue';
import HomeScreen from '../views/HomeScreen.vue';
import PlaybackScreen from '../views/PlaybackScreen.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: SplashScreen
  },
  {
    path: '/home',
    component: HomeScreen
  },
  {
    path: '/audio/:category',
    component: PlaybackScreen
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
