import React, {useEffect } from "react";
import "./commands_section.css";


function CommandsSec() {
  

    return (
        <div className="commands_sec">
            <div className="commands_hero_container">
                <div className='commands_hero_block' id='commands_hero_block' >
                    <div className='commands_hero_title'>
                        <h1>
                            Команды бота 
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="5" width="17" height="14" rx="2" stroke="#111" stroke-width="2"/>
                                <path d="M7 10L9 12L7 14" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 14H16" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </h1>
                    </div>
                    <div className='commands_hero_descr'>
                        <h3>Здесь вы можете ознакомиться с использованим команд</h3>
                    </div>

                    
                </div>
            </div>
        </div>
        
    );
}
export default CommandsSec;