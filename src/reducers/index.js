//const baseURL = 'https://friend-finder-dev.herokuapp.com/'
import * as actions from '../actions'


export default (state, action) => {
  switch (action.type){
    case actions.LOGIN:
      return{...state, user: action.payload, loginState: 'LOGGED_IN'}
    case actions.UPDATE_PROFILE:
      return state
    default:
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
        loginState: 'LOGGED_OUT'
      }
  }
}
/*

matches: {
  likes: [],
  dislikes: [],
  matched: [{user_1_id: 0, user_2_id: 0}]
},
conversations: [
  {
    conversationID: -1,
    messages: [
      {
        senderID: -1,
        message: ''
      }
    ]
  }
]
*/