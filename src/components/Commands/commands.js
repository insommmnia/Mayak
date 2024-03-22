import React from 'react';
import '../../normalize.css';

import CommandsSection from './commands_section';
import CommandsCard from './command_card';

function Commands() {
    
    
    return (
        <div className='commands_section'>
            <CommandsSection></CommandsSection>
            <CommandsCard></CommandsCard>
        </div>
    );
}
export default Commands;