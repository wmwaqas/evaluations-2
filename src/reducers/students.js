import { SEED_STUDENTS } from '../actions/students/seed'
import { UPDATE_STUDENT } from '../actions/students/update'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case SEED_STUDENTS :
      return [].concat(payload)

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
