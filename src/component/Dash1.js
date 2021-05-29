import React from "react";
import { Card } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";
import CommentIcon from "@material-ui/icons/Comment";
import { Link } from "react-router-dom";

export default function Dash1() {
  return (
    <div>
        <Card.Body>
          <div style={{ marginRight: "54%", marginTop: "2%" }}>
            <h5>search results "Philipe One Blade"</h5>
          </div>

          <div className="c1" style={{ display: "flex", width: "100%", paddingLeft:"150px" }}>
            <div class="card card-4" id="cc" style={{ width: "60%", height:"42vw" }}>
              <img
                src="https://images.beardtrimmer.biz/l-m/virtually-indestructible-haircut-beard-trimmer-15-piece-v-2633741611.jpg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div
              className="c2"
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <div>
                <div className="card card-2" style={{boxShadow:"none"}}>
                  <div className="App1">
                    <div className="one_side_box">
                    <h6>Philips One Blade</h6>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5}readOnly className="one_rate" />
                    <h6 className="p">2480 Global ratings</h6>
                    </div>
                    <div className="ratings">
                      <div className="rating-bar">
                        <h5>
                          5<i className="fas fa-star"></i>
                        </h5>
                        <progress id="file" max="100" value="75"></progress>
                        <h5>75%</h5>
                      </div>

                      <div className="rating-bar">
                        <h5>
                          4<i className="fas fa-star"></i>
                        </h5>
                        <progress id="file" max="100" value="15"></progress>
                        <h5>15%</h5>
                      </div>

                      <div className="rating-bar">
                        <h5>
                          3<i className="fas fa-star"></i>
                        </h5>
                        <progress id="file" max="100" value="6"></progress>
                        <h5>6%</h5>
                      </div>

                      <div className="rating-bar">
                        <h5>
                          2<i className="fas fa-star"></i>
                        </h5>
                        <progress id="file" max="100" value="3"></progress>
                        <h5>3%</h5>
                      </div>

                      <div className="rating-bar">
                        <h5>
                          1<i className="fas fa-star"></i>
                        </h5>
                        <progress id="file" max="100" value="5"></progress>
                        <h5>5%</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             <div>
                <div className="card card-2"  style={{boxShadow:"none"}}>
                <div className="App2">
                <div style={{display:'flex', flexDirection:'column', lineHeight:'2.5'}}>
            <div style={{paddingRight:'360px'}}>By Feature</div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className='p' >For traveling </div>
            <div><Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly className="snd_rate_box" /></div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className='p'>Battery life </div>
            <div><Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly className="snd_rate_box" /></div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className='p' >Easy to clean </div>
            <div><Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly className="snd_rate_box" /></div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className='p' >For sensitive skin </div>
            <div><Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly className="snd_rate_box" /></div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className='p' >Maneuverability</div>
            <div><Rating name="half-rating" defaultValue={2.5} precision={0.5}readOnly className="snd_rate_box" /></div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between'}}> 
            <div className='p' >Ergonomic</div>
            <div><Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly className="snd_rate_box" /></div>
            </div>
            </div>
            </div>
                </div>
                </div>
            </div>
          </div>
        </Card.Body>
      

      <Box p={0} className="box_fotter" pb={5}>
        <Paper>
        <Link to={`/product2`} >
          <Box p={3} className="dash_box" >
            
            <div className="Category_box">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/jkebqfk0/trimmer/q/f/8/yellow-heavy-beauty-kemei-original-imaf7qj5frfztpyn.jpeg?q=70"
                alt="img"
                className="cat_img"
              />
              <div className="name_cat">Category : Electronics</div>
            </div>

            <div className="ava_box">
              <div className="full_ava">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNboCctkPJ4NmAyi7XZgdSFiJ84Byw1HxZRw&usqp=CAU"
                  alt="img"
                  className="ava_img"
                />
                <div className="name_ava">
                  James Charles
                  <div className="time">05: 00pm</div>
                </div>
              </div>
            </div>

            <div className="review_word">
              <div className="firstline_box">
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                <FavoriteIcon className="fav_iconprd1" />
                <span className="fav_icon_numprd1">1,789</span>
                <Link to={`/product2`} >
                <CommentIcon className="cmt_iconprd1" />
                </Link>
              </div>
              <div className="para_nameprd1">Awesome</div>
              <span className="paraprd1">
                Continues to live upto the brilliant quality I first experienced
                15 years back. No other razor comes within a mile of its
                shave-experience. Have been a loyal user every since and see
                noreason why I'd even try something else. <a href="#" className="readmore_linkprd1" >Read more...</a>
              </span>
            </div>
          </Box>
          </Link>
        </Paper>
      </Box>
      
    </div>
  );
}