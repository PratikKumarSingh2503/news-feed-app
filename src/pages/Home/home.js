import React from 'react';
import Header from '../../components/Header/header';
import Posts from '../../components/Posts/posts';
import Sidebar from '../../components/Sidebar/sidebar';
import './home.css'

const Home = () => {
  return (
    <div className='homepage'>
      <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;