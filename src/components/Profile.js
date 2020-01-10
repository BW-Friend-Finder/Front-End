import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {update_profile, delete_profile, logout} from '../actions/user'

const Profile = props => {
  const [profileForm, setProfileForm] = useState(props.user)
  const changeHandler = e => {
    setProfileForm({
      ...profileForm,
      [e.target.name]: e.target.value
    })
    
  }
  useEffect(() => {
    setProfileForm(props.user)
  }, [props.user])
  const submitHandler = e => {
    e.preventDefault();
    props.update_profile(profileForm);
  }
  return(<div className='Update Profile'>
    <h1>Update Profile</h1>
    <form onSubmit={submitHandler}>
      <input type='text' name='first_name' value={profileForm.first_name} onChange={changeHandler}/>
      <input type='text' name='last_name' value={profileForm.last_name} onChange={changeHandler}/>
      <input type='number' name='age' value={profileForm.age} onChange={changeHandler}/>
      <input type='email' name='email' value={profileForm.email} onChange={changeHandler}/>
      <input type='password' name='password' value={profileForm.password} onChange={changeHandler}/>
      <input type='text' name='gender' value={profileForm.gender || ''} onChange={changeHandler}/>
      <input type='text' name='city' value={profileForm.city || ''} onChange={changeHandler}/>
      <input type='text' name='state' value={profileForm.state || ''} onChange={changeHandler}/>
      <input type='text' name='zipcode' value={profileForm.zipcode} onChange={changeHandler}/>
      <input type='submit' value='Update'/>
    </form>
    <button onClick={()=>{props.delete_profile()}}>Delete Profile</button>
    <button onClick={()=>{props.logout()}}>Logout</button>
  </div>
  )
}
export default connect(state => state, {update_profile, delete_profile, logout})(Profile)