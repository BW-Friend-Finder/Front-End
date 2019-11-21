import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {register} from '../actions/user'
import {SUCCESS, FAILURE} from '../actions'

const Register = props => {
  const [registerForm, setRegisterform] = useState({
    email: 'Insurikai@gmail.com',
    password: 'examplePassword',
    first_name: 'John',
    last_name: 'Doe',
    age: 400,
    zipcode: '99999'
  })
  const changeHandler = e => {
    setRegisterform({
      ...registerForm,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    if(props.backend_request_state === SUCCESS){
      props.history.push('/')
    }else if(props.backend_request_state === FAILURE){
      console.log('Something is wrong, register request threw an error')
    }
  }, [props.backend_request_state, props.history])
  const submitHandler = e => {
    e.preventDefault();
    props.register(registerForm);
  }
  return(<div className='Register'>
    <h1>Register</h1>
    <form onSubmit={submitHandler}>
      <input type='text' name='first_name' value={registerForm.first_name} onChange={changeHandler}/>
      <input type='text' name='last_name' value={registerForm.last_name} onChange={changeHandler}/>
      <input type='number' name='age' value={registerForm.age} onChange={changeHandler}/>
      <input type='email' name='email' value={registerForm.email} onChange={changeHandler}/>
      <input type='password' name='password' value={registerForm.password} onChange={changeHandler}/>
      <input type='text' name='zipcode' value={registerForm.zipcode} onChange={changeHandler}/>
      <input type='submit' value='Register'/>
    </form>
  </div>
  )
}
export default connect(state => state, {register})(Register)