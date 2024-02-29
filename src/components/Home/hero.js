import { React, useState, useEffect} from "react";
import './hero.css';
function Hero() {
    
    useEffect(() => {
        const element = document.getElementById('hero_con');
        if (element) {
          element.classList.add('animate_hero');
        }
      }, []);

    return (
        
        <div className='hero'>
            <div className='hero_bg'>
                <div className='hero_container' id="hero_con">
                    <div className="hero_img">
                        <img src={require("../../img/mayak.png")} alt="hero_img" />
                    </div>
                    <div className="hero_title">
                        <h1>Маяковский - бот знакомств!</h1>
                        <div className='hero_title_btn_block'>
                            <div class="hero_button_d" id="hero_button_d">                        
                                <a> 
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" fill="#C12B3D">
                                    </path>
                                </svg>
                                &emsp;&emsp;Добавить бота</a>
                                <div id="underline"></div>  
                            </div>
                            <div className="hero_button_i" id="hero_button_i">
                                <div id="underline"></div>
                                <a>Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1f1f1f" preserveAspectRatio="none" viewBox="0 25 160 40" className="waves">
                <defs>
                    <path id="wave" d="M-150 53c30.77 0 59.538-20 90-20 31.077 0 60.256 20 90 20 30.77 0 59.23-20 90-20 30.77 0 59.23 20 90 20v15h-360"/>
                </defs>
                <g>
                    <use href="#wave" x="50" y="0" fill="#c12b3d"/>
                    <use href="#wave" x="50" y="1" fill="#c12b3d"/>
                    <use href="#wave" x="50" y="7" fill="#c12b3d"/>
                </g>
            </svg>
        </div>
        
    );
}
export default Hero;