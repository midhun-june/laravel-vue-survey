import { createRouter,createWebHistory } from "vue-router";
import AppLayout from '../components/AppLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import Surveys from '../views/Surveys.vue'
import store from '../store'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import auth from './middleware/auth'
import guest from './middleware/guest'
const routes = [

{
    path: '/',
    redirect: 'dashboard',
    component: AppLayout,
    meta: {
        middleware: [
            auth
        ]
    },
    children: [
        { 
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        
        },
        {
            path: '/surveys',
            name: 'Surveys',
            component: Surveys,
        }
    ],
 

},
{
    path: '/auth',
    redirect: '/login',
    component: AuthLayout,
    meta: {
        middleware: [
            guest
        ]
    },
    children:[{
        path: '/login',
        name: 'Login',
        component: Login,
        },  
        {
        path: '/register',
        name: 'Register',
        component: Register,
        }  
    ]

}

];


const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }
    return middleware[0]({
        ...context
    })
})

export default router;