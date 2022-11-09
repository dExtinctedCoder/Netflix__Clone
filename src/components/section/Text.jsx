import React from 'react'

const Section = ({children, heading}) => {
  return (
    <div className='text__control'>
      <h2>{heading}</h2>
      <h3>{children}</h3>
    </div>
  )
}

export default Section