import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import seedStudents from '../actions/students/seed'
import updateStudent from '../actions/students/update'
import Title from '../components/Title'
import Student from './Student'
import StudentEditor from './StudentEditor'
import './StudentsContainer.css'

export class StudentsContainer extends PureComponent {
   static PropTypes = {
     students: PropTypes.array.isRequired,
     seedStudents: PropTypes.func.isRequired,
   }

   componentWillMount() {
     this.props.seedStudents()
   }

    renderStudent(student, index) {
     return <Student
       key={index}
       onChange={updateStudent}
       { ...student } />
   }

   render() {
     return(
       <div className="students wrapper">
         <header>
           <Title content="Batch-1" />
           <StudentEditor />
         </header>

         <main>
           { this.props.students.map(this.renderStudent.bind(this)) }
         </main>
       </div>
     )
   }
 }

 // export default StudentsContainer
 const mapStateToProps = (store) => {
   return {
     students: store.students
   }
 }

 export default connect(mapStateToProps, { seedStudents })(StudentsContainer)
