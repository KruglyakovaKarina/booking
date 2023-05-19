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

const Hotel = () => {
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/342708715.jpg?k=832438f82ac09c467f8a0601d4782cc5f4023bf486bc83b443ed29101508e003&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/342711631.jpg?k=afb7cba7fe8d39b50f122cc2b77e68c4c7c9371dd0c66b1dde89579772d56801&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/342711140.jpg?k=6884c903162585ff938c8defb4c2f5179812f3fbfccb85a6e975720b25bfe258&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/286933350.jpg?k=12e3096b6ee2e2a43f13914d2c44485b0c0acc64d1d441883a8a495ce29c1a1b&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/319715418.jpg?k=dfcce5810fa5928f518ccd9bd918ebfc136b711d0aabf5cd46bd4c5d5a8ecc9d&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/357399547.jpg?k=4e28958e61f089f39c3917d8b504b84e94a3889727755728b382f45f4ac50e68&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/319714584.jpg?k=c62822bf35a0bb4c48bdb4db3a7f85e92518b818d56b963c61dd487b73e3f0db&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/153755736.jpg?k=4adb3633e94ae67ae227beefa2268d8e5a6bdd3e3c39fc1bfbdc310a65f9890a&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/319717872.jpg?k=f5402012f8bdd014033c82bf5256a8e7e1d81273b240065edb55386854ca1850&o=&hp=1',
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [openPhoto, setOpenPhoto] = useState(false);

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
              <img src={photos[slideIndex].src} alt='' className='sliderImg' />
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
              <h1 className='hotelName'>H15 Boutique Hotel</h1>
              <div className='hotelLocation'>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>
                  ul. Poznańska 15, Sródmiescie, 00-680 Warsaw, Poland
                </span>
              </div>
              <span className='hotelDistance'>
                Excellent location – 500m from center
              </span>
              <span className='hotelBookOpt'>
                Book a stay over 5000 BYN at this property and get a free
                airport taxi
              </span>
            </div>
            <button className='hotelReserveBtn'>Reserve or Book Now!</button>
          </div>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=''
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h2>Stay in the heart of Warsaw</h2>
              <p>
                The 5-star, H15 Boutique Hotel is a part of an impressive,
                historic building in the center of Warsaw where in the pre-war
                times the Soviet embassy was located. It's been awarded by
                Michelin and Forbes in 2018. It offers accommodations in stylish
                apartments with free Wi-Fi and a coffee maker. A conference room
                is also available. Each apartment is air-conditioned, with
                modern interiors and a seating area. Guests can relax in front
                of a LED TV with satellite channels. Some apartments feature a
                balcony and all have a safety deposit box. There is a
                kitchenette with a Nespresso coffee maker and free Fair Trade
                coffee. The bathroom is finished with stone elements and offers
                free toiletries. Recommended by Michelin Guide, the Signature
                Restaurant offers international cuisine. A drink or two can be
                enjoyed in the bar. H15 Boutique Hotel is located only 656 feet
                from numerous restaurants and pubs. Metro Centrum Station is
                2461 feet away and the Central Train Station is 3117 feet away.
                This is our guests' favorite part of Warsaw, according to
                independent reviews. Couples in particular like the location –
                they rated it 9.5 for a two-person trip.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h3>Perfect for a 9-night stay!</h3>
              <span>
                Located in the heart of Warsaw, this hotel has an excellent
                location score of 9.5
                <br />
                Want a great night's sleep? This hotel was highly-rated for its
                very comfy beds.
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
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
