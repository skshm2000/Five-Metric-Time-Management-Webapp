import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div className='service'>
      <h1>Integrate time tracker tool with 50+ <br/>popular services</h1>
      <p>5Metric integrates with dozens of services, which lets you measure progress and activity in any tool you use.</p>
      <div className='explore'>
        <button className='trial'>Start Free Trial</button>
        <p>Explore All Integrations</p>
      </div>
      <div className='sites'>
      <img src={gsuite} alt="" />
      <img src={msoffice} alt="" />
      <img src={googlekeep} alt="keep" />
      <img src={github} alt="" />
      <img src={excel}alt="" />
      <img src={asana} alt="" />
      <img src={jira} alt="" />
      <img src={gitlab} alt="" />
      <img src={docs}alt="" />
      <img src={trello}alt="" />
      <img src={redmine} alt="" />
      <img src={zendesk} alt="" />
      <img src={wrike} alt="" />

      </div>
    </div>
  )
}

export default Services
