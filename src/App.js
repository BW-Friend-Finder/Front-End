import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom'

import Login from './components/Login';
import Interests from './components/Interest';
import Matches from './components/Matches';
import Conversations from './components/Conversations';
import Profile from './components/Profile';
import PrivateRoute from './tools/PrivateRoute'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App(props) {
  return (
    <div className="App">
      <Route path='/signup' component={SignUp}/>
      <Route path='/signin' component={SignIn}/>
      <PrivateRoute path='/user' component={Profile}/>
      <PrivateRoute path='/interests' component={Interests}/>
      <PrivateRoute exact path='/' component={Matches}/>
      <PrivateRoute path='/messages' component={Conversations}/>
    </div>
  );
}

export default connect(state=>state, {})(App);
