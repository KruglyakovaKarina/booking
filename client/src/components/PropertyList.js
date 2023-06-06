import React from 'react';
import '../styles.css';
import useFetch from '../hooks/useFetch';

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');
  const images = [
    'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
    'https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',
    'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&o=',
    'https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',
    'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=',
  ];
  return (
    <div className='pList'>
      {loading ? (
        'Loading'
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className='pListItem' key={i}>
                <img src={img} alt='Hotels' className='pListImg' />
                <div className='pListTitles'>
                  <h4 className='pListTitle'>{data[i]?.type}s</h4>
                  <span className='pListDescription'>
                    {data[i]?.count} {data[i]?.type}s
                  </span>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
