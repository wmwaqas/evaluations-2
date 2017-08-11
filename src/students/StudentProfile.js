import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../actions/students/fetch'
import Title from '../components/Title'

 export class StudentProfile extends PureComponent {
   static PropTypes = {
    //  title: PropTypes.string.isRequired,
    _id: PropTypes.string,
    name: PropTypes.string,
    fetchStudents: PropTypes.func.isRequired,
   }

   componentWillMount() {
     this.props.fetchStudents()
   }

   render() {
     const {
       _id,
       name,
       photo,
     } = this.props

     if (!_id) return null

     return(
       <article className="student profile">
         <header>
           <div
             className="cover"
             style={{ backgroundImage: `url(${photo})` }} />
           <Title content={ name } />
         </header>
       </article>
     )
   }
 }

 const mapStateToProps = ({ students }, { params }) => {
   const student = students.reduce((prev, next) => {
     if (next._id === params.studentId) {
       return next
     }
     return prev
   }, {})

   return {
     ...student
   }
 }

 export default connect(mapStateToProps, { fetchStudents })(StudentProfile)
