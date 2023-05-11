import {
  faBed,
  faCar,
  faMapLocationDot,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div>
          <div className='headerList'>
            <div className='headerItem active'>
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className='headerItem'>
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className='headerItem'>
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className='headerItem'>
              <FontAwesomeIcon icon={faMapLocationDot} />
              <span>Attractions</span>
            </div>
            <div className='headerItem'>
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          <h1 className='headerTitle'>Find your next stay</h1>
          <p className='headerDescr'>
            Search deals on hotels, homes, and much more...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
