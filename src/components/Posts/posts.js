import React from 'react';
import './posts.css';
import sportImg from './sport.avif';
import politicImg from './politics.jpg';
import businessImg from './business.jpeg';
import technoImg from './techno.jpeg';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div className='posts'>
            <div className='post'>
                <img className='postImg' src={sportImg} alt='' />
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit...
                </p>
                <h5>more on
                    <button className='postbut'>
                        <Link to="/sports" className='midlink'>SPORTS</Link>
                    </button>
                </h5>
            </div>
            <div className='post'>
                <img className='postImg' src={politicImg} alt='' />
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit...
                </p>
                <h5>more on
                    <button className='postbut'>
                        <Link to="/politics" className='midlink'>POLITICS</Link>
                    </button>
                </h5>
            </div>
            <div className='post'>
                <img className='postImg' src={technoImg} alt='' />
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit...
                </p>
                <h5>more on
                    <button className='postbut'>
                        <Link to="/techinfo" className='midlink'>TECH INFO</Link>
                    </button>
                </h5>
            </div>
            <div className='post'>
                <img className='postImg' src={businessImg} alt='' />
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit...
                </p>
                <h5>more on
                    <button className='postbut'>
                        <Link to="/business" className='midlink'>BUSINESS</Link>
                    </button>
                </h5>
            </div>
            {/* <div className='post'>
                <img className='postImg' src={postImg} alt='' />
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem
                </p>
                <button className='postbut'>
                    <Link to="/news" className='midlink'>NEWS</Link>ore
                </button>
            </div> */}
        </div>
    );
}

export default Posts;