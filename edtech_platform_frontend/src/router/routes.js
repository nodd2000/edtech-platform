
import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Courses from '../pages/Courses';
import Teachers from '../pages/Teachers';


export const routes = [
    {path: '/', component: Main},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/courses', component: Courses},
    {path: '/teachers', component: Teachers},
]