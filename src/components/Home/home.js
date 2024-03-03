import React from 'react';
import '../../normalize.css';

import Hero from './hero';
import About from './about';
import Advantages from './advantages';
import Footer from './footer';

function Home() {
    
    
    return (
        <div className='Main'>
            <Hero></Hero>
            <About></About>
            <Advantages></Advantages>
            <Footer></Footer>
        </div>
    );
}
export default Home;