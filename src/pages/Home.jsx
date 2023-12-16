import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Trusted from '../components/Trusted';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>
  )
}

export default Home
