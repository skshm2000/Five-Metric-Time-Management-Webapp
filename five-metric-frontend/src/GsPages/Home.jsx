import React from 'react'
import Bottom from '../GsComponents/Bottom';
import Footer from '../GsComponents/Footer';
import MyTime from '../GsComponents/MyTime';
import Navbar from '../GsComponents/Navbar';
import Features from '../GsComponents/Features';
import Control from '../GsComponents/Control';
import Achieve from '../GsComponents/Achieve';
import Improve from '../GsComponents/Improve';
import Services from '../GsComponents/Services';
import Review from '../GsComponents/Review';
import WhyChoose from '../GsComponents/WhyChoose';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const {pathname} = useLocation()
  
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [pathname])

  return (
    <>
      <Navbar />
      {/* <br /><br /><br /><br /><br /> */}
      <MyTime />
      <Features />
      <Control />
      <Achieve />
      <Improve />
      <Services />
      {/* <Why5Metric /> */}
      <Review />
      <WhyChoose />
      <Footer />
      <Bottom />
    </>
      
  )
}

export default Home;
