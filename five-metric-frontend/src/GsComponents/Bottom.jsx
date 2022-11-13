import "./Bottom.css"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Bottom = () => {
  const [state, changeState ] = useState(false)

  const onClicker = () => {
    changeState(true)
  }

  return (
    <div className='bottom' hidden={state}>
    <h1>We use cookies on this website. By using this site you agree that we may store and access cookies on your device as explained in our <Link to="#">Cookies Policy.</Link> </h1>
     <button onClick={onClicker}>Got It</button>

    </div>
    
  )
}

export default Bottom
