import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StudentsContainer from './students/StudentsContainer'

export const students = [
      {
        name: 'John',
        photo: 'https://t4.ftcdn.net/jpg/00/91/61/81/240_F_91618179_eR79OdR87jR9fp9S3aaiJGz4aGqkkwuE.jpg',
        red: true,
        yellow: false,
        green: false,
      },
      {
        name: 'Tom',
        photo: 'https://s-media-cache-ak0.pinimg.com/736x/4e/5c/f7/4e5cf7d4ccb9c59b6620a9c71944d51e--emoticons-text-smileys.jpg',
        red: true,
        yellow: false,
        green: false,
      },
      {
        name: 'Micheal',
        photo: 'http://2.bp.blogspot.com/-G1vh_uLbyM8/U5W__nOU6eI/AAAAAAAAIIg/v1y8V_TEduI/s1600/coffee-smiley.png',
        red: false,
        yellow: true,
        green: false,
      },
      {
        name: 'Tim',
        photo: 'http://freedesignfile.com/upload/2016/07/Ok-sign-emoticon-icon.jpg',
        red: false,
        yellow: true,
        green: false,
      },
      {
        name: 'Bob',
        photo: 'http://4.bp.blogspot.com/-Y6Iu7UaLrxE/VZ3QT7gALwI/AAAAAAAAQXs/xKPU4dC_wNA/s1600/good-mood-smiley.jpg',
        red: false,
        yellow: false,
        green: true,
      },
      {
        name: 'Harry',
        photo: 'https://s-media-cache-ak0.pinimg.com/originals/20/a8/ba/20a8baef9cc2949b4021220cfd94ac08.png',
        red: false,
        yellow: false,
        green: true,
      },
    ]

class App extends Component {
  constructor() {
     super()

     this.state = { students }
   }

   updateStudent(id, updatedAttributes) {
     console.log('App', id, updatedAttributes)

     const { students } = this.state

     this.setState({
       students: students.map((student) => {
         if (student._id !== id) return student
         return Object.assign({}, student, updatedAttributes)
       })
     })
   }
  render() {
    const { students } = this.state
    return (
      <div className="App">
      <StudentsContainer
          students={students}
          updateStudent={this.updateStudent.bind(this)} />
      </div>
    );
  }
}

export default App;
