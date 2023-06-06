import React from 'react';
import '../styles.css';
import useFetch from '../hooks/useFetch';

const Featured = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');
  return (
    <div className='featured'>
      {loading ? (
        'Loading'
      ) : (
        <>
          <div className='featuredItem'>
            <img
              className='featuredImg'
              src='https://www.backpackadventures.org/wp-content/uploads/2022/04/IMG_20220225_144139.jpg'
              alt='Bialystok'
            />
            <div className='featuredTitle'>
              <h2>
                Bialystok{' '}
                <img
                  className='featuredImgFlag'
                  src='https://cdn.britannica.com/52/3552-004-83ABA964/Flag-Poland.jpg'
                  alt='flag'
                />
              </h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img
              className='featuredImg'
              src='https://i.insider.com/6356d5d9390dfe00196daae9?width=700'
              alt='Berlin'
            />
            <div className='featuredTitle'>
              <h2>
                Berlin{' '}
                <img
                  className='featuredImgFlag'
                  src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
                  alt='flag'
                />
              </h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img
              className='featuredImg'
              src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/33/4e/c0/alliance-palace-batumi.jpg?w=700&h=-1&s=1'
              alt='Batumi'
            />
            <div className='featuredTitle'>
              <h2>
                Batumi{' '}
                <img
                  className='featuredImgFlag'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Flag_of_Kingdom_of_Georgia.svg/400px-Flag_of_Kingdom_of_Georgia.svg.png'
                  alt='flag'
                />
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
