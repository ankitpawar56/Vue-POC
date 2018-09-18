
import Details from './components/Case.vue'
import AllCases from './components/Allcases.vue'
import Cart from './components/Cart.vue'
import Signup from './components/signup.vue'
import Login from './components/login.vue'


export const routes = [
        {
            path: '/',
            name: 'Login',
            component : Login
        },
        {
            path: '/product/:id',
            name: 'Case',
            component : Details
        },
         {
            path: '/Cases/',
             name: 'Cases',
             component : AllCases,
         },
         {
            path: '/signup',
            name: 'Signup',
            component : Signup
        },
        {
            path: '/login',
            name: 'login',
            component : Login
        },
        {
            path: '/cart',
            name: 'Cart',
            component : Cart,
           
        },

    ]