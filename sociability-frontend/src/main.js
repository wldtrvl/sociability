import {createApp} from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from "@/store/store";
import HelloWorld from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', name: 'Login', component: Login},
        {path: '/signup', name: 'SignUp', component: Login},
        {path: '/forgot-password', name: 'ForgotPassword', component: Login},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
})

router.beforeEach((to, from, next) => {
    //write handle token logic
    if (to.path = 'login') {

    }

    next();
})

const app = createApp(App).use(router).use(VueAxios, axios).use(store)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
