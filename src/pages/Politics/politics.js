import React from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.avif';
import img3 from './img3.avif';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
import './politic.css'

const Politics = () => {
  return (
    <div className='politic'>
      <div className='politicPost'>
        <img className='politicImg' src={img1} alt='' />
        <p>
          'Denied Permission For Rally': Cong Says Facing Problems In West Bengal In Getting Permissions For Nyay Yatra
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/India/denied-permission-for-rally-cong-says-facing-problems-in-west-bengal-in-getting-permissions-for-nyay-yatra/ar-BB1hioNj'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='politicPost'>
        <img className='politicImg' src={img2} alt='' />
        <p>
          BJP trying to lure our legislators: Karnataka Congress chief Shivakumar
        </p>
        <p>
          <a href='https://www.indiatoday.in/india/karnataka/story/bjp-trying-to-lure-our-legislators-says-karnataka-congress-chief-dk-shivakumar-2494061-2024-01-26'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div><div className='politicPost'>
        <img className='politicImg' src={img3} alt='' />
        <p>
        Republic Day 2024: India illuminated in tricolour | Check photos, videos here
        </p>
        <p>
          <a href='https://www.livemint.com/news/republic-day-2024-india-illuminated-in-tricolour-check-photos-videos-here-11706231933104.html'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div><div className='politicPost'>
        <img className='politicImg' src={img4} alt='' />
        <p>
          NEP puts adequate emphasis on bridging digital divide, says President Murmu
        </p>
        <p>
          <a href='https://www.msn.com/en-in/money/careers/nep-puts-adequate-emphasis-on-bridging-digital-divide-says-president-murmu/ar-BB1hhoIr'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='politicPost'>
        <img className='politicImg' src={img5} alt='' />
        <p>
          Maldives wishes India on Republic Day amid row, recalls 'centuries of friendship'
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/India/maldives-wishes-india-on-republic-day-amid-row-recalls-centuries-of-friendship/ar-BB1hiugl'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='politicPost'>
        <img className='politicImg' src={img6} alt='' />
        <p>
        Empty stomachs can't be filled by showing God's photos: Kharge's dig at Modi
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/India/empty-stomachs-can-t-be-filled-by-showing-god-s-photos-kharge-s-dig-at-modi/ar-BB1hhveQ'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Politics;