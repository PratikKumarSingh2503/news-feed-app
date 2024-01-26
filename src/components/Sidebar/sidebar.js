import React from 'react';
import aboutImg from './aboutImg.jpg';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='firstSec'>
        <h3 className='title'>ABOUT US</h3>
        <img className='titleImg' src={aboutImg} alt='' />
        <p>
          
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias porro neque deserunt ad quisquam! Sint eius adipisci illo expedita blanditiis qui at eveniet, quaerat atque molestiae omnis, non, laudantium a!
        </p>
      </div>
      <div className='secondSec'>
        <h3 className='title'>FOLLOW US</h3>
        <div className='icons'>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;