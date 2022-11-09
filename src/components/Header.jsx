import React from 'react'
import Button from './Button'
import Logo from '../assets/media/Netflix_Logo_PMS.png'

const Header = () => {
  return (
    <header>
      <div className="header__control">
        <div><img src={Logo} alt="" /></div>
        <Button />
      </div>
    </header>
  )
}

export default Header