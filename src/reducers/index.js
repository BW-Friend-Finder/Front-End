//const baseURL = 'https://friend-finder-dev.herokuapp.com/'
import * as actions from '../actions'

export default (state, action) => {
  switch (action.type){
    case actions.UPDATE_REQUEST_STATE:
      return{...state, backend_request_state: action.payload}
    case actions.LOGIN || actions.UPDATE_PROFILE:
      return{...state, user: action.payload}
    case actions.UPDATE_ALL_HOBBIES:
      return{...state, hobbies:{...state.hobbies, all: action.payload}}
    case actions.UPDATE_USER_HOBBIES:
      return{...state, hobbies:{...state.hobbies, user: action.payload}}
    case actions.LOGOUT:
      return {
        user: {
          id: -1,
          email: '',
          first_name: '',
          last_name: '',
          age: -1,
          gender: '',
          city: '',
          state: '',
          zipcode: ''
        },
        hobbies:{
          all: [],
          user: []
        },
        backend_request_state: state.backend_request_state
      }
    default:
      console.log('default case')
      return state || {
        user: {
          id: -1,
          email: '',
          first_name: '',
          last_name: '',
          age: -1,
          gender: '',
          city: '',
          state: '',
          zipcode: ''
        },
        hobbies:{
          all: [],
          user: []
        },
        backend_request_state: actions.PENDING_NEW_REQUEST
      }
  }
}