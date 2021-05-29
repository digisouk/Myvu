import React from "react";
import { Paper } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";
import CommentIcon from "@material-ui/icons/Comment";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Dash2() {
  return (
    <div>
      <div style={{ marginRight: "51%", marginTop: "2%" }}>
            <h5>search results "Philipe One Blade"</h5>
            </div>
        <div className="btn_dash">
          <div className="view_btn">
            <Button
              className="fsr_btn_view"
              variant="contained"
              color="#1473e6"
              style={{ backgroundColor: "#1473e6", color: "white" }}
            >
              Most Viewed
            </Button>
          </div>
          <div className="btn_rate">
            <Button variant="contained">Top rated</Button>
          </div>
          <div>
            <Button variant="contained">Recent</Button>
          </div>
        </div>
     
        <Box p={5} pt={1} pb={0.5} className="dash_box-prd2">
        <Paper>
        <Link to={`/product3`} >
          <Box className="dash_box" p={1}>
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
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/>
                <FavoriteIcon className="fav_iconprd2" />
                <span className="fav_icon_numprd2">1,789</span>
                <CommentIcon className="cmt_iconprd2" />
              </div>
              <div className="para_nameprd1">Awesome</div>
              <span className="paraprd1">
                Continues to live upto the brilliant quality I first experienced
                15 years back. No other razor comes within a mile of its
                shave-experience. Have been a loyal user every since and see
                noreason why I'd even try something else. <a href="#" className="readmore_link" >Read more...</a>
              </span>
            </div>
          </Box>
          </Link>
        </Paper>
      </Box>

      <Box p={5} pt={1} pb={0.5} className="dash_box-prd2">
        <Paper>
          <Box className="secnd_dash_box" p={10}></Box>
        </Paper>
      </Box>

      <Box p={5} pt={1} pb={0.5} className="dash_box-prd2">
        <Paper>
          <Box className="dash_box" p={1}>
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
                <FavoriteIcon className="fav_iconprd2" />
                <span className="fav_icon_numprd2">1,789</span>
                <CommentIcon className="cmt_iconprd2" />
              </div>
              <div className="para_nameprd1">Awesome</div>
              <span className="paraprd1">
                Continues to live upto the brilliant quality I first experienced
                15 years back. No other razor comes within a mile of its
                shave-experience. Have been a loyal user every since and see
                noreason why I'd even try something else. <a href="#" className="readmore_link" >Read more...</a>
              </span>
            </div>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}