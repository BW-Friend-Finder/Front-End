import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom'

import {login} from './actions/user'
import {get_all_hobbies, get_user_hobbies, add_hobbies_to_user} from './actions/hobbies'
import Login from './components/Login';
import Interests from './components/Interest';
import Matches from './components/Matches';
import Conversations from './components/Conversations';

function App(props) {
  return (
    <div className="App">
      <h1>App</h1>
      {/* <Route path='/' component={Register}/> */}
      <Route path='/' component={Login}/>
      {/* <Route path='/' component={Profile}/> */}
      <Route path='/' component={Interests}/>
      <Route path='/' component={Matches}/>
      <Route path='/' component={Conversations}/>
    </div>
  );
}

export default connect(state => state, {get_all_hobbies,get_user_hobbies,add_hobbies_to_user,login})(App);

/*
  login, logout, register, delete, update
  hobbies: getAll, getUser, addUser, removeUser('error code 500')
*/