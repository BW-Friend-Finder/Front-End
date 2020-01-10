import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {get_all_hobbies, get_user_hobbies, add_hobbies_to_user, remove_hobbies_from_user} from '../actions/hobbies'

const RemoveMe = props => {
  return(<button style={props.style} onClick={()=>{props.remove(props.hobby.hobbies_id)}}>{props.hobby.hobby_name}</button>)
}
const AddMe = props => {
  return(<button style={props.style} onClick={()=>{props.add(props.hobby.hobbies_id)}}>{props.hobby.hobby_name}</button>)
}
const Interest = props => {
  const [changes, setChanges] = useState({toAdd:[], toRemove:[]})
  const [combined, setCombined] = useState([])
  
  useEffect(() => {
    props.get_all_hobbies();
    props.get_user_hobbies();
  }, [])
  useEffect(() => {
    const userFormatted = props.user.map(hobby => hobby.hobbies_id)
    setCombined(userFormatted.concat(changes.toAdd).filter(id => !changes.toRemove.includes(id)))
  }, [changes, props.user])
  useEffect(() => {
    const userFormatted = props.user.map(hobby => hobby.hobbies_id)
    setChanges({...changes, toAdd: changes.toAdd.filter(hobby => !userFormatted.includes(hobby))});
  }, [props.user])
  const add = id => {
    console.log('called add')
    setChanges(changes.toRemove.includes(id)?
    {...changes, toRemove: changes.toRemove.filter(removeId => removeId !== id)}:
    {...changes, toAdd: [...changes.toAdd, id]})
  }
  const remove = id => {
    console.log('called remove')
    setChanges(changes.toAdd.includes(id)?
    {...changes, toAdd: changes.toAdd.splice(changes.toAdd.indexOf(id))}:
    {...changes, toRemove: [...changes.toRemove, id]})
  }

  return(
    <div className='Interest'>
      <p>Hobbies remove endpoint isn't working</p>
      {
        props.all.map(hobby => 
          combined.includes(hobby.hobbies_id) ? 
          <RemoveMe style={{color: 'blue'}} key={hobby.hobbies_id} hobby={hobby} remove={remove}/>: 
          <AddMe style={{color: 'red'}} key={hobby.hobbies_id} hobby={hobby} add={add}/>
        )
      }
      <button onClick={()=>{props.get_all_hobbies()}}>All</button>
      <button onClick={()=>{props.get_user_hobbies()}}>User</button>
      <button onClick={()=>{props.add_hobbies_to_user(changes.toAdd)}}>Add</button>
      <button onClick={()=>{props.remove_hobbies_from_user(changes.toRemove)}}>Remove</button>
    </div>
  )
}
export default connect(state=> state.hobbies, {get_all_hobbies, get_user_hobbies, add_hobbies_to_user, remove_hobbies_from_user})(Interest)