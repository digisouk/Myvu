import React from 'react';
import Box from '@material-ui/core/Box';
import {  Paper } from '@material-ui/core';
import {NavLink} from "react-router-dom";
import './Mostview.css';
import img from '../component/img/Trimmer.jpeg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Rating from '@material-ui/lab/Rating';



export default function MostviewBox() {
  return (
      
      <Box>
          <Paper style={{padding:'0', boxShadow:"none", fontWeight:'600', fontSize:'20px'}}>
              <Box p={10}>
                <div className="a_mostlink" >
                  Most Viewed
                <a  href="#"> View all <ArrowForwardIosIcon/> </a>
                </div>
                <div className="full_view">
                
              <div className="cont_most">
              <NavLink to="/product1">
              <img className="mainim1" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <div style={{display:"flex", flexDirection:"row"}}>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly/>
                <h6 style={{lineHeight:"1"}}>4.0</h6>
               </div>
               </div>
                </div> 
              <div className="cont_most">
              <NavLink to="/product1">
              <img className="mainim1" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <div style={{display:"flex", flexDirection:"row"}}>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly/>
                <h6 style={{lineHeight:"1"}}>4.0</h6>
               </div>
               </div>
                </div> 
                

              <div className="cont_most">
              <NavLink to="/product1">
              <img className="mainim1" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <div style={{display:"flex", flexDirection:"row"}}>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly/>
                <h6 style={{lineHeight:"1"}}>4.0</h6>
               </div>
               </div>
                </div> 

              <div className="cont_most">
              <NavLink to="/product1">
              <img className="mainim1" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <div style={{display:"flex", flexDirection:"row"}}>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly/>
                <h6 style={{lineHeight:"1"}}>4.0</h6>
               </div>
               </div>
                </div> 

              <div className="cont_most">
              <NavLink to="/product1">
              <img className="mainim1" src={img} alt={img} /> 
              </NavLink> 
              <div className="name_blade">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <div style={{display:"flex", flexDirection:"row"}}>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly/>
                <h6 style={{lineHeight:"1"}}>4.0</h6>
               </div>
               </div>
                </div> 

              <div className="cont_most">
              <NavLink to="/product1">
              <img className="mainim1" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <div style={{display:"flex", flexDirection:"row"}}>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly/>
                <h6 style={{lineHeight:"1"}}>4.0</h6>
               </div>
               </div>
                </div> 
                </div>
              </Box>

          </Paper>
  
</Box>
    
  );
}
