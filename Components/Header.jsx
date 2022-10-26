import React from "react";
import Typed from "react-typed";
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image"
import eni from "../images/Missdine.jpeg"

function Header() {
  return (
    <div className="col-sm-12" style={{backgroundColor:"#66BFBF"}} id="header">
      <div className="row" style={{justifyContent:"center",alignItems:"center"}}>
        <div className="col-md-6" style={{height:"400px", width:"300px", marginTop:"11vh"}}>
          <Image src={eni} alt="" style={{height:"10px", width:"10px",borderRadius:"50%"}}/>
        </div>
        <div className="col-md-6" style={{marginTop:"-2vh", marginLeft:"3vw"}}>
          <h1 style={{fontSize:"2rem"}}>My name is Enid Nyatichi,</h1>
          <h1 style={{fontSize:"2rem"}}>And I am a  
          <Typed className="typ"
          strings={[
            " Fullstack Software Developer"
            // "We value our students"
          ]}
          typeSpeed={150}
          backSpeed={250}
          loop
          style={{color:"#FF0063"}}
        />
          </h1>
          <button style={{backgroundColor:"#FF0063",border:"solid 0px",height:"5vh",width:"10vw",color:"#FFFFFF",borderRadius:"30px",textAlign:"center"}}><p>Hire Me!</p></button>
        </div>
      </div>
    </div>
  )
}

export default Header;