import * as actions from '../actions'
import axiosAuth from '../tools/axiosAuth'

export default (state, action) => {
  const emptyMatches = {
    likes: [],
    dislikes: []
  }
  switch (action.type){
    case actions.LIKE || actions.DISLIKE:
      axiosAuth().post('https://friend-finder-dev.herokuapp.com/api/users/matches', action.payload)
        .then(res => {
          return res.data
        })
        .catch(console.log)
      return emptyMatches
    default:
      return emptyMatches
  }
}

/*
LIKE.payload = {
  likes: [],
  dislikes: []
}
DISLIKE.payload = {
  likes: [],
  dislikes: []
}
*/