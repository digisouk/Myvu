import React from 'react';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import './Toprates.css';
import {NavLink} from "react-router-dom";
import img from '../component/img/Trimmer.jpeg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Rating from '@material-ui/lab/Rating';


export default function ToprateBox() {
  return (
      
      <Box >
          <Paper style={{padding:'0', boxShadow:"none",fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}}>
              <Box p={10}>
                  <div style={{position:"relative", right:"48%"}}>
                  Top Rated
                  </div>
                <a className="a_toplink" href="#"> View all <ArrowForwardIosIcon/> </a>
                <div className="full_view">
              <div className="cont_top">
              <NavLink to="/product1">
              <img className="mainim2" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade_top">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               </div>
                </div> 

              <div className="cont_top">
              <NavLink to="/product1">
              <img className="mainim2" src={img} alt={img} /> 
              </NavLink> 
              <div className="name_blade_top">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               </div>
                </div> 

              <div className="cont_top">
              <NavLink to="/product1">
              <img className="mainim2" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade_top">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               </div>
                </div> 

              <div className="cont_top">
              <NavLink to="/product1">
              <img className="mainim2" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade_top">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               </div>
                </div> 

              <div className="cont_top">
              <NavLink to="/product1">
              <img className="mainim2" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade_top">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               </div>
                </div> 

              <div className="cont_top">
              <NavLink to="/product1">
              <img className="mainim2" src={img} alt={img} /> 
              </NavLink>
              <div className="name_blade_top">
               <div>Philips One Blade</div>   
               <div className="james">James Charles</div>
               <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               </div>
                </div> 
                </div>
              </Box>

          </Paper>
  
</Box>
    
  );
}
