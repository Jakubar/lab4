import {createRouter} from 'vue-router'
import HomePage from './home/Home.vue';
import {SignInComponent} from './user';
import Cart from './cart/Cart.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },

  {
    path: '/sign-in/',
    component: SignInComponent
  },

  {
    path: '/cart/',
    component: Cart
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}