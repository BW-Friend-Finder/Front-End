import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {get_potential_matches, like, dislike} from '../actions/matches'

const Card = props => {
  return(
    <div>
      <p>{props.user.first_name}</p>
      <button onClick={()=>{props.like(props.user.user_id)}}>Like</button>
      <button onClick={()=>{props.dislike(props.user.user_id)}}>Dislike</button>
    </div>
  )
}

const Matches = props => {
  const [potentialMatches, setPotentialMatches] = useState(props.potential)
  const [liked, setLiked] = useState([])
  useEffect(()=>{
    props.get_potential_matches();
  },[])
  useEffect(() => {
    setPotentialMatches(props.potential)
  }, [props.potential])

  const dislike = e=>{
    console.log(`dislike inside Component ${e}`)
  }
  const like = id => {
    setLiked([...liked, {requestee_id: id}])
  }
  return(
  <div className='Match'>
    {
      potentialMatches.map(user => <Card key={user.id} user={user} like={like} dislike={dislike}/>)
    }
  </div>
  )
}
export default connect(state=>state.matches, {get_potential_matches, like, dislike})(Matches)