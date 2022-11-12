import React from 'react'
import { Link } from 'react-router-dom'
import "./Control.css"
const Control = () => {
  return (
    <div className='control-p'>
      <div className='working_time'>
        <p className='take'>Take effective control of working time</p>
        <ul>
            <li>
                timekeeping
            </li>
            <li>
            sites and apps monitoring
            </li>
            <li>
            activity tracking
            </li>
            <Link to="#" className='blue'>
            <li>
            screenshots capturing
            </li>
            </Link>
            <li>
            task management
            </li>
            <Link to="#" className='blue'>
            <li>
            50+ integrations
            </li>
            </Link>
            <Link to="#" className='blue'>
            <li>
            work schedule
            </li>
            </Link>
        </ul>
        <button className='trial'>Start Free Trial</button>
      </div>
        <img src="https://tmetric.com/media/kssowlxe/img-activity-cases.svg" alt="myactivity" className='activity_img'/>
     
    </div>
  )
}

export default Control





