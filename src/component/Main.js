import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import img from '../component/img/con img.png';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    backgroundColor:grey,
  },
  paper: {
    maxWidth: 550,
    maxHeight:450,
    margin: `${theme.spacing(0.3)}px auto`,
    padding: theme.spacing(1),
    display: 'grid',
    marginTop:'100px',
    lineHeight:'20px',
  },
  MuiTypographydisplayBlock:{
    fontFamily:"CircularStdBold-Regular",
  },
}));



export default function AutGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/*img */}
      <img 
      className="conimg"
      style={{width: "30%", position:"relative", left:"190px"}}
     src={img} alt={img}/>

      <h5 style={{margin:'5px', fontFamily:"CircularStdBold-Regular", fontSize:"smaller"}}>Congratulations on your first review !</h5>
      <h5 style={{color: "#1473e6", margin:'5px', fontFamily:"CircularStdBold-Regular",fontSize:"smaller"}}>What's Next..</h5>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
         <List>
           <ListItem style={{display: "grid", fontFamily:"CircularStdBold-Regular"}}>
          <ListItemText> 1. One of our moderator will go through your review content to ensure quality of the content.
If moderator needs any additional information,he/she will reach out to you on your preferred
mode of communication within 24 hours.</ListItemText>
          <ListItemText>2. If moderator needs any additional information,he/she will reach out to you on your preferred
mode of communication within 24 hours.</ListItemText>
          <ListItemText>3. Once your review is approved, it will be published instantly and will available to anyone
on our platform.</ListItemText>
          <ListItemText>4. To increase the number of views we recommend you to share and invite your friend to view it.</ListItemText>
          
          </ListItem>
          </List>
          {/*button  */}
          <Button
              type="submit"
              variant="contained"
              className="submit_ex"
              style={{position: "relative", right:"23%", width:"130px",marginBottom:"20px",fontFamily:"CircularStdBold-Regular" }}
            >
              Exit
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit_myrev"
              style={{position: "relative", left:"23%", marginBottom:"20px",fontFamily:"CircularStdBold-Regular", backgroundColor:"#1473e6"}}
            >
              My Reviews
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
