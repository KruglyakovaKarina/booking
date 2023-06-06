import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MailList from '../components/MailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faLocationDot,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import '../styles.css';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openPhoto, setOpenPhoto] = useState(false);
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { data, loading, error } = useFetch(`/hotels/hotel/${id}`);

  const handleOpen = (i) => {
    setSlideIndex(i);
    setOpenPhoto(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;
    if (direction === 'left') {
      newSlideIndex = slideIndex === 0 ? 8 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 8 ? 0 : slideIndex + 1;
    }
    setSlideIndex(newSlideIndex);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? (
        'Loading'
      ) : (
        <div className='hotel'>
          {openPhoto && (
            <div className='slider'>
              <FontAwesomeIcon
                icon={faXmark}
                className='sliderClose'
                onClick={() => setOpenPhoto(false)}
              />
              <FontAwesomeIcon
                icon={faAngleLeft}
                className='sliderArrow'
                onClick={() => handleMove('left')}
              />
              <div className='sliderWrapper'>
                <img
                  src={data.photos[slideIndex]}
                  alt=''
                  className='sliderImg'
                />
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className='sliderArrow'
                onClick={() => handleMove('right')}
              />
            </div>
          )}
          <div className='hotelWrapper'>
            <div className='hotelInfo'>
              <div className='hotelTitles'>
                <h1 className='hotelName'>{data.name}</h1>
                <div className='hotelLocation'>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{data.address}</span>
                </div>
                <span className='hotelDistance'>
                  Excellent location – {data.distance}m from center
                </span>
                <span className='hotelBookOpt'>
                  Book a stay over {data.cheapestPrice} BYN at this property and
                  get a free airport taxi
                </span>
              </div>
              <button className='hotelReserveBtn'>Reserve or Book Now!</button>
            </div>
            <div className='hotelImages'>
              {data.photos?.map((photo, i) => (
                <div className='hotelImgWrapper'>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=''
                    className='hotelImg'
                  />
                </div>
              ))}
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailsTexts'>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
              <div className='hotelDetailsPrice'>
                <h3>Perfect for a 9-night stay!</h3>
                <span>
                  Located in the heart of Warsaw, this hotel has an excellent
                  location score of 9.5
                  <br />
                  Want a great night's sleep? This hotel was highly-rated for
                  its very comfy beds.
                </span>
                <h2 className='hotelPrice'>
                  <b>6196 BYN</b> (9 nights)
                </h2>
                <button className='hotelReserveBtn widthBtn'>
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
