import React from 'react';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.png';
import './sport.css'

const Sports = () => {
  return (
    <div className='sport'>
      <div className='sportPost'>
        <img className='sportImg' src={img1} alt='' />
        <p>
          India beat New Zealand 11-1 to enter FIH Women's Hockey5s World Cup semis
        </p>
        <p>
          <a href='https://www.msn.com/en-in/lifestyle/women/india-beat-new-zealand-11-1-to-enter-fih-women-s-hockey5s-world-cup-semis/ar-BB1hicHb?ocid=socialshare&cvid=04ad9c8c81dc47f89936861c5fb4f131&ei=53' >
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='sportPost'>
        <img className='sportImg' src={img2} alt='' />
        <p>
          Ravichandran Ashwin, Ravindra Jadeja surpass Kumble-Harbhajan duo for magnificent India record in IND vs ENG 1st Test
        </p>
        <p>
          <a href='https://www.msn.com/en-in/sports/cricket/ravichandran-ashwin-ravindra-jadeja-surpass-kumble-harbhajan-duo-for-magnificent-india-record-in-ind-vs-eng-1st-test/ar-BB1henYf?ocid=socialshare&cvid=04ad9c8c81dc47f89936861c5fb4f131&ei=27'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div><div className='sportPost'>
        <img className='sportImg' src={img3} alt='' />
        <p>
          Why are players trying to leave Saudi Pro League? Future for Karim Benzema, Cristiano Ronaldo and other stars
        </p>
        <p>
          <a href='https://www.msn.com/en-in/sports/football/why-are-players-trying-to-leave-saudi-pro-league-future-for-karim-benzema-cristiano-ronaldo-and-other-stars/ar-BB1hfkjd?ocid=socialshare&cvid=b07d4d2426a245e5b843b7900e7a5f6c&ei=3'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div><div className='sportPost'>
        <img className='sportImg' src={img4} alt='' />
        <p>
          Brest the surprise of the French league as it prepares to visit leader PSG
        </p>
        <p>
          <a href='https://www.msn.com/en-in/sports/football/brest-the-surprise-of-the-french-league-as-it-prepares-to-visit-leader-psg/ar-BB1hfFoE?ocid=socialshare&cvid=52817fe9ea52405cf123d233bd70b49f&ei=17'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='sportPost'>
        <img className='sportImg' src={img5} alt='' />
        <p>
          Kayshon Boutte: Why the New England Patriots receiver has been arrested
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/world/kayshon-boutte-why-the-new-england-patriots-receiver-has-been-arrested/ar-BB1hgRIh?ocid=socialshare&cvid=8ec861405eac49abb2b8594aea64c0cf&ei=8'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
      <div className='sportPost'>
        <img className='sportImg' src={img6} alt='' />
        <p>
          Amazed By How Much...: Roger Federer Lavishes Special Praise On Neeraj Chopra
        </p>
        <p>
          <a href='https://www.msn.com/en-in/news/other/amazed-by-how-much-roger-federer-lavishes-special-praise-on-neeraj-chopra/ar-BB1hgms2?ocid=socialshare&cvid=04ad9c8c81dc47f89936861c5fb4f131&ei=55'>
            <button className='sportbut'>
              more
            </button>
          </a>
        </p>
      </div>
    </div >
  );
}

export default Sports;