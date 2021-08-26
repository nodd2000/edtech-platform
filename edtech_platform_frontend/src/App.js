import './App.css';
import PropTypes from 'prop-types';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';


function App() {
  return (
    <div className='body'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App;
