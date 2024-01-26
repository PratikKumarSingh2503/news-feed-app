import React from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
import './techinfo.css'

const Techinfo = () => {
  return (
    <div className='techno'>
      <div className='technoPost'>
        <img className='technoImg' src={img1} alt='' />
        <p>
          The AI Impact: shaping jobs and future careers
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/other/the-ai-impact-shaping-jobs-and-future-careers/ar-BB1gYVEx?ocid=socialshare&cvid=ff0e43752c5641a0a09d42542832d143&ei=46'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='technoPost'>
        <img className='technoImg' src={img2} alt='' />
        <p>
          India's Chandrayaan-2 guided Japan's SLIM mission in landing on the Moon
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/techandscience/india-s-chandrayaan-2-guided-japan-s-slim-mission-in-landing-on-the-moon/ar-BB1hewa4?ocid=socialshare&cvid=a5b71a32f32b4842ff86b57509adea77&ei=69'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div><div className='technoPost'>
        <img className='technoImg' src={img3} alt='' />
        <p>
          Aditya-L1 Solar Observatory successfully deploys 6-metre magnetometer boom, confirms ISRO
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/world/aditya-l1-solar-observatory-successfully-deploys-6-metre-magnetometer-boom-confirms-isro/ar-BB1hiaRy?ocid=socialshare&cvid=166a304cdbfb486b9db270b99db827ae&ei=6'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div><div className='technoPost'>
        <img className='technoImg' src={img4} alt='' />
        <p>
          OpenAI's Sam Altman seeks to raise billions for artificial intelligence chip factories venture
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/other/openai-s-sam-altman-seeks-to-raise-billions-for-artificial-intelligence-chip-factories-venture/ar-BB1gYgwI?ocid=socialshare&cvid=ff0e43752c5641a0a09d42542832d143&ei=49'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='technoPost'>
        <img className='technoImg' src={img5} alt='' />
        <p>
          Asteroid as big as an aircraft to pass Earth soon, says NASA; it will return in 2170
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/techandscience/asteroid-as-big-as-an-aircraft-to-pass-earth-soon-says-nasa-it-will-return-in-2170/ar-BB1hagG8?ocid=socialshare&cvid=166a304cdbfb486b9db270b99db827ae&ei=27'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='technoPost'>
        <img className='technoImg' src={img6} alt='' />
        <p>
          China discloses what it plans to do on the Moon
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/techandscience/china-discloses-what-it-plans-to-do-on-the-moon/ar-BB1haFCD?ocid=socialshare&cvid=166a304cdbfb486b9db270b99db827ae&ei=33'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Techinfo;