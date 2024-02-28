import React from 'react';
import { useState } from 'react';
import './header.css';
import '../../normalize.css';
import head from './head.js'
import {
  Link,
} from 'react-router-dom';

function Header(){
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive(!isActive);
      };
    return (
        <header className='header'>
           
            <nav className='header_nav'>
                <div className='header_nav-logo'><a><Link to="/">Тута лого</Link></a></div>
                <div className='header_nav-burger' onClick={toggleMenu} >
                    <div className='header_nav-burger_logo'></div>
                </div>
                <ul className={`header_nav-links ${isActive ? 'active' : ''}`}>
                    <li><p>ds</p><Link to="/">Топ серверов</Link></li>
                    <li><p>ds</p><Link to="/about">Команды</Link></li>
                    <li><p>ds</p><Link to="/portfolio">Статистика</Link></li>
                    <li><p>ds</p><Link to="">Документация</Link></li>
                </ul>
                <div className='header_nav-btn'>
                    <Link to="">Вход</Link>
                </div>
            </nav>
        </header>
    );
}



export default Header;