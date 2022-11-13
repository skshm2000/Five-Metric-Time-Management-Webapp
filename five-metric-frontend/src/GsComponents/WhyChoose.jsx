import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./WhyChoose.css"

const WhyChoose = () => {
  let nav = useNavigate()
  return (
    <>
    <h1 className='why_choose'>Why choose TMetric?</h1>
    <div className='choose'>
    <div className='metric_details'>
        <img src="https://tmetric.com/media/zrvmvbl3/icon-straightforward.svg" alt="" />
        <h1>The most straightforward time tracking app</h1>
      </div>
      <div className='metric_details'>
        <img src="https://tmetric.com/media/opdfdo3l/icon-platforms.svg" alt="" />
        <h1>Available on all platforms: macOS, Windows, Linux, iOS, and Android</h1>
      </div>
      <div className='metric_details'>
        <img src="https://tmetric.com/media/igkmpmix/icon-freetrial.svg" alt="" />
        <h1>Free plan with basic time tracking for a team up to 5</h1>
      </div>
      <div className='metric_details'>
        <img src="https://tmetric.com/media/htxfmpoe/icon-reasonableprice.svg" alt="" />
        <h1>Reasonable price makes it affordable for anyone</h1>
      </div>
      <div className='metric_details'>
        <img src="https://tmetric.com/media/0uyowzzu/icon-multilang.svg" alt="" />
        <h1>Multilanguage solution</h1>
      </div>
    </div>
      <div className='make_time'>
        <h1>Make time work for you!</h1>
        <Link to="#" >
        <button onClick={()=>nav("/signup")}>Start Free Trial</button>
        </Link>
        <h3>Powered by  A software vendor with 20 years of experience.</h3>
      </div>
    </>
  )
}

export default WhyChoose
