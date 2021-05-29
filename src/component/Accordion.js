import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from "@material-ui/lab/Rating";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import imageacc from '../component/img/Trimmer.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    paddingTop:'50px',
    paddingLeft: '190px'

  },
  heading: {
    display:'flex',
    flexDirection:'column',
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className="accord">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <div className={classes.heading}>
          <Typography >For traveling</Typography>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
          </div>
        </AccordionSummary>
        <AccordionDetails>
            
          <Typography style={{color:"gray", paddingRight:"89%"}}>
          Write your review
          </Typography>
          
          <TextField
          id="outlined-full-width"
          label="review"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

<Button
       
       style={{width:"100%",backgroundColor:"#1473e6",fontSize:"16px",fontWeight:"600",color:"white"}}
      >
       Upload Media +
     </Button>
     <div style={{display:"flex", padding:"10px"}}>
         <img src={imageacc} alt={imageacc} style={{width:"5vw", borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
     </div>
    
          
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <div className={classes.heading}>
          <Typography >Battery life</Typography>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
          </div>
        </AccordionSummary>
        <AccordionDetails>
            
          <Typography style={{color:"gray", paddingRight:"89%"}}>
          Write your review
          </Typography>
          
          <TextField
          id="outlined-full-width"
          label="review"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

<Button
       
       style={{width:"100%",backgroundColor:"#1473e6",fontSize:"16px",fontWeight:"600",color:"white"}}
      >
       Upload Media +
     </Button>
     <div style={{display:"flex", padding:"10px"}}>
         <img src={imageacc} alt={imageacc} style={{width:"5vw", borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
     </div>
    
          
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <div className={classes.heading}>
          <Typography >Easy to clean</Typography>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly/>
          </div>
        </AccordionSummary>
        <AccordionDetails>
            
          <Typography style={{color:"gray", paddingRight:"89%"}}>
          Write your review
          </Typography>
          
          <TextField
          id="outlined-full-width"
          label="review"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

<Button
       
       style={{width:"100%",backgroundColor:"#1473e6",fontSize:"16px",fontWeight:"600",color:"white"}}
      >
       Upload Media +
     </Button>
     <div style={{display:"flex", padding:"10px"}}>
         <img src={imageacc} alt={imageacc} style={{width:"5vw", borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
     </div>
    
          
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <div className={classes.heading}>
          <Typography >For sentitive skin</Typography>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
          </div>
        </AccordionSummary>
        <AccordionDetails>
            
          <Typography style={{color:"gray", paddingRight:"89%"}}>
          Write your review
          </Typography>
          
          <TextField
          id="outlined-full-width"
          label="review"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

<Button
       
       style={{width:"100%",backgroundColor:"#1473e6",fontSize:"16px",fontWeight:"600",color:"white"}}
      >
       Upload Media +
     </Button>
     <div style={{display:"flex", padding:"10px"}}>
         <img src={imageacc} alt={imageacc} style={{width:"5vw", borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
     </div>
    
          
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <div className={classes.heading}>
          <Typography >Maneuverability</Typography>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
          </div>
        </AccordionSummary>
        <AccordionDetails>
            
          <Typography style={{color:"gray", paddingRight:"89%"}}>
          Write your review
          </Typography>
          
          <TextField
          id="outlined-full-width"
          label="review"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

<Button
       
       style={{width:"100%",backgroundColor:"#1473e6",fontSize:"16px",fontWeight:"600",color:"white"}}
      >
       Upload Media +
     </Button>
     <div style={{display:"flex", padding:"10px"}}>
         <img src={imageacc} alt={imageacc} style={{width:"5vw", borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
     </div>
    
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <div className={classes.heading}>
          <Typography >Ergonomic</Typography>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/>
          </div>
        </AccordionSummary>
        <AccordionDetails>
            
          <Typography style={{color:"gray", paddingRight:"89%"}}>
          Write your review
          </Typography>
          
          <TextField
          id="outlined-full-width"
          label="review"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

<Button
       
       style={{width:"100%",backgroundColor:"#1473e6",fontSize:"16px",fontWeight:"600",color:"white"}}
      >
       Upload Media +
     </Button>
     <div style={{display:"flex", padding:"10px"}}>
         <img src={imageacc} alt={imageacc} style={{width:"5vw", borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
         <img src={imageacc} alt={imageacc} style={{width:"5vw",  borderRadius:"5px"}}/>
     </div>
    
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
