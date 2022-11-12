import React from 'react'
import { Link } from 'react-router-dom'
import "./Control.css"
const Control = () => {
  return (
    <div className='control'>
      <div className='working_time'>
        <h1>Take effective control of working time</h1>
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
      <div className='activity_img'>
        <img src="https://tmetric.com/media/kssowlxe/img-activity-cases.svg" alt="myactivity" />
      </div>
    </div>
  )
}

export default Control





