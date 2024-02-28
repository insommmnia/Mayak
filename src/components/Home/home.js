import React from 'react';
import './home.css';
import '../../normalize.css';
function Home() {
    return (
        <div className='hero'>
            <div className='hero_bg'>
                <div className='hero_container'>
                    <div className="hero_img">
                        <img src={require("../../img/mayak.png")} alt="hero_img" />
                    </div>
                    <div className="hero_title">
                        <h1>Маяковский - бот знакомств!</h1>
                        <div className='hero_title_btn_block'>
                            <div class="hero_button_d" id="hero_button_d">
                                <div id="underline"></div>
                                <p>dsds</p>
                                <a>Добавить бота</a>
                            </div>
                            <div class="hero_button_i" id="hero_button_i">
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
export default Home;