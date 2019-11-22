import axios from 'axios'
import axiosAuth from '../tools/axiosAuth'

export const UPDATE_ALL_HOBBIES = 'UPDATE_ALL_HOBBIES'
const get_all_hobbies = () => dispatch => {
  console.log('get all hobbies')
  axios.get('https://friend-finder-dev.herokuapp.com/api/hobbies/all')
    .then(res => {
      dispatch({
        type: UPDATE_ALL_HOBBIES,
        payload: res.data.interests
      })
      console.log('get all', res)
    })
}

export const UPDATE_USER_HOBBIES = 'UPDATE_USER_HOBBIES'
const get_user_hobbies = () => dispatch => {
  console.log('get user hobbies')
  axiosAuth().get('https://friend-finder-dev.herokuapp.com/api/hobbies/user')
    .then(res => {
      dispatch({
        type: UPDATE_USER_HOBBIES,
        payload: res.data
      })
      console.log('get user', res)
    })
    .catch(e=>{console.log('HERE', e)})
}

const add_hobbies_to_user = hobbies => dispatch => {
  console.log('add hobbies')
  axiosAuth().post('https://friend-finder-dev.herokuapp.com/api/hobbies/user', hobbies.map(hobby=> {return {hobbies_id: hobby}}))
    .then(res => {
      get_user_hobbies()(dispatch)
      console.log('add user', res)
    })
    .catch(console.log)
}

const remove_hobbies_from_user = hobbies => dispatch => {
  console.log('remove hobbies')
  console.log(hobbies.map(hobby=> {return {hobbies_id: hobby}}))
  axiosAuth().delete('https://friend-finder-dev.herokuapp.com/api/hobbies/user', hobbies.map(hobby=> {return {hobbies_id: hobby}}))
    .then(res => {
      get_user_hobbies()(dispatch)
      console.log('remove user', res)
    })
    .catch(console.log)
}

export {get_all_hobbies, get_user_hobbies, add_hobbies_to_user, remove_hobbies_from_user}