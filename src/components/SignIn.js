import React,{useState, useEffect} from 'react';
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Container} from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {login} from '../actions/user'
import {SUCCESS} from '../actions'



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

function SignIn(props) {
  const classes = useStyles();
  const changeHandler = e => {setSignInForm({...signInForm, [e.target.name]: e.target.value})}
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if(props.backend_request_state === SUCCESS)
      props.history.push('/')
  }, [props.backend_request_state, props.history])

  const submitHandler = e => { e.preventDefault(); props.login(signInForm); }

  return (
    <Container component="main" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} onSubmit={submitHandler}>
          <Grid container className={classes.formGrid}>
            <Grid item className={classes.formTextField}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                className={classes.loginField}
                value={signInForm.email}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item className={classes.formTextField}>
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
                value={signInForm.password}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item className={classes.formButton}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitM}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <RouterLink to='/signup'>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default connect(state => state, {login})(SignIn)