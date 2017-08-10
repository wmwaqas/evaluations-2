export const UPDATE_STUDENT = 'UPDATE_STUDENT'

export default (_id, updates) => {
  return {
     type: UPDATE_STUDENT,
     payload: {
       _id,
       updates
     }
   }
 }
