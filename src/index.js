import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// import store from './store'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin'
import StudentsContainer from './students/StudentsContainer'
import StudentProfile from './students/StudentProfile'

ReactDOM.render(
   <Provider store={store}>
     <Router history={history}>
       <Route path="/" component={App}>
         <IndexRoute component={StudentsContainer} />
         <Route path="/students/:studentId" component={StudentProfile} />
       </Route>
     </Router>
   </Provider>,
   document.getElementById('root')
 )
registerServiceWorker();
