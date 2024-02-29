import { useState, useEffect} from "react";
import { BrowserRouter, useLocation, Route, Routes} from "react-router-dom";
import './App.css';
import './normalize.css';

import Header from './components/Header/header';
import About from './components/About/about';
import Home from './components/Home/home';
import PortfolioItem from './components/Portfolio/portfolio';



export default function App(){
    
  
    return (
    <BrowserRouter>
        <div className='app'>
        <Header></Header>
        <main className='main'>
            <Content />
        </main>
        </div>
    </BrowserRouter>
    );
  }
  function Content() {
    const AboutP = () => <About title='Abc'></About>;
    const PortfolioP = () => <PortfolioItem />;
    const HomeP = () => <Home></Home>;
    
    const location = useLocation();
    
    
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");
  
    useEffect(() => {
      if (location !== displayLocation) {
        setTransitionStage("fadeOut");
      }
    }, [location, displayLocation]);
  
    return (
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<HomeP />} />
          <Route path="/about" element={<AboutP />} />
          <Route path="/portfolio" element={<PortfolioP />} />
        </Routes>
      </div>
    );
  }

