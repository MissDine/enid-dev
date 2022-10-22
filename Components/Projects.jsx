import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import web from "../images/Group 5.png"
import Image from "next/image"

function Projects() {
  return (
    <div className='col-sm-12' style={{backgroundColor:"#FFFFFF"}}>
    <h1>My Services</h1>
    <div className="row">
        <div className="col-md-4">
        <div className="row">
            <div className="col-md-4 col-sm-12">
            <Card style={{ width: '18rem' }}>
      <Image src={web} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Image src={web} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Image src={web} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default Projects
