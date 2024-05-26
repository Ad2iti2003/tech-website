import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import './styles/App.scss'
import './styles/Header.scss'
import './styles/Home.scss'
import Contact from "./components/Contact";
import Services from "./components/Services"
import Footer from './components/Footer'
import './styles/media.scss'



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/#about" element={<Home/>}/>
        <Route path="/#brands" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>

     
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
