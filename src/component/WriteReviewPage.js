import React from "react"
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'react-bootstrap/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Navbar from './NavBar'

const WriteReviewPage =()=>{
    return (
        <div>
            <Navbar></Navbar>
            <div style={{display:'flex',flexDirection:"column",margin:"60px",marginLeft:"100px"}}>
                   <h5>Write Review</h5><br></br>
                   <div style={{display:"flex"}}>
                        <h5 style={{color:"#0f1d40",opacity:"30%", fontSize:"14px"}}>Product name</h5>
                        <h5 style={{color:"#000000" ,fontSize:"15px",fontWeight:"600",marginLeft:"12px"}}>iPhone XS</h5>
                   </div>
                   <div style={{display:"flex",marginTop:"7px"}}>
                        <h5 style={{color:"#0f1d40",opacity:"30%", fontSize:"14px"}}> Manufacturer</h5>
                        <h5 style={{color:"#000000" ,fontSize:"15px",fontWeight:"600",marginLeft:"12px"}}>Apple Inc.</h5>
                   </div>
                   <div style={{display:"flex",marginTop:"7px"}}>
                        <h5 style={{color:"#0f1d40",opacity:"30%", fontSize:"14px"}}>Product </h5>
                        <h5 style={{color:"#000000" ,fontSize:"15px",fontWeight:"600",marginLeft:"12px"}}>iPhone XS 128 GB</h5>
                   </div>   <div style={{display:"flex",marginTop:"7px"}}>
                        <h5 style={{color:"#0f1d40",opacity:"30%", fontSize:"14px"}}>Purchased From </h5>
                        <h5 style={{color:"#000000" ,fontSize:"15px",fontWeight:"600",marginLeft:"12px"}}>Amazon</h5>
                   </div>
                   <div style={{display:"flex",marginTop:"7px"}}>
                        <h5 style={{color:"#0f1d40",opacity:"30%", fontSize:"14px"}}> Date Purchased</h5>
                        <h5 style={{color:"#000000" ,fontSize:"15px",fontWeight:"600",marginLeft:"12px"}}>Jan 1, 2021</h5>
                   </div> 


            </div>
            <div class="card card-2" style={{margin:"60px",marginLeft:"100px"}}>
            <div style={{display:'flex',flexDirection:"column", margin:"20px"}}>

<h3 style={{display:"flex",justifyContent:"flex-start", fontSize:"20px",color:"#0f1d40",fontWeight:"600",paddingTop:"26px"}}>
Overall Rating
</h3>
<div style={{display:"flex" ,flexDirection:"row",justifyContent: "space-between"}}>
	 <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly></Rating>
<ExpandLessIcon  style={{backgroundColor:"#1473e6",borderRadius:"50%",fontSize:"33px",color:"white"}}/>
   
   </div>	

<h3 style={{display:"flex",justifyContent:"flex-start", fontSize:"18px",color:"#0f1d40",opacity:"30%",marginTop: "12px"}}>
write Review
</h3>
<TextField id="outlined-search" label="review" type="search" variant="outlined"  style={{width:"100%",height:"70px"}}/>
<div style={{display:'flex',justifyContent:"flex-end"}}>
<Button
       
        style={{width:"30%",backgroundColor:"#1473e6",fontSize:"16px",fontWeight:"600"}}
       >
        Upload Media
      </Button>
</div>
</div>
            </div>

            <div class="card card-2" style={{margin:"60px",marginLeft:"100px"}}>
            <div style={{display:'flex',flexDirection:"column", margin:"20px"}}>

<h3 style={{display:"flex",justifyContent:"flex-start", fontSize:"20px",color:"#0f1d40",fontWeight:"600",paddingTop:"26px"}}>
For Travelling
</h3>
<div style={{display:"flex" ,flexDirection:"row",justifyContent: "space-between"}}>
	 <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly></Rating>
<ExpandLessIcon style={{backgroundColor:"#1473e6",borderRadius:"50%",fontSize:"33px",color:"white"}}/>
   
   </div>	

<h3 style={{display:"flex",justifyContent:"flex-start", fontSize:"18px",color:"#0f1d40",opacity:"30%",marginTop: "12px"}}>
write Review
</h3>
<TextField id="outlined-search" label="review" type="search" variant="outlined"  style={{width:"100%",height:"70px"}}/>
<div style={{display:'flex',justifyContent:"flex-end"}}>
<Button
       
        style={{width:"30%",backgroundColor:"#1473e6",fontSize:"16px",fontWeight:"600"}}
       >
        Upload Media
      </Button>
</div>
</div>
            </div>


	<div style={{display:"flex",flexDirection:"column",marginTop:"5rem",margin:"25px" ,paddingTop:"1rem",margin:"60px",marginLeft:"100px"}}>
           <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{float:'left',}}>
                  <h5 style={{color:"#0f1d40",fontSize:"17px",fontWeight:"700"}}>Battery Life</h5>

			  </div>
			   <ExpandMoreIcon/>
		   </div><br></br><br></br>
		   <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{float:'left',}}>
                  <h5 style={{color:"#0f1d40",fontSize:"17px",fontWeight:"700"}}>Easy to clean</h5>

			  </div>
			   <ExpandMoreIcon />
		   </div> <br></br> <br></br>
		   
		   <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{float:'left',}}>
                  <h5 style={{color:"#0f1d40",fontSize:"17px",fontWeight:"700"}}> For sentitive skin</h5>

			  </div>
			   <ExpandMoreIcon/>
		   </div>  <br></br><br></br>
		   <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{float:'left',}}>
                  <h5 style={{color:"#0f1d40",fontSize:"17px",fontWeight:"700"}}>Maneuverability</h5>

			  </div>
			   <ExpandMoreIcon/>
		   </div>  <br></br><br></br>
		   
		   <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{float:'left',}}>
                  <h5 style={{color:"#0f1d40",fontSize:"17px",fontWeight:"700"}}>Ergonomic</h5>

			  </div>
			   <ExpandMoreIcon/>
		   </div>
           <div style={{textAlign: "center",marginTop:"5rem"}}>
                  <h5 style={{fontSize:"14px"}}>Don't worry! You can always change your product information</h5>
           </div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
              <Button>Save</Button>
              <Button>Publish</Button>
           </div><br></br><br></br>
	</div>
      

        </div>
    )
}

export default WriteReviewPage