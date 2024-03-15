import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import WeatherPage from '@/components/WeatherPage.vue'
//import WeatherView from '../views/WeatherView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 {
  path:'/login',
  name:'Login',
  component:LoginView
 },
 {
  path:'/register',
  name:'Register',
  component:RegisterView
 },
 {
  path:'/weather',
  name:'Weather',
  component:WeatherPage
 }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
