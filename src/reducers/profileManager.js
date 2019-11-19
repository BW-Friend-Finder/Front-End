import * as actions from '../actions'
import axios from 'axios'
import axiosAuth from '../tools/axiosAuth'

const profileManager = (state, action) => {
  const emptyUser = {
    id: -1,
    email: '',
    first_name: '',
    last_name: '',
    age: -1,
    gender: '',
    city: '',
    state: '',
    zipcode: ''
  }
  switch (action.type){
    case actions.REGISTER:
      axios.post('https://friend-finder-dev.herokuapp.com/api/users/register', action.payload)
        .then(res => {
          console.log(profileManager(state, {
            type: actions.LOGIN,
            payload:{
              email: res.data.email,
              password: action.payload.password
            }
          }))
        })
        .catch(console.log)
      break;
    case actions.LOGIN:
        axios.post('https://friend-finder-dev.herokuapp.com/api/users/signin', action.payload)
          .then(res => {
            localStorage.setItem('token', res.data.token);
            console.log(res.data.user_details)
            return res.data.user_details
          })
          .catch(console.log)
        break;
    case actions.UPDATE_PROFILE:
        axiosAuth().post(`https://friend-finder-dev.herokuapp.com/api/users/${action.payload.id}`, action.payload)
          .then(res => {
            console.log(res);
            return res.data
          })
          .catch(console.log)
          return emptyUser
    default:
      return emptyUser
  }
}
export default profileManager
/*
Register.payload = {
  id: -1,
  email: '',
  first_name: '',
  last_name: '',
  age: -1,
  gender: '',
  city: '',
  state: '',
  zipcode: ''
}
Login.payload = {
  email: '',
  password: ''
}
Update_Profile.payload = {
  email: '',
  first_name: '',
  last_name: '',
  age: -1,
  gender: '',
  city: '',
  state: '',
  zipcode: ''
}

*/