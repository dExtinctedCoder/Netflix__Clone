import React from 'react'
import Hero from '../components/Hero'
import Text from '../components/section/Text'
import Img from '../components/section/Img'
import Tv from '.././assets/media/tv.png'
import Kids from '.././assets/media/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png'
import Mobile from '../assets/media/mobile-0819.jpg'
import Boxshot from '../assets/media/boxshot.png'
import Gif from '../assets/media/download-icon.gif'
import Vid from '/video-tv-0819.m4v'
import Video from '../components/section/Video'
import Faqs from '../components/section/Faqs'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div id='component__control'>
      <Hero />
      <hr />
      <section>
        <Text heading={"Enjoy on your TV."}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Text>
        <div>
          <Img src={Tv}/>
          <Video src={Vid} />
        </div>
      </section>
      <hr />
      <section>
        <Text heading={"Download your shows to watch offline."}>Save your favorites easily and always have something to watch.</Text>
        <div>
          <div>
            <div><img src={Boxshot} /></div>
            <div>
              <p>Stranger Things</p>
              <small>Downloading...</small>
            </div>
            <div><img src={Gif} /></div>
          </div>
          <Img src={Mobile}/>
        </div>
      </section>
      <hr />
      <section>
        <Text heading={"Watch everywhere."}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Text>
        {/* <Img src={Tv}/> */}
      </section>
      <hr />
      <section>
        <Text heading={"Create profiles for kids."}>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</Text>
        <Img src={Kids}/>
      </section>
      <hr />
      <Faqs />
      <hr />
      <Footer />
    </div>
  )
}

export default Landing