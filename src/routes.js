import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Privacy from './components/Privacy.vue';
import Live from './components/Live.vue';
import About from './components/About.vue';
import Courses from './components/Courses.vue';
import Contacts from './components/Contacts.vue';
import Error from './components/404.vue';

const routes = [
    { 
        path: '/', 
        component: Home, 
        meta: { scrollToTop: true } 
    },
    { 
        path: '/register', 
        component: Register, 
        meta: { scrollToTop: true }
        //component: () => import('./components/Register.vue')
    },
    { path: '/login', component: Login },
    { path: '/privacy', component: Privacy, meta: { scrollToTop: true } },
    { path: '/live', component: Live },
    { path: '/about', component: About },
    { path: '/сourses', component: Courses },
    { path: '/contacts', component: Contacts },
    { path: '/404.html', component: Error },
    { path: '*', redirect: "/404.html" }
];

export default routes;
