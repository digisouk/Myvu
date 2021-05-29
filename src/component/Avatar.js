import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from '../component/img/mario.png';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import gldimg from '../component/img/goldstar.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    margin: '0px'
    
  },
  paper: {
    maxWidth: 320,
    maxHeight:800,
    marginLeft:'130px',
    marginBottom:'50px',
    marginTop:'23px',
    marginRight:'0',
    padding: theme.spacing(1),
    display: 'grid',
    position:'relative',
    lineHeight:'0'
  },
  clr:{
    color: "gray"
  }
}));



export default function AvatarGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/*img */}
      <img 
      className="img"
    style={{width: "35%", position:"relative", left:"100px", borderRadius:'50%'}}
      src={img} alt={img} /> 
      <PhotoCameraIcon   style={{color:'blue', position:'relative', left:"56%", cursor:'pointer'}} />
      
        <Grid container wrap="nowrap" spacing={0}>
          <Grid item xs>
          <h5>James Charles</h5>
      <h6 style={{color: "gray"}}>ABC Aviation - Electrical Engineering</h6>
      <img style={{width: "35%"}}
       src={gldimg} alt={gldimg}/>
      <h5>Member Since July 4, 2020</h5>
      <LinkedInIcon style={{color:'blue'}}/>
         </Grid>
        </Grid>
      </Paper>
{/*review */}
<Paper className={classes.paper}>
<Grid container wrap="nowrap" spacing={5}>
    <Grid item xs>
        <div style={{display:'flex', flexDirection:'column', lineHeight:'1.6'}}>
            <div style={{paddingRight:'230px'}}>Reviews</div>
            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className={classes.clr}>Cellphones & Electronics </div>
            <div>30</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className={classes.clr} >Cellphone Accessories </div>
            <div>25</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className={classes.clr} >Automotive </div>
            <div>11</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className={classes.clr} >Computers </div>
            <div>08</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className={classes.clr} >Home Appliances </div>
            <div>6</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className={classes.clr} >Useful Reviews </div>
            <div>6</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className={classes.clr} >Viewed</div>
            <div>1200</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className={classes.clr} >Viewed </div>
            <div>11</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div  className={classes.clr}>With Videos </div>
            <div>8</div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className={classes.clr} >Question Answered </div>
            <div>7</div>
            </div>
        </div>
   </Grid>
  </Grid>
</Paper>
{/*prj */}

</div>
  );
}
