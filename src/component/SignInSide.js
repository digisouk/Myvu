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
      <Grid style={{backgroundColor:'#1473e6'}}item xs={false} sm={4} md={7} className={classes.image} >
        <div><img className="smimg"src={img} alt={img}/></div>
        </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}style={{margin: "110px 120px 0"}}>
          <Typography component="h1" variant="h5" style={{color: "#0468fa", lineHeight:"2"}} className="wrdsg">
         LOGIN
          </Typography>
          <Typography style={{color: "grey",lineHeight:"2"}} className="accn">
          Login to Your Existing Account
          </Typography>
          <Typography style={{color: "grey",lineHeight:"2"}} className="ot">
          Enter OTP
          </Typography>

          <form className={classes.form} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              className="otpbox"
              position="relative"
              size="small"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              className="otpbox"
              size="small"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              className="otpbox"
              size="small"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              className="otpbox"
              size="small"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              className="otpbox"
              size="small"
            />
        
             <TextField 
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              className="otpbox"
              size="small"
            />
            {/*name  */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="email"
              label="First name "
              name="email"
              autoComplete="email"
              autoFocus
              className="fstnm"
            />
           
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="Second name"
              type="name"
              id="name"
              className="sndnm"
            />
            
           <h6>UP on sign up, a verification code will be sent to your email or phone number</h6>
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{backgroundColor:'#1473e6', color:'white'}}
              className={classes.submit}
              onClick={()=>{history.push('/homepage')}}
            >
              LOGIN
            
            </Button>
            
            <Box mt={5}>
                  <h4 style={{color: "grey"}}> Already have an account ?  <br></br> </h4>
                <Link className="sign" to={`/signIn`} >SIGN IN</Link>
            </Box>
          </form>
          
        </div>
      </Grid>
    </Grid>
    
  );
}