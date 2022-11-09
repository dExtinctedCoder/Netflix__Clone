import React from 'react'
import { links } from '../assets/data/links'

const Footer = () => {
  return (
    <footer>
      <div className="footer__control">
        <p>Questions? Contact us.</p>
        <ul>
          {
            links.map(({id, href, subText}) => {
              return <li key={id} id={id}><a href={href}>{subText}</a></li>
            })
          }
        </ul>
        <p className="copyright-country">Netflix Nigeria</p>
      </div>
    </footer>
  )
}

export default Footer