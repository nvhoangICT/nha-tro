import React from 'react'
import Process from '../components/Process'
import Properties from '../components/Properties'
import Searchbar from '../components/Searchbar'
import Services from '../components/Services'
import About from '../components/About'
import Statistic from '../components/Statistic'
import Testimony from '../components/Testimony'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <>
      <Searchbar />
      <Services />
      <Properties />
      <Process />
      <About />
      <Statistic />
      {/* <Testimony /> */}
      <Blog />
    </>
  )
}

export default Home