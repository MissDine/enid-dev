import React from 'react'

function About() {
  return (
    <div className='col-sm-12' style={{backgroundColor:"#EAF6F6",height:"200px",textAlign:"center"}} id="about">
        <h1 style={{fontSize:"1rem",fontWeight:"600",color:"#FF0063"}}>About Me</h1>
        <p style={{fontSize:"1rem",marginLeft:"5vw",marginRight:"5vw"}}>Enid is an enthusiastic, self-motivated and skilled full-stack developer who enjoys designing and developingsolutions that satisfy the needs of the customer. She also enjoys learning new technologies, tools and methodologies that enable her to develop more efficiently.</p>
        <button style={{backgroundColor:"#FF0063",border:"solid 0px",height:"5vh",width:"7vw",color:"#FFFFFF",borderRadius:"30px",textAlign:"center",marginLeft:"4vw"}}>View CV</button>
    </div>
  )
}

export default About