import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import ResultItem from '../components/ResultItem';
import useFetch from '../hooks/useFetch';

const SearchResult = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min}&max=${max}`
  );

  const handleClick = () => {};

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
                  <span className='optionsDescr'>Min price</span>
                  <input
                    type='number'
                    onChange={(e) => setMin(e.target.value)}
                    className='searchOptionInput'
                    min={0}
                    placeholder={min}
                  />
                </div>
                <div className='searchOption'>
                  <span className='optionsDescr'>Max price</span>
                  <input
                    type='number'
                    onChange={(e) => setMax(e.target.value)}
                    className='searchOptionInput'
                    min={0}
                    placeholder={max}
                  />
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
              <button className='searchResultBtn' onClick={handleClick}>
                Search
              </button>
            </div>
          </div>
          <div className='result'>
            {loading ? (
              'Loading'
            ) : (
              <>
                {data.map((item) => (
                  <ResultItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
