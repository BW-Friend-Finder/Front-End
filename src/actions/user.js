import axios from 'axios'
import axiosAuth from '../tools/axiosAuth'

import * as actions from './index'

export const login = loginInfo => dispatch => {
  console.log('login')
  dispatch({
    type: actions.UPDATE_REQUEST_STATE,
    payload: actions.WAITING
  })
  axios.post('https://friend-finder-dev.herokuapp.com/api/users/signin', loginInfo)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.SUCCESS
      })
      dispatch({
        type: actions.LOGIN,
        payload: res.data.user_details
      });
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.PENDING_NEW_REQUEST
      })
    })
    .catch(error=>{
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.FAILURE
      })
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.PENDING_NEW_REQUEST
      })
      console.log(error)
    })
}

export const logout = () => dispatch => {
  console.log('logout')
  localStorage.removeItem('token')
  dispatch({
    type:actions.LOGOUT
  })
}

export const register = registerInfo => dispatch => {
  console.log('register')
  dispatch({
    type: actions.UPDATE_REQUEST_STATE,
    payload: actions.WAITING
  })
  axios.post('https://friend-finder-dev.herokuapp.com/api/users/register', registerInfo)
    .then(res => {
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.SUCCESS
      })
      login({
        email: registerInfo.email,
        password: registerInfo.password
      })(dispatch)
    })
    .catch(console.log)
}

export const update_profile = updatedProfile => dispatch => {
  console.log('update')
  delete updatedProfile['id']
  
  dispatch({
    type: actions.UPDATE_REQUEST_STATE,
    payload: actions.WAITING
  })
  const body = {...updatedProfile}
  console.log(body)
  axiosAuth().put('https://friend-finder-dev.herokuapp.com/api/users', body)
    .then(res => {
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.SUCCESS
      })
      dispatch({
        type: actions.UPDATE_PROFILE,
        payload: res.data.updatedUser
      })
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.PENDING_NEW_REQUEST
      })
      console.log(res)
    })
    .catch(error=>{
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.FAILURE
      })
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.PENDING_NEW_REQUEST
      })
      console.log(error)
    })
}

export const delete_profile = () => dispatch => {
  console.log('delete')
  dispatch({
    type: actions.UPDATE_REQUEST_STATE,
    payload: actions.WAITING
  })
  axiosAuth().delete('https://friend-finder-dev.herokuapp.com/api/users')
    .then(res => {
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.SUCCESS
      })
      logout()(dispatch)
      dispatch({
        type: actions.UPDATE_REQUEST_STATE,
        payload: actions.PENDING_NEW_REQUEST
      })
      console.log('deleted', res)
    })
    .catch(console.log)
}