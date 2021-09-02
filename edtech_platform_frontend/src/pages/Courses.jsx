import '../styles/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import CoursesField from '../components/CoursesField/CoursesField';

function Courses() {
  return (
    <div className='body'>
      <Header/>
      <CoursesField/>
      <Footer/>
    </div>
  )
}

export default Courses;
