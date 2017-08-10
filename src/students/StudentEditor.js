import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import createStudent from '../actions/students/create'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import './StudentEditor.css'


class StudentEditor extends PureComponent {
   constructor(props) {
     super()

     const { name, photo } = props

     this.state = {
       name,
       photo,
     }
   }

   updateName(event) {
     if (event.keyCode === 13) {
       event.preventDefault()
       this.refs.summary.medium.elements[0].focus()
     }
     this.setState({
       name: this.refs.name.value
     })
   }

   updatePhoto(event) {
     this.setState({
       photo: this.refs.photo.value
     })
   }

   saveStudent() {
     const {
       name,
       photo,
     } = this.state

     const student = {
       name,
       photo,
     }

     this.props.createStudent(student)
   }

   render() {
     return (
       <div className="editor">
         <input
           type="text"
           ref="name"
           className="name"
           placeholder="Student's Name"
           defaultValue={this.state.name}
           onChange={this.updateName.bind(this)}
           onKeyDown={this.updateName.bind(this)} />

         <input
           type="text"
           ref="photo"
           className="photo"
           placeholder="Student's Photo URL"
           defaultValue={this.state.photo}
           onChange={this.updatePhoto.bind(this)}
           onKeyDown={this.updatePhoto.bind(this)} />


         <div className="actions">
           <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
         </div>
       </div>
     )
   }
 }

 export default connect(null, { createStudent })(StudentEditor)

 // const TYPES = [
 //   'vegan',
 //   'vegetarian',
 //   'pescatarian'
 // ]

 //  updateIntro(text, medium) {
 //    this.setState({
 //      summary: text
 //    })
 //  }


 //  setType(event) {
 //    this.setState({
 //      vegan: event.target.value === 'vegan',
 //      vegetarian: event.target.value === 'vegetarian',
 //      pescatarian: event.target.value === 'pescatarian'
 //    })
 //  }

 //  <Editor
 //    ref="summary"
 //    options={{
 //      placeholder: {text: 'Write an Introduction...'}
 //    }}
 //    onChange={this.updateIntro.bind(this)}
 //    text={this.state.summary} />

 // {TYPES.map((type) => {
 //   return <label key={type} htmlFor={type}>
 //     <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
 //     {type}
 //   </label>
 // })}
