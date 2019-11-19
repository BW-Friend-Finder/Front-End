import React from 'react'; 
import FormUserDetails from './component/FormUserDetails'; 
import UserForm from './component/UserForm';
import './App.css';
import SignIn from './component/SignIn';

function App() {
  return (
    <div className="App">
        <SignIn />  
        <FormUserDetails/>
        <UserForm /> 
    </div>
  );
}

export default App;
