import '../styles/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import TeachersField from '../components/TeachersField/TeachersField';

function Teachers() {
  return (
    <div className='body'>
      <Header/>
      <TeachersField/>
      <Footer/>
    </div>
  )
}

export default Teachers;
