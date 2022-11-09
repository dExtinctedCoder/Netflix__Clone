import React from 'react'
import {BsChevronRight} from 'react-icons/bs'

const SignUpInput = ({label}) => {
  return (
    <form>
      <label htmlFor={label}>
        <div>
          <input type="email" name="email__address" id={label} placeholder=" " />
          <span>Email address</span>
        </div>
        <button className='big' type="submit">Get Started <BsChevronRight /></button>
      </label>
      <span className="error__msg"></span>
    </form>
  )
}

export default SignUpInput