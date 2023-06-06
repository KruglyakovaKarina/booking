import React from 'react';
import '../styles.css';
import useFetch from '../hooks/useFetch';

const GuestsLove = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');
  return (
    <div className='guestsLove'>
      {loading ? (
        'Loading'
      ) : (
        <>
          {data.map((item) => (
            <div className='guestsLoveItem' key={item._id}>
              <img
                src={item.photos[0]}
                alt={item.name}
                className='guestLoveImg'
              />
              <h4 className='guestLoveName'>{item.name}</h4>
              <span className='guestLoveCity'>{item.city}</span>
              <span className='guestLovePrice'>
                Starting from <b>BYN {item.cheapestPrice}</b>
              </span>
              {item.rating && (
                <div className='guestLoveRating'>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default GuestsLove;
