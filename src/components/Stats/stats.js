import React from 'react';
import '../../normalize.css';

import StatsHero from './statshero';
import StatsGraphs from './stats_graphs';

function Stats() {
    
    
    return (
        <div className='Stats_section'>
            <StatsHero></StatsHero>
            <StatsGraphs></StatsGraphs>
        </div>
    );
}
export default Stats;