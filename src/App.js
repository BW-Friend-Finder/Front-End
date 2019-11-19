import React from 'react';
import {Route, Link} from 'react-router-dom'

import Login from './components/Login'
import { connect } from 'react-redux';
import {update} from './actions'
import Register from './components/Register';

const BasicNav = () =>{
  return (
    <div className='basic-nav'>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

function App(props) {
  return (
    <div className="App">
      <h1 onClick={()=>{props.history.push('/')}}>App</h1>
      <p>{props.user.first_name}</p>
      <p>{props.user.last_name}</p>
      <p>{props.user.email}</p>
      <Route exact path='/' component={BasicNav}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </div>
  );
}

export default connect(state => state, {update})(App);