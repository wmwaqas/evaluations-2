import students from '../../fixtures/students'

export const SEED_STUDENTS = 'SEED_STUDENTS'

export default () => {
 return {
     type: SEED_STUDENTS,
     payload: students
   }
 }
