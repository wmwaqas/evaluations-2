import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Student from './Student'

class StudentsContainer extends PureComponent {
   static PropTypes = {
     students: PropTypes.array.isRequired,
     updateStudent: PropTypes.func.isRequired,
   }

   renderStudent(student, index) {
     const { updateStudent } = this.props

     return <Student
       key={index}
       onChange={updateStudent}
       { ...student } />
   }

   render() {
     return(
       <div className="students wrapper">
         <header>
           <Title content="Students" />
         </header>

         <main>
           {this.props.students.map(this.renderStudent.bind(this))}
         </main>
       </div>
     )
   }
 }

 export default StudentsContainer
