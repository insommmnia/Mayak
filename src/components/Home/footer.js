import { React, useRef, useEffect} from "react";
import './footer.css';

function Footer() {
    const clientId = '1214987228883714139';
    const handleAddBot = () => {
        window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&scope=bot&permissions=8`;
    };
    const footerBlockRef = useRef(null);
    const handleScroll = () => {
        const handleElement = (ref) => {
            if (ref.current) {
                const element = ref.current;
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                let isVisible;
                if (window.innerWidth > 2000) {
                    isVisible = elementPosition < windowHeight * 0.85;
                } else {
                    isVisible = elementPosition < windowHeight * 0.85;
                }
                element.classList.toggle("active", isVisible);
            }
        };
        handleElement(footerBlockRef);

    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='footer_sec' >
            
            
            <div className='footer_bg' ref={footerBlockRef}>
            <div className="footer_block">
                <img src={require("../../img/mayak_logo.png")} alt="" />
                <div className='footer_title_btn_block'>
                    <div className="footer_button_d" onClick={handleAddBot} id="footer_button_d">
                        <svg className="footer_button_d_svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" fill="#C12B3D">
                            </path>
                        </svg>                        
                        <a href=""> 
                        &emsp;&emsp;&nbsp;&nbsp;&nbsp;Добавить бота</a>
                        <div id="underline"></div>  
                    </div>
    
                </div>
            </div>
            </div>
            <svg className="waves footer_sec_svg" xmlns="http://www.w3.org/2000/svg" fill="#1f1f1f" preserveAspectRatio="none" viewBox="0 25 160 40" >
                <defs>
                    <path id="wave" d="M-150 53c30.77 0 59.538-20 90-20 31.077 0 60.256 20 90 20 30.77 0 59.23-20 90-20 30.77 0 59.23 20 90 20v15h-360"/>
                </defs>
                <g>
                    <use href="#wave" x="50" y="-4" fill="#c12b3d"/>
                    <use href="#wave" x="90" y="-5" fill="#c12b3d"/>
                    <use href="#wave" x="50" y="10" fill="#c12b3d"/>
                </g>
            </svg>
        </div>
        
    );
}

export default Footer;