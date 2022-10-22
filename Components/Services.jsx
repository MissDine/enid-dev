import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import web from "../images/Group 5.png"
import Image from "next/image"

function Services() {
  return (
    <div className='col-sm-12' style={{backgroundColor:"#FFFFFF"}}>
        <h1>My Services</h1>
        <div className="row">
            <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
      <Image src={web} alt="" />
    </Card>
    <p>Web</p>
            </div>
        </div>
    </div>
  )
}

export default Services