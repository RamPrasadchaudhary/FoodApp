import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
<div className="footer-content">
    <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>In the heart of the city, vibrant streets teem with life and energy. Cafés bustle with conversations, while street vendors offer a medley of tantalizing aromas. Skyscrapers rise above, their glass facades reflecting the sun's golden hues. Amidst the urban rhythm, green parks provide a serene escape, where people relax and enjoy nature. </p>
<div className='footer-social-icons'>
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
    </div>
    <div className="footer-content-center">
<h2>Company</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
   </div>
    <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+9328424564</li>
    <li>ramprasadc331@gmail.com</li>
    <li>Contact@tomato.com</li>
</ul>
    </div>
</div>
<hr />
<p className="footer-copyright">Copyright 2024 © Tomato.com -All Right Reserved. </p>
    </div>
  )
}

export default Footer