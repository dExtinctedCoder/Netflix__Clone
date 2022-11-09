import React from 'react'
import Header from './Header'
import SignUpInput from './SignUpInput'
import bg from '.././assets/media/NG-en-20221031-popsignuptwoweeks-perspective_alpha_website_small.jpg'

const Hero = () => {
  return (
    <section className='hero__section'>
      <div className='bg__cover'><img src={bg} alt="#" /></div>
      <div className="bg__overlay"></div>
      <Header />
      <div className='hero__main-control'>
        <div>
          <h2>Unlimited movies, TV shows, and more.</h2>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
        </div>
        <SignUpInput label={"hero__form"} />
      </div>
    </section>
  )
}

export default Hero