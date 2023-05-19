import React from 'react';
import '../styles.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResultItem = () => {
  return (
    <div className='resultItem'>
      <img
        className='riImg'
        src='https://cf.bstatic.com/xdata/images/hotel/square200/455764140.webp?k=9053a3d85bf243ae8801d0d94f77c2ea2a8edf8836964eb859cf58bff6e29b26&o=&s=1'
        alt='Kasprzaka 29 Perfect Apart Tower C'
      />
      <div className='riDescr'>
        <h1 className='riTitle'>Kasprzaka 29 Perfect Apart Tower C</h1>
        <span className='riDistance'>3.6 km from center</span>
        <span className='riTaxiOp'>Free airport taxi</span>
        <span className='riName'>One-Bedroom Apartment</span>
        <span className='riFeatures'>2 beds (1 full, 1 sofa bed)</span>
        <span className='riCancelop'>Free cancellation</span>
        <span className='riCancelopSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='riDetails'>
        <div className='riRating'>
          <div className='riRatingTexts'>
            <span className='riRatingText'>Excellent</span>
            <span className='riRatingReviews'>2,224 reviews</span>
          </div>
          <button>8.7</button>
        </div>
        <div className='riDetailTexts'>
          <span className='riPrice'>BYN 2,705</span>
          <span className='riTaxesOp'>Includes taxes and fees</span>
          <button className='riCheckBtn'>
            See availability
            <FontAwesomeIcon icon={faChevronRight} className='riCheckBtnIcon' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
