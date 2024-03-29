import { lazy, Suspense, useState, useEffect} from "react";
import {  BrowserRouter, useLocation, Route, Routes} from "react-router-dom";
import './App.css';
import './normalize.css';

import Header from './components/Header/header';
import Servers from './components/Servers/servers';
import Stats from './components/Stats/stats';
import Home from './components/Home/home';
import Commands from './components/Commands/commands';
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
          localStorage.setItem('user', JSON.stringify(data));
        } catch (error) {
        }
      };
  
      fetchData();
    }, [location.search]); 


    const ServersP = () => <Servers></Servers>;
    const StatsP = () => <Stats></Stats>;
    const CommandsP = () =><Commands></Commands>;
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
          <Route path="/commands" element={<CommandsP />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/stats" element={<StatsP />} />
        </Routes>
      </div>
    );
}
