
import { Redirect } from "react-router-dom";

import '../styles/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import BecomeStudentButton from '../components/BecomeStudentButton';
import BecomeTeacherButton from '../components/BecomeTeacherButton';
import {useAuth} from '../auth/useAuth.js'
import Main from './Main'


function UserPage() {
    const auth = useAuth()

    if (auth.user) {
        return (
            <div className='body'>
            <Header/>
            <div className='button-zone'>
            <BecomeStudentButton />
            <BecomeTeacherButton />
            </div>

            <Footer/>
            </div>
        )
    }
    else {
        return <Main />
        // return <Redirect to='/' />
    }
        
}

export default UserPage;
