// import React from 'react'
import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../components/Header/Header';
import './Home.css'
import PlannerDisplay from '../../components/PlannerDisplay/PlannerDisplay';
import AppDowlnload from '../../components/AppDowlnload/AppDowlnload';
import Test from '../../components/test/test';
import Join from '../../components/joinus/join';
function Home() {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <PlannerDisplay category={category}/>
      <Test/>
      <Join/>
      <AppDowlnload/>
      
    </div>
  )
}

export default Home;