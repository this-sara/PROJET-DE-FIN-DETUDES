import React, { useState } from 'react'
import './test.css'
import AOS from 'aos';
function Test() {
    const test = [
        {
          Image: "hala.jpg",
          reveview:"Thanks to this planner,my daughter began to organize herself, to pray, to give charity and check everything at the end of the day.",
          work: "M. Karim Bouchta",
          name: "Ramadan Planner Kids",
        },
        {
          Image: "hala3.jpg ",
          reveview:"Umrah Planner A real gem. Jazakoum allah khayran.to pray, to give charity and check everything at the end of the day plan more time for yourself. ",
          work: "Mme Sarah Touil",
          name: " Umrah Planner ",
        },
        {
          Image: "hala.jpg",
          reveview:"I absolutely love the selfcare edition of this year’s plannbliss planners.It brings piece and joy and makes you plan more time for yourself.’",
          work: "M. Ahmed El Amrani",
          name: "My Planner Self-care Edition",
        } ]
      

    const [selected,setSelected]=useState(0)
  return (
    <div className='test'>
        <div className="left-test">
            <span></span>
            <span data-aos="fade-right">Why people Love </span>
            <span >PlannBLiss ?</span>
            <span data-aos="fade-right" className='hala'>
                {test[selected].reveview}
            </span>
            <span data-aos="zoom-in">
                <span className='planner'>{test[selected].name}</span>
                {"  "}
                
            </span>
        </div>
        <div className='right-test'>
            <div data-aos="fade-right"></div>
            <div data-aos="fade-left"></div>
            <img src={test[selected].Image} alt="" />
            <div className='arrows'>
                <img onClick={()=> selected===0?setSelected(test.length -1):setSelected((prev)=>prev-1)} src="./images/icons8-left-arrow-100.png" alt="" />
                <img onClick={()=> selected===test.length-1?setSelected(0):setSelected((prev)=>prev+1)} src="./images/icons8-right-arrow-100.png" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Test
