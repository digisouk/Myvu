import React from "react"
import {BrowserRouter,Route} from "react-router-dom";
import Login from "./component/Login";
import SignIn from "./component/SignIn";
import Home from "./component/homepage"
import ReviewPage from "./component/ReviewPage";
import WriteReviewPage from "./component/WriteReviewPage";
import Profile from "./component/Profile";
import Congratulations from "./component/Congrats";
import Product1 from "./component/Product1";
import Product2 from "./component/Product2";
import Product3 from "./component/Product3";



const Router=()=>{
  return (
    <div>
      <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
    <Route path="/signIn"component={SignIn}></Route>
    <Route path="/homepage"component={Home}></Route>
    <Route path="/ReviewPage"component={ReviewPage}></Route>
    <Route path="/WriteReview"component={WriteReviewPage}></Route>
    <Route path="/Profile"component={Profile}></Route>
    <Route path="/Congrats"component={Congratulations}></Route>
    <Route path="/product1"component={Product1}></Route>
    <Route path="/product2"component={Product2}></Route>
    <Route path="/product3"component={Product3}></Route>
   
      </BrowserRouter>
   
    </div>
    

  )
}
export default Router