import React from 'react'
import Image from "next/image"
import image from "../images/Group 7 (6).png"

function Experience() {
  return (
    <div className='col-sm-12' id="experience">
        <h1 style={{fontSize:"1rem",fontWeight:"600",color:"#FF0063",textAlign:"center"}}>Experience</h1>
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <div className="image">
                    <Image src={image} alt="" />
                    <p style={{fontSize:"1rem"}}>Years Experience</p>
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="image">
                    <Image src={image} alt="" />
                    <p>Years Experience</p>
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="image">
                    <Image src={image} alt="" />
                    <p>Years Experience</p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Experience