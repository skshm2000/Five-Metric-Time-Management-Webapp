import { Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaChartBar, FaClock, FaFileInvoice, FaFolder, FaPowerOff, FaTshirt } from 'react-icons/fa'
import "./Features.css"
import mytime from "../GsAssets/mytime.png"

import editproject from "../GsAssets/editproject.svg"
import editteam from "../GsAssets/editteam.svg"
import invoice from "../GsAssets/invoice.svg"
import report from "../GsAssets/report.svg"
import editpolicy from "../GsAssets/editpolicy.svg"
import { Link } from 'react-router-dom'

const Features = () => {
    const [open1,setOpen1]=useState(false)
    const [open2,setOpen2]=useState(false)
    const [open3,setOpen3]=useState(false)
    const [open4,setOpen4]=useState(false)
    const [open5,setOpen5]=useState(false)
    const [open6,setOpen6]=useState(false)
    const [text1 ,setText1] = useState()
    const [image1 ,setImage1] = useState()
    const [text2 ,setText2] = useState()
    const [image2 ,setImage2] = useState()
    const [text3 ,setText3] = useState()
    const [image3 ,setImage3] = useState()
    const [text4 ,setText4] = useState()
    const [image4 ,setImage4] = useState()
    const [text5,setText5] = useState()
    const [image5 ,setImage5] = useState()
    const [text6,setText6] = useState()
    const [image6,setImage6] = useState()
    
   const ontoggle1 = () =>{
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
    setOpen5(false)
    setOpen6(false)
    setOpen1(true)

    setText1("Capture every task you work on. Take control over time intervals by simple time tracking.") 
       setImage1(mytime)
   }
   const ontoggle2 = () =>{
    setOpen2(true)
    setOpen3(false)
    setOpen4(false)
    setOpen5(false)
    setOpen6(false)
    setOpen1(false)
    setText2("Create projects, set rates and budgets. Keep tracking of hours spent on tasks and see the project progress at a glance, collaborate easily, keep deadlines and prevent over budgeting") 
       setImage2(editproject)
   }
   const ontoggle3 = () =>{
    setOpen2(false)
    setOpen3(true)
    setOpen4(false)
    setOpen5(false)
    setOpen6(false)
    setOpen1(false)
    setText3("Measure productivity and activity level of your team, assign tasks in a click, monitor workflow and distribute the workload. Syncs your teams’ work and improves efficiency.") 
    setImage3(editteam)
   }
   const ontoggle4 = () =>{
    setOpen2(false)
    setOpen3(false)
    setOpen4(true)
    setOpen5(false)
    setOpen6(false)
    setOpen1(false)
    setText4("With the accurate billing system, set billable rates and easily create an invoice based on tracked time and expenses, and get paid promptly.") 
       setImage4(invoice)
   }
   const ontoggle5 = () =>{
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
    setOpen5(true)
    setOpen6(false)
    setOpen1(false)
    setText5("With a flexible reporting system, you have a choice to get insights into your projects and team productivity, analyze incomes and keep costs under control") 
       setImage5(report)
   }
   const ontoggle6 = () =>{
    setOpen2(false)
    setOpen3(false)
    setOpen4(false)
    setOpen5(false)
    setOpen6(true)
    setOpen1(false)
    setText6("Add a PTO policy for your organization, simply ask for days off, control missed workdays, manage balances and teams attendance hassle-free") 
       setImage6(editpolicy)
   }

   
    

    return (
        <div className='tracking'>
        <h1 className='heading'>Best time tracking features for your business</h1>
      <div className='trackingfeatures'>
      
      <div className='features' >
      <Button onClick={() =>{
            ontoggle1()
        }} >
        <h1>
                    <FaClock size={30} color="gray" />
                    Time Tracking
                  </h1>
        </Button>
      </div>
      <div className='features' >
        <Button onClick={() =>{
            
            ontoggle2()
        }} >
        <h1>
                    <FaFolder size={30} color="gray" />
                    Project Management
                  </h1>
        </Button>
        </div>
        <div className='features' >
        <Button onClick={() =>{
            
            ontoggle3()
        }} >
        <h1>
                    <FaTshirt size={30} color="gray" />
                    Team Management
                  </h1>
        </Button>
        </div>
        
        <div className='features' >
        <Button onClick={() =>{
            
            ontoggle4()
        }} >
        <h1>
                    <FaFileInvoice size={30} color="gray" />
                    Billing & Invoicing
                  </h1>
        </Button>
        </div>
        
        <div className='features' >
        <Button onClick={() =>{
            
            ontoggle5()
        }} >
        <h1>
                    <FaChartBar size={30} color="gray" />
                    Reporting
                  </h1>
        </Button>
        </div>
        
        <div className='features' >
        <Button onClick={() =>{
            
            ontoggle6()
        }} >
        <h1>
                    <FaPowerOff size={30} color="gray" />
                    Time Off
                  </h1>
        </Button>
        </div>
        </div>
        
       {open1 && 
        <div className='innertext'>
          <h1>{text1} <br /> <Link to=""><span className='learn'>Learn More </span></Link> </h1>

          <img src={image1}alt="" />
        </div>
       }
       {open2 && 
        <div className='innertext'>
          <h1>{text2} <br /> <Link to=""><span className='learn'>Learn More </span></Link></h1>
          <img src={image2}alt="" />
        </div>
       }
       {open3 && 
        <div className='innertext'>
          <h1>{text3} <br /> <Link to=""><span className='learn'>Learn More </span></Link></h1>
          <img src={image3}alt="" />
        </div>
       }
       {open4 && 
        <div className='innertext'>
          <h1>{text4} <br /> <Link to=""><span className='learn'>Learn More </span></Link></h1>
          <img src={image4}alt="" />
        </div>
       }
       {open5 && 
        <div className='innertext'>
          <h1>{text5} <br /> <Link to=""><span className='learn'>Learn More </span></Link></h1>
          <img src={image5}alt="" />
        </div>
       }
       {open6 && 
        <div className='innertext'>
          <h1>{text6} <br /> <Link to=""><span className='learn'>Learn More </span></Link></h1>
          <img src={image6}alt="" />
        </div>
       }
       </div>
      
   
  )
}


export default Features;
