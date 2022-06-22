import React from 'react'
import Process from '../components/HomeComponent/Process'
import Properties from '../components/HomeComponent/Properties'
import Searchbar from '../components/HomeComponent/Searchbar'
import Services from '../components/HomeComponent/Services'
import About from '../components/HomeComponent/About'
import Statistic from '../components/HomeComponent/Statistic'
import Blog from '../components/HomeComponent/Blog'
import Header from '../components/HomeComponent/Header'
import Footer from '../components/HomeComponent/Footer'
import '../assets/scss/style.scss'

const Home = () => {
  return (
    <>
      <Header />
      <Searchbar />
      <Services />
      <Properties />
      <Process />
      <About />
      <Statistic />
      {/* <Testimony /> */}
      <Blog />
      <Footer />
    </>
  )
}

export default Home