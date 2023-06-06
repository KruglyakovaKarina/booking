import React from 'react';
import '../styles.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ResultItem = ({ item }) => {
  return (
    <div className='resultItem'>
      <img className='riImg' src={item.photos[0]} alt={item.name} />
      <div className='riDescr'>
        <h1 className='riTitle'>{item.name}</h1>
        <span className='riDistance'>{item.distance}m from center</span>
        <span className='riTaxiOp'>Free airport taxi</span>
        <span className='riName'>{item.title}</span>
        <span className='riFeatures'>{item.description}</span>
        <span className='riCancelop'>Free cancellation</span>
        <span className='riCancelopSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='riDetails'>
        {item.rating && (
          <div className='riRating'>
            <div className='riRatingTexts'>
              <span className='riRatingText'>Excellent</span>
            </div>
            <button>{item.rating}</button>
          </div>
        )}
        <div className='riDetailTexts'>
          <span className='riPrice'>BYN {item.cheapestPrice}</span>
          <span className='riTaxesOp'>Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className='riCheckBtn'>
              See availability
              <FontAwesomeIcon
                icon={faChevronRight}
                className='riCheckBtnIcon'
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
