import React, { Component } from 'react'; 
import MuithemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import AppBar from 'material-ui/AppBar'; 
import TextField from 'material-ui/TextField'; 
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component { 
    continue = e => { 
        e.preventDefault(); 
        this.props.nextStep();
    }
    render() { 
        const{ values, handleChange } = this.props;  
        return (
            <MuithemeProvider>  

                <React.Fragment>
<AppBar title="Enter User Details"/> 
<TextField
hintText="Enter Your First Name"
floatingLabelText="First Name"
onChange={handleChange('firstName')}
defaultValue={values.firstName}

/> 
<br/> 
<TextField
hintText="Enter Your Last Name"
floatingLabelText="Last Name"
onChange={handleChange('lastName')}
defaultValue={values.lastName}

/>
<br/> 
<TextField
hintText="Enter Your Email"
floatingLabelText="email"
onChange={handleChange('email')}
defaultValue={values.email}

/> 
<br/> 
<TextField
hintText="Enter Your Password"
floatingLabelText="Password"
onChange={handleChange('password')}
defaultValue={values.password}

/> 
<br/> 
<TextField
hintText="Enter Your City"
floatingLabelText="City"
onChange={handleChange('city')}
defaultValue={values.city}

/> 
<br/> 
<TextField
hintText="Enter Your State"
floatingLabelText="State"
onChange={handleChange('state')}
defaultValue={values.state}

/> 
<br/> 
<TextField
hintText="Enter Your Zip"
floatingLabelText="Zip"
onChange={handleChange('zipCode')}
defaultValue={values.zipCode}

/>  
<br/>  
<TextField
hintText="Enter Your Age"
floatingLabelText="Age"
onChange={handleChange('age')}
defaultValue={values.age}

/>  
<br/>
<TextField
hintText="Enter Your Gender"
floatingLabelText="Gender"
onChange={handleChange('gender')}
defaultValue={values.gender}

/>   
<br/> 
<TextField
hintText="Enter Your bio"
floatingLabelText="bio"
onChange={handleChange('bio')}
defaultValue={values.bio}
/>  
<br/> 
<RaisedButton
label="Continue"
primary={true} 
stle={styles.button}
onClick={this.continue}
/>

                </React.Fragment>
            </MuithemeProvider>
        );
    } }

    const styles = { 
        button: { 
            margin:15
        }

};
export default FormUserDetails;
