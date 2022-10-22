import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import web from "../images/balazs-ketyi-_x335IZXxfc-unsplash 1.png"
import Image from "next/image"

function Projects() {
  return (
    <div className='col-sm-12' style={{backgroundColor:"#EAF6F6"}} id="projects">
    <h1>My Services</h1>
    <div className="row">
            <div className="col-md-4 col-sm-12">
            <Card style={{ width: '18rem' }}>
      <Image src={web} alt="" />
      <Card.Body>
        <Card.Title>description</Card.Title>
        <Card.Text>lorem ipsum</Card.Text>
        <button><a href="#project">View Project</a></button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-4 col-sm-12">
            <Card style={{ width: '18rem' }}>
      <Image src={web} alt="" />
      <Card.Body>
      <Card.Title>description</Card.Title>
        <Card.Text>lorem ipsum</Card.Text>
        <button><a href="#project">View Project</a></button>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-4 col-sm-12">
            <Card style={{ width: '18rem' }}>
      <Image src={web} alt="" />
      <Card.Body>
      <Card.Title>description</Card.Title>
        <Card.Text>lorem ipsum</Card.Text>
        <button><a href="#project">View Project</a></button>
      </Card.Body>
    </Card>
        </div>
    </div>
</div>
  )
}

export default Projects
