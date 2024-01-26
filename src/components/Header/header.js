import React from 'react';
import './header.css'
import headerimg from './headerImg.jpg'

const Header = () => {
  return (
    <div className='heading'>
      <div className='headertitle'>
        <h3 className='title1'>"Dive into Diversity with <span>The News Mania</span> </h3>
        <h3 className='title2'>-All News, All Updates, All Here</h3>
      </div>
      <img className='titleimg' src={headerimg} alt='' />
    </div>
  );
}

export default Header;