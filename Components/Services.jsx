import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ui from "../images/Prototyping process-amico.png"
import Image from "next/image"
import webdevelopment from "../images/Static assets-cuate.png"
import webdesign from "../images/Group 5.png"

function Services() {
  return (
    <div className='col-sm-12' style={{backgroundColor:"#FFFFFF"}} id="services">
        <h1>My Services</h1>
        <div className="row">
            <div className="col-md-4">
            <Card style={{ width: '18rem',height:"250px" }}>
      <Image src={ui} alt="" />
    </Card>
    <p>Web</p>
            </div>
            <div className="col-md-4">
            <Card style={{ width: '18rem' ,height:"250px" }}>
      <Image src={webdesign} alt="" />
    </Card>
    <p>Web</p>
            </div>
            <div className="col-md-4">
            <Card style={{ width: '18rem',height:"250px"  }}>
      <Image src={webdevelopment} alt="" />
    </Card>
    <p>Web</p>
            </div>
        </div>
    </div>
  )
}

export default Services