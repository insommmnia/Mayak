import { lazy, Suspense, useState, useEffect} from "react";
import {  BrowserRouter, useLocation, Route, Routes} from "react-router-dom";
import './App.css';
import './normalize.css';

import Header from './components/Header/header';
import Servers from './components/Servers/servers';
import Home from './components/Home/home';
import PortfolioItem from './components/Portfolio/portfolio';
import Callback from './components/Home/callback';



export default function App(){
    
    return (
        <BrowserRouter>
            <div className='app'>
            <Header ></Header>
            <main className='main'>
              <Content />
            </main>
            </div>
        </BrowserRouter>
   
    );
    
  }
 
  
  function Content() {
    const location = useLocation();
    const [postData, setPostData] = useState(null);
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/callback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code: code }) // Передайте код авторизации здесь
          });
          const data = await response.json();
          setPostData(data);
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data));
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [location.search]); 


    const ServersP = () => <Servers></Servers>;
    const PortfolioP = () => <PortfolioItem />;
    const HomeP = () => <Home ></Home>;

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    
    const handleAnimationEnd = () => {
      if (transitionStage === "fadeOut") {
        setTransitionStage("fadeIn");
        setDisplayLocation(location);
      }
    };
    
   

    useEffect(() => {
      if (displayLocation.pathname !== location.pathname) {
        setTransitionStage("fadeOut");
      } 
    }, [location, displayLocation]);
  
    return (
      <div
        className={`${transitionStage}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <Routes location={displayLocation}>
          <Route path="/servers" element={<ServersP  />} />
          <Route path="/" element={<HomeP />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/portfolio" element={<PortfolioP />} />
        </Routes>
      </div>
    );
}
