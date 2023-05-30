import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/users/Register.vue';
import LoginView from '../views/users/Login.vue';
import BookingView from '../views/users/Booking.vue';
import Dashboard from '../views/users/Dashboard.vue';
import ArtistForm from '../views/admins/ArtistProfile.vue';
import SignupView from '../views/admins/ArtistSignup.vue';
import PictureForm from '../views/admins/Picture.vue';
import SigninView from '../views/admins/Signin.vue';
import AdminDashboard from '../views/admins/AdminDashboard.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboard
    },
    {
      path: '/artist',
      name: 'artist',
      component: ArtistForm
    },
    {
      path: '/picture',
      name: 'picture',
      component: PictureForm
    },
    // {
    //   path: '*',
    //   component: NotFound
    // },
  ]
})

export default router
