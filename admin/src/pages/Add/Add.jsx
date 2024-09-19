// import React from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
import {  useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';

function Add({url}) {
  // const url= "http://localhost:4001";
  const[image,setImage]=useState(false);
  const[data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"Bloc Notes",
  })
  const onChangeHandle=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("category",data.category)
    formData.append("price",Number(data.price))
    formData.append("image",image)
    const response= await axios.post(`${url}/api/planner/add`,formData)
    if (response.data.success) {
      setData({
        name:"",
        description:"",
        price:"",
        category:"Bloc Notes",
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
   
  }
  // useEffect(()=>{
  //   console.log(data);
  // },[data])
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Uplaod Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandle} value={data.name} type="text" name="name" placeholder='Type here'/>
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandle} value={data.description} name="description" rows="6" placeholder='write content here' required></textarea>
        </div>
        <div className='add-category-price'>
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="category" onChange={onChangeHandle} >
              <option value="Daily Planner">Daily Planner</option>
              <option value="Weekly Planner">Weekly Planner</option>
              <option value="Routines">Routines</option>
              <option value="Planners Religieux">Planners Religieux</option>
              <option value="Bloc Notes">Bloc Notes</option>
              <option value="Planners Spécialisés">Planners Spécialisés</option>
              <option value="Family Box">Family Box</option>
              <option value="Accessoires">Accessoires</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandle} value={data.price} type="Number" name='price' placeholder='80Dhs'/>
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}
export default Add
