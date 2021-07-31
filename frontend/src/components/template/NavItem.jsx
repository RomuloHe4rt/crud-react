import React from 'react'
import { Link } from 'react-router-dom'


// eslint-disable-next-line
export default props =>
  <Link to={`${props.href}`}>
    <i className={`fa fa-${props.icon}`}></i> {props.title}
  </Link>