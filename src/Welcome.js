import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Allmodal from "./Modals/Allmodal";
import './Design.css'

import { FaArrowRight } from "react-icons/fa";



function Welcome() {
const[sidebar,setSidebar]=useState(true)
const[rightpart,setRightpart]=useState(true)

const[firsttouch,setFirsttouch]=useState(false)



const forsidebar=()=>{
  setSidebar(!sidebar)
  setRightpart(!rightpart)

}
const fortouch=()=>{
if(!firsttouch){
setFirsttouch(true)
forsidebar()
}
}

  return (
    <>
      <div className="overall_bg">
      <div className="welcome_sidebar">
          <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVfSSomXMR2zdeyGqoinRRKv-Yyp5ZibU3w&usqp=CAU"} />
          <div className="display_bar">
            <h5>Order Online Now</h5>
          </div>

          </div>
        <div className={sidebar?"welcome_content":"welcome_content_off"}>
         

            <div className="welcome_content_one">
              <img src={""}/>

              <div className="title">
                <h3 className="the">The</h3>
                <h1 className="on">FOOD!</h1>
                <h3 className="kitchen_club">Truck</h3>
              </div>
              <div className="content">
              <h2 className="oldnew">Old & New</h2>
              <h5 className="dishes">DISHES</h5>
              <p>
                we are specialist making old and new foods,
                spices. we serve with our love .<br />
                
              </p>
            </div>
          
          </div>

          <div className="welcome_content_two">
            <div className="image1">
              <img className="vectorone" src={"https://img.freepik.com/premium-vector/food-truck-logo-vector_48762-95.jpg?w=2000"} />
            </div>
          
          </div>
        </div>

       <div className={rightpart?"right_part":"right_part_off"}>
<div className="swipe">
<div className="swipe_btn" onClick={forsidebar}><p><FaArrowRight/></p></div>

</div>
<div className="for_outlets" onClick={fortouch}>


<Outlet/>
  
  </div>
  <Allmodal/>

       </div>
        </div>
    </>
  );
}

export default Welcome;