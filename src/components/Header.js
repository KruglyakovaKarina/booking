import {
  faBed,
  faCalendarDays,
  faCar,
  faMapLocationDot,
  faPlane,
  faTaxi,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../styles.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [openOptions, setOpenOptions] = useState(false);
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'plus' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
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
          <div className='headerSearch'>
            <div className='headerSearchItem'>
              <FontAwesomeIcon icon={faBed} className='searchIcons' />
              <input
                type='text'
                placeholder='Where are you going?'
                className='headerSearchInput'
              />
            </div>
            <div className='headerSearchItem'>
              <FontAwesomeIcon icon={faCalendarDays} className='searchIcons' />
              <span
                className='headerSearchText'
                onClick={() => {
                  setOpenDate(!openDate);
                }}
              >
                {`${format(date[0].startDate, 'dd.MM.yyyy')} — ${format(
                  date[0].endDate,
                  'dd.MM.yyyy'
                )}`}
                {/*Check-in days — Check-out days*/}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className='datePicker'
                />
              )}
            </div>
            <div className='headerSearchItem'>
              <FontAwesomeIcon icon={faUserLarge} className='searchIcons' />
              <span
                className='headerSearchText'
                onClick={() => {
                  setOpenOptions(!openOptions);
                }}
              >
                {`${options.adults} adults · ${options.children} children · ${options.rooms} room`}
              </span>
              {openOptions && (
                <div className='options'>
                  <div className='optionItem'>
                    <span className='optionText'>Adults</span>
                    <div className='optionCounter'>
                      <button
                        disabled={options.adults <= 1}
                        className='optionCounterBtn'
                        onClick={() => {
                          handleOption('adults', 'minus');
                        }}
                      >
                        -
                      </button>
                      <span className='optionCounterNumber'>
                        {options.adults}
                      </span>
                      <button
                        className='optionCounterBtn'
                        onClick={() => {
                          handleOption('adults', 'plus');
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='optionItem'>
                    <span className='optionText'>Children</span>
                    <div className='optionCounter'>
                      <button
                        disabled={options.children <= 0}
                        className='optionCounterBtn'
                        onClick={() => {
                          handleOption('children', 'minus');
                        }}
                      >
                        -
                      </button>
                      <span className='optionCounterNumber'>
                        {options.children}
                      </span>
                      <button
                        className='optionCounterBtn'
                        onClick={() => {
                          handleOption('children', 'plus');
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='optionItem'>
                    <span className='optionText'>Rooms</span>
                    <div className='optionCounter'>
                      <button
                        disabled={options.rooms <= 1}
                        className='optionCounterBtn'
                        onClick={() => {
                          handleOption('rooms', 'minus');
                        }}
                      >
                        -
                      </button>
                      <span className='optionCounterNumber'>
                        {options.rooms}
                      </span>
                      <button
                        className='optionCounterBtn'
                        onClick={() => {
                          handleOption('rooms', 'plus');
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='headerSearchItem'>
              <button className='searchButton'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
