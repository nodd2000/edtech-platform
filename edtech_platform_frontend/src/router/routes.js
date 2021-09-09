
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Courses from '../pages/Courses'
import Teachers from '../pages/Teachers'
import Course from '../pages/Course'
import Teacher from '../pages/Teacher'
import UserPage from '../pages/UserPage'
import AddCourse from '../pages/AddCourse'
import EditCourse from '../pages/EditCourse'


export const routes = [
    {path: '/', component: Main},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/courses', component: Courses},
    {path: '/teachers', component: Teachers},
    {path: '/courses/:id', component: Course},
    {path: '/teachers/:id', component: Teacher},
    {path: '/self', component: UserPage},
    {path: '/add_course', component: AddCourse},
    {path: '/edit_course/:id', component: EditCourse},
]