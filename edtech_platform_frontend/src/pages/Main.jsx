import '../styles/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import CoursesField from '../components/CoursesField';
import TeachersField from '../components/TeachersField';


function Main() {
  return (
    <div className='body'>
      <Header/>
      <div className="content">
          <CoursesField />
          <TeachersField />
      </div>
      <Footer/>
    </div>
  )
}

export default Main;
