import React from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';
import Header from '../components/Header';
import Featured from '../components/Featured';
import PropertyList from '../components/PropertyList';
import GuestsLove from '../components/GuestsLove';
import MailList from '../components/MailList';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h2 className='homeTitle'>Browse by property type</h2>
        <PropertyList />
        <h2 className='homeTitle'>Homes guests love</h2>
        <GuestsLove />
        <MailList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
