import React from 'react'
import About from './About/About'
import SignandDonate from './SignandDonate/SignandDonate'
import Header from '../Header/Header'
import Petitions from "./Petitions/Petitions"
import CarouselContainer  from '../Header/Carousel'
import FooterComponent from '../Header/FooterComponent'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Dashboard = () => {
  return (
    <>
      <Header />
      <SignandDonate/>
      <About />
      <CarouselContainer />
      <Petitions />
      <FooterComponent />
    </>
  )
}

export default Dashboard