import React, { useState } from 'react'
import { faqs } from '../../assets/data/faqs'
import SignUpInput from '../SignUpInput'
import { AiOutlinePlus } from 'react-icons/ai'

const Faqs = () => {

  const [isOpen, setIsOpen] = useState({
    q1: false, 
    q2: false, 
    q3: false, 
    q4: false, 
    q5: false, 
    q6: false
  })

  const resetToggle = (id) => {
    const objKeys = Object.keys(isOpen).filter(key => {
      return key != id
    })
    for (const key of objKeys) {
      setIsOpen({
        ...isOpen,
        [key]: false
      })
    }
  }

  const toggle = id => {
    resetToggle(id)
    setIsOpen({
      ...isOpen, 
      [id]: !isOpen[id],
    })
  }

  return (
    <section className='faqs__control'>
      <div className='faqs'>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {
          faqs.map(({id, heading, p1, p2}) => {
            return (
              <li key={id}>
                <p onClick={() => toggle(id)}>{heading}<AiOutlinePlus style={{transform: isOpen[id] ? "rotate(45deg)" : "rotate(0deg)"}} /></p>
                {
                  isOpen[id] ? <div>
                  <p>{p1}</p>
                  <p>{p2 ?? p2}</p>
                </div> : null
                }
              </li>
            )
          })
        }
      </ul>
      </div>
      <div className='faqs__form'>
        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
        <SignUpInput label={"faqs__form"} />
      </div>
    </section>
  )
}

export default Faqs