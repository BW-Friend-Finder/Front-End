import React,{useState, useEffect} from 'react';
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Container} from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {register} from '../actions/user'
import {SUCCESS, FAILURE} from '../actions'


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formGrid: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formTextField: {
    width: '30%',
    [`& fieldset`]: {
      borderRadius: 50
    },
  },
  formButton: {
    width: '30%',
    borderRadius: 50,
    [`& fieldset`]: {
      borderRadius: 50
    },
  },
  submitM: {
    borderRadius: 50
  }
}));

function SignUp(props) {
  const classes = useStyles();
  const changeHandler = e => { setSignUpForm({...signUpForm, [e.target.name]: e.target.value}) }
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    age: 0,
    zipcode: ''
  })
  useEffect(() => {
    if(props.backend_request_state === SUCCESS){
      props.history.push('/')
    }else if(props.backend_request_state === FAILURE){
      console.log('Something is wrong, register request threw an error')
    }
  }, [props.backend_request_state, props.history])
  const submitHandler = e => { e.preventDefault(); props.register(signUpForm); }
  return (
    <Container component="main" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            halfWidth
            name="first_name"
            label="First Name"
            type="text"
            id="first_name"
            autoComplete="first-name"
            className={classes.loginField}
            value={signUpForm.first_name}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            halfWidth
            name="last_name"
            label="Last Name"
            type="text"
            id="last_name"
            autoComplete="last-name"
            className={classes.loginField}
            value={signUpForm.last_name}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
            className={classes.loginField}
            value={signUpForm.email}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className={classes.loginField}
            value={signUpForm.password}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="age"
            label="Age"
            type="number"
            id="age"
            autoComplete="age"
            className={classes.loginField}
            value={signUpForm.age}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="zipcode"
            label="Zipcode"
            type="number"
            id="zipcode"
            autoComplete="zipcode"
            className={classes.loginField}
            value={signUpForm.zipcode}
            onChange={changeHandler}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitM}
            >
              Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to='/signin'>
                <Link href="#" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default connect(state => state, {register})(SignUp)