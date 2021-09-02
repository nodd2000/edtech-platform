import '../styles/App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';

function Main() {
  return (
    <div className='body'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Main;
