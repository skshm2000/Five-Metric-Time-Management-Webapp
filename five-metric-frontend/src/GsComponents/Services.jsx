import React from 'react'
import "./Services.css"
import gsuite from "../GsAssets/gsuite.png"
import msoffice from "../GsAssets/msoffice.png"
import googlekeep from "../GsAssets/googlekeep.png"
import wrike from "../GsAssets/wrike.png"
import zendesk from "../GsAssets/zendesk.png"
import redmine from "../GsAssets/redmine.png"
import trello from "../GsAssets/trello.png"
import docs from "../GsAssets/docs.png"
import github from "../GsAssets/github.png"
import excel from "../GsAssets/excel.png"
import asana from "../GsAssets/asana.png"
import jira from "../GsAssets/jira.png"
import gitlab from "../GsAssets/gitlab.png"
const Services = () => {
  return (
    <div className='service'>
      <h1>Integrate time tracker tool with 50+ <br/>popular services</h1>
      <p>5Metric integrates with dozens of services, which lets you measure progress and activity in any tool you use.</p>
      <div className='explore'>
        <button className='trials'>Start Free Trial</button>
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
