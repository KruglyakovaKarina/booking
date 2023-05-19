import React from 'react';
import '../styles.css';

const GuestsLove = () => {
  return (
    <div className='guestsLove'>
      <div className='guestsLoveItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o='
          alt='Aparthotel Stare Miasto'
          className='guestLoveImg'
        />
        <h4 className='guestLoveName'>Aparthotel Stare Miasto</h4>
        <span className='guestLoveCity'>Old Town, Poland, Kraków</span>
        <span className='guestLovePrice'>
          Starting from <b>BYN 371</b>
        </span>
        <div className='guestLoveRating'>
          <button>8.7</button>
          <span>Excellent · 2,224 reviews</span>
        </div>
      </div>
      <div className='guestsLoveItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o='
          alt='7Seasons Apartments Budapest'
          className='guestLoveImg'
        />
        <h4 className='guestLoveName'>Apartments Budapest</h4>
        <span className='guestLoveCity'>06. Terézváros, Hungary, Budapest</span>
        <span className='guestLovePrice'>
          Starting from <b>BYN 289</b>
        </span>
        <div className='guestLoveRating'>
          <button>8.8</button>
          <span>Excellent · 7,875 reviews</span>
        </div>
      </div>
      <div className='guestsLoveItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o='
          alt='Oriente Palace Apartments'
          className='guestLoveImg'
        />
        <h4 className='guestLoveName'>Oriente Palace Apartments</h4>
        <span className='guestLoveCity'>Madrid City Center, Spain, Madrid</span>
        <span className='guestLovePrice'>
          Starting from <b>BYN 203</b>
        </span>
        <div className='guestLoveRating'>
          <button>8.9</button>
          <span>Excellent · 2,750 reviews</span>
        </div>
      </div>
      <div className='guestsLoveItem'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o='
          alt='numa I Vita Apartments'
          className='guestLoveImg'
        />
        <h4 className='guestLoveName'>numa I Vita Apartments</h4>
        <span className='guestLoveCity'>
          Fortezza da Basso, Italy, Florence
        </span>
        <span className='guestLovePrice'>
          Starting from <b>BYN 727</b>
        </span>
        <div className='guestLoveRating'>
          <button>9.3</button>
          <span>Wonderful · 1,042 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default GuestsLove;
