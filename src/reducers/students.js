import { FETCHED_STUDENTS } from '../actions/students/fetch'
import { UPDATE_STUDENT } from '../actions/students/update'
import { CREATE_STUDENT } from '../actions/students/create'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [].concat(payload)

    case CREATE_STUDENT :
      return [Object.assign({}, payload)].concat(state)

    case UPDATE_STUDENT :
      const { _id, updates } = payload

      return state.map((student) => {
        if (student._id !== _id) return student
        return Object.assign({}, student, updates)
      })

    default :
      return state
  }
 }
