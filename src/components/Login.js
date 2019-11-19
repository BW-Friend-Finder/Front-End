import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {login} from '../actions'

const Login = props => {
  const [loginForm, setLoginForm] = useState({
    email: 'Insurikai@gmail.com',
    password: 'examplePassword'
  })
  const changeHandler = e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }
  // useEffect(() => {
  //   if(props.loginState === 'LOGGED_IN')
  //     props.history.push('/')
  // }, [props.loginState, props.history])
  // const submitHandler = e => {
  //   e.preventDefault();
  //   props.login(loginForm);
  // }
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
// export default connect(state => state, {login})(Login)