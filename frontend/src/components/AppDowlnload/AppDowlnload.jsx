// import React from 'react'
import { assets } from '../../assets/assets'
import './AppDowlnload.css'
function AppDowlnload() {
  return (
    <div className='app-download' id='app-download'>
        <p>for better expêrience Download <br />PlanBliss App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDowlnload
