import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import updateStudent from '../actions/students/update'
import './Student.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'


 export class Student extends PureComponent {
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
       <header>
           <div
             className="cover"
             style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
           <h1>{ name }</h1>
        </header>
       </article>
     )
   }
 }

export default connect(null, { onChange: updateStudent })(Student)
 // export default Student

 // <h1>{ name }</h1>
 // <div>
 //   <ul>
 //     { photo && <li><img className="Student-Photo" src={photo} alt="Photo" /></li> }
 //   </ul>
 // </div>
