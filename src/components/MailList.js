import React from 'react';
import '../styles.css';

const MailList = () => {
  return (
    <div className='mail'>
      <h2 className='mailTitle'>Save time, save money!</h2>
      <span className='mailDescr'>
        Sign up and we'll send the best deals to you
      </span>
      <div className='mailInputContainer'>
        <input
          type='email'
          className='mailInput'
          placeholder='Your email address'
        />
        <button className='mailBtn'>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
