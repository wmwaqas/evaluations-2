import client from './client'

// API Client
// -----------------------------------------------------------------------------
// Usage:
// import API from './api'
// const api = new API()
//
// const students = api.service('students')
// students.find()
// students.create({ name: 'Jimm', ... })
//
// See: https://docs.feathersjs.com/api/services.html
//
// The above service calls return a Promise, so to use the response data, you
// will need to write something like:
//
// students.find()
//   .then((result) => {
//     // result has your data!
//   })
//   .catch((error) => {
//     // optionally catch errors and act on them
//   })
//
class API {
  constructor() {
    this.app = client
  }

  service(serviceName) {
    return this.app.service(serviceName)
  }

  authenticate({ email, password }) {
    return this.app.authenticate(
      Object.assign({}, { strategy: 'local' }, {
      email,
      password,
    }))
    .then((response) => {
      return this.app.passport.verifyJWT(response.accessToken);
    })
    .then((payload) => {
      return this.app.service('users').get(payload.userId);
    })
  }

  signOut() {
    return this.app.logout()
  }
}

export default API
