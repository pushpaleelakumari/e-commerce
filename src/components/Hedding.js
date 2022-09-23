import React from 'react'
import './Hedding.css'

function Hedding(prop) {
  return (
    <div className='hedding'>
    <div className="flower"><img src="Hedding1.PNG" alt="" /></div>
    <div className="heddings"><b>{prop.hedding}</b></div>
    <div className="flower"><img src="Hedding.PNG" alt="" /></div>
    </div>
  )
}

export default Hedding