import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/users/Register.vue';
import LoginView from '../views/users/Login.vue';
import BookingView from '../views/users/Booking.vue';
import BookingOneView from '../views/users/BookingOne.vue';
import BookingTwoView from '../views/users/BookingTwo.vue';
import BookingThreeView from '../views/users/BookingThree.vue';
import BookingFourView from '../views/users/BookingFour.vue';
import BookingFiveView from '../views/users/BookingFive.vue';
import BookingSixView from '../views/users/BookingSix.vue';
import BookingSevenView from '../views/users/BookingSeven.vue';
import BookingEightView from '../views/users/BookingEight.vue';
import BookingNineView from '../views/users/BookingNine.vue';
import Dashboard from '../views/users/Dashboard.vue';
import ArtistForm from '../views/admins/ArtistProfile.vue';
import SignupView from '../views/admins/ArtistSignup.vue';
import PictureForm from '../views/admins/Picture.vue';
import ProfileView from '../views/Profile.vue';
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
      path: '/bookingone',
      name: 'bookingone',
      component: BookingOneView
    },
    {
      path: '/bookingtwo',
      name: 'bookingtwo',
      component: BookingTwoView
    },
    {
      path: '/bookingthree',
      name: 'bookingthree',
      component: BookingThreeView
    },
    {
      path: '/bookingfour',
      name: 'bookingfour',
      component: BookingFourView
    },
    {
      path: '/bookingfive',
      name: 'bookingfive',
      component: BookingFiveView
    },
    {
      path: '/bookingsix',
      name: 'bookingsix',
      component: BookingSixView
    },
    {
      path: '/bookingseven',
      name: 'bookingseven',
      component: BookingSevenView
    },
    {
      path: '/bookingeight',
      name: 'bookingeight',
      component: BookingEightView
    },
    {
      path: '/bookingnine',
      name: 'bookingnine',
      component: BookingNineView
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
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },{
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
