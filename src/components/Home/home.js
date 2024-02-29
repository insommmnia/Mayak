import React from 'react';
import '../../normalize.css';

import Hero from './hero';
import About from './about';

function Home() {
    
    
    return (
        <div className='Main'>
            <Hero></Hero>
            <About></About>
        </div>
    );
}
export default Home;