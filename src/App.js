import logo from './logo.svg';
import './App.css';
import Footer from './pages/Footer';
import bgImg from './images/bgimg.jpg';
import {FaBeer, FaInstagram, FaEnvelope} from 'react-icons/fa';
import Formulario from './pages/Formulario';
function App() {
  return (
    <div>
      {/* <img src={bgImg}/>
      <FaBeer color='#F00' size='3em'/>
      <FaInstagram />
      <FaEnvelope /> */}
      <Formulario />
    </div>
  );
}

export default App;
