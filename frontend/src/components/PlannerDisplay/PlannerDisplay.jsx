// import React from 'react'
import { useContext } from 'react'
import './PlannerDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import PlannerItem from '../PlannerItem/PlannerItem'
import Aos from 'aos'
function PlannerDisplay({category}) {
    const {planner_list}=useContext(StoreContext)
  return (
    <div className='planner-display' id='planner-display'>
        <h2>Être organisé est un style de vie</h2>
        <div className="planner-display-list" data-aos="zoom-in">
            {planner_list.map((item,index)=>{
              if (category==="All" || category===item.category){
                return <PlannerItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
              }  
            })}
        </div>
    </div>
  )
}
export default PlannerDisplay
