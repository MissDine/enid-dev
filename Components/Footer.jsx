import React from 'react'
import Image from "next/image"
import Copyright from "../images/icons8-copyright-all-rights-reserved-24 (1).png"

function Footer() {
  return (
    <div className='col-sm-12'>
        <div className="col-sm-12" style={{justifyContent:"center", alignItems:"center",display:"flex"}}>
        <Image src={Copyright} alt="" />
            <p>|All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer