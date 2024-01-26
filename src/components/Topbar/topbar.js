import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='nav'>
            <div className='left'>
                <h3>News<span>Feed.</span></h3>
            </div>

            <div className='middle'>
                <Link to="/" className='midlink'>HOME</Link>
                <Link to="/sports" className='midlink'>SPORTS</Link>
                <Link to="/politics" className='midlink'>POLITICS</Link>
                <Link to="/techinfo" className='midlink'>TECH INFO</Link>
                <Link to="/business" className='midlink'>BUSINESS</Link>
            </div>

            <div className='right'>
                <form className="form">
                    <input id="search" type="text" class="input" placeholder="search..." />
                    <button id="clear" class="clear-results">clear</button>
                </form>
            </div>
        </div>
    );
}

export default Topbar;