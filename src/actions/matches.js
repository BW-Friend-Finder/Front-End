import axios from 'axios'
import axiosAuth from '../tools/axiosAuth'

import * as actions from './index'

export const getMatches = () => dispatch => {
  console.log('get matches')
  axios.get('')
    .then(res => {
      dispatch({
        type: actions.UPDATE_MATCHES,
        payload: res.data
      })
    })
    .catch(console.log)
}

export const like = othersID => dispatch => {
  console.log('like')
  axios.post('', [{requestee_id: othersID}])
    .then(res => {
      getMatches()(dispatch)
    })
    .catch(console.log)
}

//Dislike will be done locally
export const dislike = othersID => dispatch => {
  console.log('dislike')
  axios.post('', [{requestee_id: othersID}])
    .then(res => {
      getMatches()(dispatch)
    })
    .catch(console.log)
}