import React,{useState} from 'react'

function Contact() {
  const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const HandleSubmit = (e)=>{
        // console.log("mess");
        e.preventDefault();
        const conta = {name, message,email}
        fetch("http://localhost:9000/messages", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body:JSON.stringify(conta)
        })
        .then(()=>{
            console.log("new message added");
            
        })
    }
  return (
    <div className='col-sm-12' style={{backgroundColor:"#66BFBF"}} id="contact">
      <h1>Contact Me</h1>
      <div className="col-sm-12">
      <form onSubmit={HandleSubmit}>
                <div className="col-sm-12" style={{display:"flex",alignItems:"center"}}>
                <div className="col-md-6 col-sm-12">
                <label>Name</label>
                <input
                    type = "text"
                    required
                    value ={name}
                    onChange= {(e)=>setName(e.target.value)}
                />
                </div>
                <div className="col-md-6 col-sm-12" style={{marginTop:"2vh"}}>
                <label>Email</label>
                <input
                    type = "text"
                    required
                    value ={email}
                    onChange= {(e)=>setEmail(e.target.value)}
                />
                </div>
                </div>
                <div className="col-sm-12" style={{marginTop:"2vh"}}>
                <label>Message</label>
                <textarea 
                required
                value= {message}
                onChange = {(e)=>setMessage(e.target.value)}
                ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
      </div>
    </div>
  )
}

export default Contact