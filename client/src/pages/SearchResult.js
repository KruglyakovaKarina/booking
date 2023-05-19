import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import ResultItem from '../components/ResultItem';

const SearchResult = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='searchResult'>
        <div className='searchResultWrapper'>
          <div className='search'>
            <h3 className='searchTitle'>Search</h3>
            <div className='searchItems'>
              <div className='searchItem'>
                <label className='searchItemDescr'>Destination</label>
                <input
                  type='text'
                  className='searchItemInput'
                  placeholder={destination}
                />
              </div>
              <div className='searchItem'>
                <label className='searchItemDescr'>Check-in\out date</label>
                <span
                  className='searchItemDate'
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                >
                  {`${format(date[0].startDate, 'dd.MM.yyyy')} — ${format(
                    date[0].endDate,
                    'dd.MM.yyyy'
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='datePickerSearch'
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className='searchItem'>
                <span className='searchItemDescr'>Options</span>

                <div className='searchOption'>
                  <span className='optionsDescr'>Min price (night)</span>
                  <input type='text' className='searchOptionInput' />
                </div>
                <div className='searchOption'>
                  <span className='optionsDescr'>Max price (night)</span>
                  <input type='text' className='searchOptionInput' />
                </div>
                <div className='searchOption'>
                  <span className='optionsDescr'>Adult</span>
                  <input
                    type='number'
                    className='searchOptionInput'
                    placeholder={options.adults}
                    min={1}
                  />
                </div>
                <div className='searchOption'>
                  <span className='optionsDescr'>Children</span>
                  <input
                    type='number'
                    min={0}
                    className='searchOptionInput'
                    placeholder={options.children}
                  />
                </div>
                <div className='searchOption'>
                  <span className='optionsDescr'>Room</span>
                  <input
                    type='number'
                    min={1}
                    className='searchOptionInput'
                    placeholder={options.rooms}
                  />
                </div>
              </div>
              <button className='searchResultBtn'>Search</button>
            </div>
          </div>
          <div className='result'>
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
