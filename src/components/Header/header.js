import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './header.css';
import '../../normalize.css';
import {
  Link,
  useLocation
} from 'react-router-dom';


function Header(){

    const location = useLocation();
    const headerNavRef = useRef(null);

    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    const handleLogin = () => {
        window.location.href = 'http://localhost:3001/login';
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setIsActive2(!isActive2);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerNavRef.current && !headerNavRef.current.contains(event.target)) {
                setIsActive(false);
                setIsActive2(false);
            }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }, 900); // Через 3 секунды
    
        return () => clearTimeout(timeout); // Очистка таймера при размонтировании компонента
    }, []);
    

    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
        if(isActive2) {
            setIsActive2(false);
        }
    };
    const toggleProfile = () => {
        setIsActive2(!isActive2);
        if(isActive) {
            setIsActive(false);
        }
    };


    return (
        <header className='header'>
           
            <nav ref={headerNavRef} className='header_nav' >
                <div className='header_nav-logo'><Link to="/"><img  src={require("../../img/mayak_logo.png")} alt="" /></Link></div>
                <div className='header_nav-burger' >
                    <div className='header_nav-burger_logo'>
                    <input onClick={toggleMenu}  className={`checkbox ${isActive ? 'active' : ''}`} type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                    </div>
                </div>
                <ul  className={`header_nav-links ${isActive ? 'active' : ''}`}>
                    <li>
                    <svg className='home_svg' fill="#000000" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"></path>
                    </svg>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 32 32" space="preserve">
                            <path className="sharpcorners_een" d="M2,4v24h28V4H2z M27,13h-2v-2.586l-10,10l-2-2l-4,4V25H5v-4h2.586L13,15.586l2,2L23.586,9H21V7h6
                            V13z"/>
                        </svg>
                        <Link to="/servers">Топ серверов</Link>
                    </li>
                    <li>
                    <svg fill="#000000"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"/>
                    </svg>
                        <Link to="/about">Команды</Link>
                    </li>
                    <li>
                    <svg  viewBox="0 0 1024 1024" fill="#000000"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M521.58 516.763v-472.816c250.725 22.642 450.175 222.092 472.817 472.817h-472.816zM918.229 593.091h-435.436c-21.963 0-39.769-17.805-39.769-39.769 0 0 0 0 0 0v-435.463c-222.914 20.121-397.682 207.273-397.682 435.436 0 241.605 195.898 437.452 437.451 437.451 228.163 0 415.339-174.715 435.436-397.657z" /></svg>
                        <Link to="/portfolio">Статистика</Link>
                    </li>
                    <li>
                    <svg fill="#000000"   version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 512 512" space="preserve">
                        <g>
                            <g>
                                <polygon points="332.108,12.159 332.108,41.513 332.108,70.868 332.108,138.376 399.617,138.376 428.972,138.376 458.329,138.376 
                                            "/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M449.73,179.889h-20.757H311.351c-11.463,0-20.757-9.294-20.757-20.757V41.513V20.757V0H131.459
                                    c-11.463,0-20.757,9.294-20.757,20.757v401.297c0,11.463,9.294,20.757,20.757,20.757h318.27c11.463,0,20.757-9.293,20.757-20.757
                                    V179.889H449.73z M366.703,359.784H214.487c-11.463,0-20.757-9.294-20.757-20.757s9.294-20.757,20.757-20.757h152.216
                                    c11.463,0,20.757,9.294,20.757,20.757S378.166,359.784,366.703,359.784z M366.703,276.757H214.487
                                    c-11.463,0-20.757-9.294-20.757-20.757s9.294-20.757,20.757-20.757h152.216c11.463,0,20.757,9.294,20.757,20.757
                                    S378.166,276.757,366.703,276.757z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M380.541,470.487H83.027V89.946c0-11.463-9.294-20.757-20.757-20.757s-20.757,9.293-20.757,20.757v401.297
                                    c0,11.463,9.294,20.757,20.757,20.757h318.27c11.463,0,20.757-9.293,20.757-20.757
                                    C401.297,479.78,392.004,470.487,380.541,470.487z"/>
                            </g>
                        </g>
                    </svg>
                        <Link to="">Документация</Link>
                    </li>
                </ul>
                
                <div className='header_nav-btn'>
                    <div className='header_sign-in'>
                        {user ? (
                            <div className='header_profile' onClick={toggleProfile}>
                                <img  src={(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`)} ></img>
                                <div><h4>{user.username}</h4></div>
                                
                            </div>
                        ) : (
                            <div className='header_sign-in'>
                                <svg width="22px" height="22px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M15.621 2.66859L11.9314 2.08881C8.71084 1.58272 7.10055 1.32967 6.05027 2.22779C5 3.12591 5 4.75596 5 8.01607V11H10.9194L8.21913 7.62469L9.78087 6.37531L13.7809 11.3753L14.2806 12L13.7809 12.6247L9.78087 17.6247L8.21913 16.3753L10.9194 13H5V15.9831C5 19.2432 5 20.8733 6.05027 21.7714C7.10055 22.6695 8.71084 22.4165 11.9314 21.9104L15.621 21.3306C17.2337 21.0771 18.04 20.9504 18.52 20.3891C19 19.8279 19 19.0116 19 17.3791V6.6201C19 4.98758 19 4.17132 18.52 3.61003C18.04 3.04874 17.2337 2.92202 15.621 2.66859Z" fill="#D9D9D9"/>
                                </svg>
                                <Link to="" onClick={handleLogin}>Войти</Link>
                            </div>
                        )}
                    </div>
                    <ul className={`header_profile-links ${isActive2 ? 'active' : ''}`}>
                    <li>
                        <svg width="22px" height="22px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M15.621 2.66859L11.9314 2.08881C8.71084 1.58272 7.10055 1.32967 6.05027 2.22779C5 3.12591 5 4.75596 5 8.01607V11H10.9194L8.21913 7.62469L9.78087 6.37531L13.7809 11.3753L14.2806 12L13.7809 12.6247L9.78087 17.6247L8.21913 16.3753L10.9194 13H5V15.9831C5 19.2432 5 20.8733 6.05027 21.7714C7.10055 22.6695 8.71084 22.4165 11.9314 21.9104L15.621 21.3306C17.2337 21.0771 18.04 20.9504 18.52 20.3891C19 19.8279 19 19.0116 19 17.3791V6.6201C19 4.98758 19 4.17132 18.52 3.61003C18.04 3.04874 17.2337 2.92202 15.621 2.66859Z" fill="#D9D9D9"/>
                        </svg>
                        <Link to="" onClick={handleLogout}>Выйти</Link>
                    </li>
                    <li>
                        <svg width="22px" height="22px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M15.621 2.66859L11.9314 2.08881C8.71084 1.58272 7.10055 1.32967 6.05027 2.22779C5 3.12591 5 4.75596 5 8.01607V11H10.9194L8.21913 7.62469L9.78087 6.37531L13.7809 11.3753L14.2806 12L13.7809 12.6247L9.78087 17.6247L8.21913 16.3753L10.9194 13H5V15.9831C5 19.2432 5 20.8733 6.05027 21.7714C7.10055 22.6695 8.71084 22.4165 11.9314 21.9104L15.621 21.3306C17.2337 21.0771 18.04 20.9504 18.52 20.3891C19 19.8279 19 19.0116 19 17.3791V6.6201C19 4.98758 19 4.17132 18.52 3.61003C18.04 3.04874 17.2337 2.92202 15.621 2.66859Z" fill="#D9D9D9"/>
                        </svg>
                        <Link to="" >Профиль</Link>
                    </li>
                    </ul>
                </div>
               
            </nav>
        </header>
    );
}



export default Header;

