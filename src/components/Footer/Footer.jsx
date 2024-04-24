import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus vitae architecto illum maxime totam quisquam voluptatum ipsum quidem! Suscipit, minima. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
            </div>
            <div className="footer-content-center">
                <h3>COMPANY</h3>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h3>GET IN TOUCH</h3>
                <ul>
                    <li>+8801789101112</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">&copy; tomato.com - All Right Reserverd || 2024</p>
    </div>
  )
}

export default Footer