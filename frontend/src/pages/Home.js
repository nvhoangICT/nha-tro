import React from 'react'
import Process from '../components/HomeComponent/Process'
import Properties from '../components/HomeComponent/Properties'
import Intro from '../components/HomeComponent/Intro'
import Services from '../components/HomeComponent/Services'
import About from '../components/HomeComponent/About'
import Statistic from '../components/HomeComponent/Statistic'
import Blog from '../components/HomeComponent/Blog'
import Header from '../components/HomeComponent/Header'
import Footer from '../components/HomeComponent/Footer'
import '../assets/scss/style.scss'
// import AdvancedSearch from '../components/SearchComponent/AdvancedSearch'
import UserHeader from '../components/HomeComponent/UserHeader'
import Cookies from 'js-cookie'

const Home = () => {

  let refreshToken = Cookies.get('refreshToken')


  return (
    <>
      <Header />
      <Intro />
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