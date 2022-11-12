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
// import Why5Metric from '../GsComponents/Why5Metric';
import Review from '../GsComponents/Review';
import WhyChoose from '../GsComponents/WhyChoose';
const Home = () => {
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
      {/* <Bottom /> */}
    </>
      
  )
}

export default Home;
