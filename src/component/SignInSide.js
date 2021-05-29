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
 
  form: {
    width: '100%', 
   
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
      <Grid style={{backgroundColor:'#1473e6'}}item xs={false} sm={6} md={6} className={classes.image} >
        <div className="image_back"><img className="smimg"src={img} alt={img}/></div>
        </Grid>
        {/*login */}
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
        <div className="paper-login">
          <div className="login_word">
          <Typography component="h1" variant="h5" style={{color: "#0468fa", lineHeight:"2"}}>
         LOGIN 
          </Typography>
          <Typography style={{color: "grey",lineHeight:"2"}}>
          Login to Your Existing Account
          </Typography>
          <Typography style={{color: "grey",lineHeight:"2"}}>
          Enter OTP
          </Typography>
          </div>
          <form className={classes.form} noValidate>
            <div className="otp_box-container">
          <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              size="small"
              color="#0468fa"
              className="otp-box"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              size="small"
              className="otp-box"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              size="small"
              className="otp-box"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              size="small"
              className="otp-box"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              size="small"
              className="otp-box"
            />
        
             <TextField
              variant="outlined"
              margin="normal"
              required
              name="otp"
              type="name"
              size="small"
              className="otp-box"
            />
            </div>
            {/*name  */}
            <div className="name_form-login">
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="name"
              label="First name "
              name="name"
              type="name"
              className="name-one"
            />
           
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="Second name"
              type="name"
              id="name"
              className="name-two"
            />
            </div>
           <h6>upon sign up, a verification code will be sent to your email or phone number</h6>
           
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
            
            <Box mt={5} className="fotter_login">
                  <div className="already-words" style={{color: "grey"}}> Already have an account ?  </div>
                <Link className="sign" to={`/signIn`} >SIGN IN</Link>
            </Box>
          </form>
          
        </div>
      </Grid>
    </Grid>
    
  );
}