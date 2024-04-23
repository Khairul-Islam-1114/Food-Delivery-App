import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Nabvar = () => {

  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>

      <img src={assets.logo} alt="logo" className="logo" />

      <ul className="navbar-menu">
        <li onClick={()=>setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</li>
        <li onClick={()=>setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</li>
        <li onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile-App</li>
        <li onClick={()=>setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket as cart icon" />
          <div className="dot"></div>
        </div>

        <button type="button">Sign In</button>
      </div>
    </div>
  )
}

export default Nabvar