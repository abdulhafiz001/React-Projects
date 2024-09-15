import React from 'react';
import Header from './components/header';

import Banner from './components/Banner';
import Footer from './components/Footer';
import Categories from './components/Categories';
import HomeJobList from './components/HomeJobList';


function JobPoster() {
  return (
    <div>
      <Header />
      <Banner />
      
      <HomeJobList />
      <Footer />
      

      {/* Other content for the JobPoster component */}
    </div>
  );
}

export default JobPoster;
