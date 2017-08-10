import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Student.css'

 class Student extends PureComponent {
   static PropTypes = {
     _id: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     photo: PropTypes.string.isRequired,
     red: PropTypes.bool,
     yellow: PropTypes.bool,
     green: PropTypes.bool,
   }

   render() {
     const { name, photo, red, yellow, green } = this.props

     return(
       <article className="Student">
         <h1>{ name }</h1>
         <div>
           <ul>
             { photo && <li><img className="Student-Photo" src={photo} alt="Photo" /></li> }
           </ul>
         </div>
       </article>
     )
   }
 }

 export default Student
