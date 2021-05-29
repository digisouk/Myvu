import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import img from '../component/img/mainimg.png';
import {useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    height: '93vh',
  },
  image: {
    backgroundImage: `url(${'https://images.pexels.com/photos/3884186/pexels-photo-3884186.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} >
        <div><img className="smimg" src={img} alt={img}/></div>
        </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}style={{margin: "120px 120px 0"}}>
          <Typography component="h1" variant="h5" style={{color: "#0468fa"}} className="wrdsgl">
           SIGN UP
          </Typography>
          <Typography style={{color: "grey", lineHeight:"2"}} className="accnm">
            Creat New Account
          </Typography>

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email ID / Mobile Number"
              name="email"
              autoComplete="email"
              autoFocus
            />
              <Button
              type="disable"
              fullWidth
              variant="contained"
              color="gray"
              className={classes.submit}
            >
              AGRKI
            </Button>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Enter the above code"
              type="name"
              id="name"
            />
           <h5>UP on sign up, a verification code will be sent to your email or phone number</h5>
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              style={{backgroundColor:'#1473e6', color:'white'}}
            >
              Sign up
            </Button>
            
            <Box mt={5}>
                  <h4 style={{color: "grey"}}> Already have an account ?   </h4>
                  <Link className="sign" to={`/`} >LOGIN</Link>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    
  );
}