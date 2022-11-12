import "./Bottom.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div className='bottom'>
    <h1>We use cookies on this website. By using this site you agree that we may store and access cookies on your device as explained in our <Link to="#">Cookies Policy.</Link> </h1>
     <button>Got It</button>
    </div>
    
  )
}

export default Bottom
