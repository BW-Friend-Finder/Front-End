import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {login} from '../actions/user'
import {SUCCESS} from '../actions'

const Login = props => {
  const [loginForm, setLoginForm] = useState({
    email: 'Insurikai@gmail.com',
    password: 'examplePassword'
  })
  
  useEffect(() => {
    if(props.backend_request_state === SUCCESS)
      props.history.push('/')
  }, [props.backend_request_state, props.history])

  const changeHandler = e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault();
    props.login(loginForm);
  }

  return(<div className='Login'>
    <h1>Login</h1>
    <form onSubmit={submitHandler}>
      <input type='email' name='email' value={loginForm.email} onChange={changeHandler}/>
      <input type='password' name='password' value={loginForm.password} onChange={changeHandler}/>
      <input type='submit' value='Sign In'/>
    </form>
  </div>
  )
}
export default connect(state => state, {login})(Login)