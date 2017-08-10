import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Title extends PureComponent {
  static PropTypes = {
    content: PropTypes.string.isRequired,
  }

   render() {
     return (
       <h1>{ this.props.content }</h1>
     )
   }
 }
