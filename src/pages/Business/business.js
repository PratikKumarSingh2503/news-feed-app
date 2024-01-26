import React from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
import './business.css';

const Business = () => {
  return (
    <div className='business'>
      <div className='businessPost'>
        <img className='businessImg' src={img1} alt='' />
        <p>
          China's Economic Slowdown Affects Hong Kong's Rich, But India's Business Families Continue To Thrive: Report
        </p>
        <p>
          <a href='https://www.msn.com/en-in/money/news/china-s-economic-slowdown-affects-hong-kong-s-rich-but-india-s-business-families-continue-to-thrive-report/ar-BB1hik2K?ocid=socialshare&cvid=7d9158db575c4d18f97c31b1dbfdaeef&ei=9'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='businessPost'>
        <img className='businessImg' src={img2} alt='' />
        <p>
          US becomes world's biggest economy in 2023, beats China
        </p>
        <p>
          <a href='https://www.msn.com/en-in/money/topstories/us-becomes-world-s-biggest-economy-in-2023-beats-china/ar-BB1hiD5m?ocid=socialshare&cvid=7d9158db575c4d18f97c31b1dbfdaeef&ei=38'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div><div className='businessPost'>
        <img className='businessImg' src={img3} alt='' />
        <p>
          Adani Power profit jumps multi-fold to Rs 2,738 crore
        </p>
        <p>
          <a href='https://www.msn.com/en-in/money/markets/adani-power-profit-jumps-multi-fold-to-rs-2-738-crore/ar-BB1hhagu?ocid=socialshare&cvid=7d9158db575c4d18f97c31b1dbfdaeef&ei=46'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div><div className='businessPost'>
        <img className='businessImg' src={img4} alt='' />
        <p>
          Swiggy to lay off around 400 employees on road to IPO
        </p>
        <p>
          <a href='https://www.msn.com/en-in/money/news/swiggy-to-lay-off-around-400-employees-on-road-to-ipo/ar-BB1hgjGY?ocid=socialshare&cvid=7d9158db575c4d18f97c31b1dbfdaeef&ei=52'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='businessPost'>
        <img className='businessImg' src={img5} alt='' />
        <p>
          Flipkart may layoff 1,000 employes post performance reviews
        </p>
        <p>
          <a href='https://www.msn.com/en-in/money/topstories/flipkart-may-layoff-1-000-employes-post-performance-reviews/ar-BB1hgzQB?ocid=socialshare&cvid=7d9158db575c4d18f97c31b1dbfdaeef&ei=56'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='businessPost'>
        <img className='businessImg' src={img6} alt='' />
        <p>
        Tata Technologies Q3 PAT rises 14.72 pc to Rs 170.22 cr
        </p>
        <p>
          <a href='https://www.msn.com/en-in/money/news/tata-technologies-q3-pat-rises-14-72-pc-to-rs-170-22-cr/ar-BB1hfrDm?ocid=socialshare&cvid=7d9158db575c4d18f97c31b1dbfdaeef&ei=59'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Business;