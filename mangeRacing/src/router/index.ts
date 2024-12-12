import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import MotorsView from '@/views/MotorsView.vue';
import LoginView from '@/views/Login.vue';
import MotorsTipCustom from '@/views/MotorsTipCustom.vue';
import MotorsTipSport from '@/views/MotorsTipSport.vue';
import MotorsTipBigTrail from '@/views/MotorsTipBigTrail.vue';
import RealCartView from '@/views/RealCartview.vue';
import AproveCartView from '@/views/AproveCart.vue';

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/motors', name: 'motors', component: MotorsView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/custom', name: 'custom', component: MotorsTipCustom },
    { path: '/sport', name: 'sport', component: MotorsTipSport },
    { path: '/bigtrail', name: 'bigtrail', component: MotorsTipBigTrail },
    { path: '/realcart', name: 'realcart', component: RealCartView },
    { path: '/aprovecart', name: 'aprovecart', component: AproveCartView },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
