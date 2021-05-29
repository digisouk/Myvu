import React from 'react';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import './Box.css';


export default function SimpleBox() {
  return (
      
      <Box>
          <Paper style={{padding:'0'}}>
              <Box p={3} style={{display:'flex', justifyContent:'space-evenly'}}>
              <div className="cont">
              <div className="ele">
                <div style={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}} className="electronic">
                  <a href='#' className="a_ele">Electronics</a> </div>
              </div>                
             </div> 

             <div className="cont">
              <div className="ele">
                <div style={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}} className="electronic">
                <a href='#' className="a_ele">Electronics</a>
                </div>
              </div>                
             </div> 

             <div className="cont">
              <div className="ele">
                <div style={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}} className="electronic">
                <a href='#' className="a_ele">Electronics</a>
                </div>
              </div>                
             </div> 

             <div className="cont">
              <div className="ele">
                <div style={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}} className="electronic">
                <a href='#' className="a_ele">Electronics</a>
                </div>
              </div>                
             </div> 

             <div className="cont">
              <div className="ele">
                <div style={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}} className="electronic">
                <a href='#' className="a_ele">Electronics</a>
                </div>
              </div>                
             </div> 

             <div className="cont">
              <div className="ele">
                <div  style={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}} className="electronic">
                <a href='#' className="a_ele">Electronics</a>
                </div>
              </div>                
             </div> 

             <div className="cont">
              <div className="ele">
                <div style={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}} className="electronic">
                <a href='#' className="a_ele">Electronics</a>
                </div>
              </div>                
             </div> 

             <div className="cont">
              <div className="ele">
                <div style={{fontFamily:'sans-serif', fontWeight:'600', fontSize:'20px'}} className="electronic">
                <a href='#' className="a_ele">Electronics</a>
                </div>
              </div>                
             </div> 
              </Box>

          </Paper>
  
</Box>
    
  );
}
