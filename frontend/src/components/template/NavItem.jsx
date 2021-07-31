import React from 'react'

// eslint-disable-next-line
export default props =>
  <a href={`${props.href}`}>
    <i className={`fa fa-${props.icon}`}></i> {props.title}
  </a>