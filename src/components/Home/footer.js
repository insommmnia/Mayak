import { React, useState, useEffect} from "react";
import './footer.css';

function Footer() {

   
    return (
        <div className='footer_sec' >
            
            
            <div className='footer_bg'>
            <div className="footer_block">
                <img src={require("../../img/discordtyan.png")} alt="" />
                <div className='hero_title_btn_block'>
                    <div className="hero_button_i" id="hero_button_i">
                        <div id="underline"></div>
                        <a>Добавить бота</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
}

export default Footer;