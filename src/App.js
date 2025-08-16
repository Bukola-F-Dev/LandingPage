 import './App.css';
import Hero from './Component/Hero';
import LogoTicker from './Component/LogoTicker';
import About from './Component/About';
import Service from './Component/Service';
import CallToAction from './Component/CallToAction';
import OurWork from './Component/OurWork';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
     <Hero/>
     <LogoTicker/>
     <About/>
     <Service/>
     <OurWork/>
     <CallToAction/>
     <Footer/>
    </div>
  );
}

export default App;
