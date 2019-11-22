import axios from 'axios'
import axiosAuth from '../tools/axiosAuth'

import * as actions from './index'

export const get_potential_matches = () => dispatch => {
  console.log('get potential matches')
  axiosAuth().get('https://friend-finder-dev.herokuapp.com/api/users/queue')
    .then(res=>{
      dispatch({
        type: actions.UPDATE_POTENTIAL_MATCHES,
        payload: res.data
      })
      console.log('get potential',res);
    })
    .catch(console.log)
}
export const get_other_user = () => dispatch => {
  console.log('get other user')
  axiosAuth().get('https://friend-finder-dev.herokuapp.com/api/users/queue')
    .then(res=>{
      dispatch({
        type: actions.UPDATE_POTENTIAL_MATCHES,
        payload: res.data
      })
      console.log('get potential',res);
    })
    .catch(console.log)
}

export const getMatches = () => dispatch => {
  console.log('get matches')
  axiosAuth().get('https://friend-finder-dev.herokuapp.com/api/match/user')
    .then(res => {
      dispatch({
        type: actions.UPDATE_MATCHES,
        payload: res.data
      })
      console.log(res)
    })
    .catch(console.log)
}

export const like = othersID => dispatch => {
  console.log('like', othersID)
  axiosAuth().post('https://friend-finder-dev.herokuapp.com/api/match', othersID)
    .then(res => {
      getMatches()(dispatch)
      console.log('like',res)
    })
    .catch(console.log)
  console.log('requester')
  axiosAuth().get('https://friend-finder-dev.herokuapp.com/api/match/requester')
    .then(console.log)
  console.log('requestee')
  axiosAuth().get('https://friend-finder-dev.herokuapp.com/api/match/requestee')
    .then(console.log)
}

//Dislike will be done locally
export const dislike = othersID => dispatch => {
  console.log('dislike', othersID)
  axios.post('', [{requestee_id: othersID}])
    .then(res => {
      getMatches()(dispatch)
    })
    .catch(console.log)
}