import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import About from "@/components/About.vue";
import RealEstate from "@/components/RealEstate.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/real-estate', // Путь к странице с объявлениями о недвижимости
    name: 'RealEstate',
    component: RealEstate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
