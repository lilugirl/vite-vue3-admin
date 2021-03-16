import {createWebHashHistory,createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
const history=createWebHashHistory();
const router=createRouter({
    history,
    routes:[
        {
            path:'/',
            component:Home
        },{
            path:'/about',
            component:About
        },{
            path:'/login',
            component:Login
        }
    ]
});

export default router;