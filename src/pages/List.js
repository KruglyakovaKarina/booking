import React from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';
import Header from '../components/Header';

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type='list' />
    </div>
  );
};

export default List;
