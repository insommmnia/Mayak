import React from 'react';
import '../../normalize.css';

import ServersHero from './servershero';
import ServersList from './serverslist';


function Servers() {
    
    
    return (
        <div className='Main'>
            <ServersHero></ServersHero>
            <ServersList></ServersList>
        </div>
    );
}
export default Servers;