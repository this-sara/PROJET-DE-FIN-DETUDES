// import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import Aos from 'aos'
import { useEffect } from 'react';

// import { Prev } from 'react-bootstrap/esm/PageItem'
function ExploreMenu({category,setCategory}) {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // You can adjust the duration as needed
  }, []);
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 data-aos="zoom-in">Explore our planners</h1>
      <p className='explore-menu-text' data-aos="fade-up">The notebooks that we display on our website are original and exclusive produced by us from A to Z. The diaries we produce are characterized by originality, beauty and high quality. The secret of the beauty of these diaries lies in the smallest details, from the exquisite designs to the quality of the paper and the covers.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
           return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item' data-aos="zoom-in">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
           ) 
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
