import React from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';
import Header from '../components/Header';
import Featured from '../components/Featured';
import PropertyList from '../components/PropertyList';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h2 className='homeTitle'>Browse by property type</h2>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
