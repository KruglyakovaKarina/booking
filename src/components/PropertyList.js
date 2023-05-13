import React from 'react';
import '../styles.css';
const PropertyList = () => {
  return (
    <div className='pList'>
      <div className='pListItem'>
        <img
          src='https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o='
          alt='Hotels'
          className='pListImg'
        />
        <div className='pListTitles'>
          <h4 className='pListTitle'>Hotels</h4>
          <span className='pListDescription'>966,308 hotels</span>
        </div>
      </div>

      <div className='pListItem'>
        <img
          src='https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o='
          alt='Apartments'
          className='pListImg'
        />
        <div className='pListTitles'>
          <h4 className='pListTitle'>Apartments</h4>
          <span className='pListDescription'>1,084,041 apartments</span>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o='
          alt='Resorts'
          className='pListImg'
        />
        <div className='pListTitles'>
          <h4 className='pListTitle'>Resorts</h4>
          <span className='pListDescription'>19,319 resorts</span>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o='
          alt='Villas'
          className='pListImg'
        />
        <div className='pListTitles'>
          <h4 className='pListTitle'>Villas</h4>
          <span className='pListDescription'>585,027 villas</span>
        </div>
      </div>
      <div className='pListItem'>
        <img
          src='https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o='
          alt='Cottages'
          className='pListImg'
        />
        <div className='pListTitles'>
          <h4 className='pListTitle'>Cottages</h4>
          <span className='pListDescription'>637,532 cottages</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
