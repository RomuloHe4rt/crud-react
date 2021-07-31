import './Logo.css'
import logo from '../../assets/img/logo.png'
import React from 'react'

// eslint-disable-next-line
export default props =>
  <aside className="logo">
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  </aside>