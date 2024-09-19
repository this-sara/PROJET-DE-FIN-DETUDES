// import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './footer.css'
import { useState } from 'react';
export default function Footer() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <a href='#home'><img src={assets.footer} alt="logo" className='logo' /></a>
          <p>The notebooks that we display on our website are original and exclusive produced by us from A to Z. The diaries we produce are characterized by originality, beauty and high quality. The secret of the beauty of these diaries lies in the smallest details, from the exquisite designs to the quality of the paper and the covers.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul >
            <li><Link to='/'  onMouseEnter={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link></li>
            <li><a href='#explore-menu' onMouseEnter={() => setMenu("shop")} className={menu === "shop" ? "active" : ""}>Shop</a></li>
            <li><Link to='/story'><a href='#app-download' onMouseEnter={() => setMenu("our-story")} className={menu === "our-story" ? "active" : ""}>Our Story</a></Link></li>
            <li><Link to='/contact'><a href='#footer' onMouseEnter={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a></Link></li>
          </ul>

        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+112 609629024</li>
            <a href="mailto:PlanBliss@gmail.com"><li>PlanBliss@gmail.com</li></a>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">copyright 2024 @ PlanBliss.com - All Right Reserved.</p>
    </div>
  )
}

