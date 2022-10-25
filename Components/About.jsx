import React from 'react'

function About() {
  return (
    <div className='col-sm-12' style={{backgroundColor:"#EAF6F6",height:"300px",textAlign:"center"}} id="about">
        <h1 style={{fontSize:"1rem",fontWeight:"600",color:"#FF0063"}}>About Me</h1>
        <p style={{fontSize:"1rem",marginLeft:"15vw",marginRight:"15vw"}}>Enid is an enthusiastic, self-motivated and skilled full-stack developer who enjoys designing and developingsolutions that satisfy the needs of the customer. She also enjoys learning new technologies, tools and methodologies that enable her to develop more efficiently.</p>
        <button style={{marginLeft:"2vw"}}><a href="#https://enid-cv.vercel.app/">View CV</a></button>
    </div>
  )
}

export default About