// import React from 'react'
import { useContext,  useEffect,  useState, } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function PlaceOrder() {
  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext);
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    Zipcode:"",
    country:"",
    phone:"",
  })
  const onChangeHandler=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setData(data=>({...data,[name]:value}))
  }
  const placeOrder=async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData= {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response= await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if (response.data.success) {
      const{session_url}=response.data;
      window.location.replace(session_url);
    }else{
      alert("Error")
    }
  }
  const navigate =useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/card')
    }else if(getTotalCartAmount()===0){
      navigate('/card')
    }
  },[token])
  return (
    <div>
      <form onSubmit={placeOrder} className='place-order' >
        <div className="place-order-left">
          <p className="title" >Delivery information</p>
          <div className="multi-fields">
            <input required onChange={onChangeHandler} value={data.firstName} name='firstName' type="text" placeholder='First name'/>
            <input required onChange={onChangeHandler} value={data.lastName} name='lastName' type="text" placeholder='Last name'/>
          </div>
          <input required onChange={onChangeHandler} value={data.email} name='email' type="email" placeholder='Email Address'/>
          <input required onChange={onChangeHandler} value={data.street} name='street' type="text" placeholder='Street'/>
          <div className="multi-fields">
            <input required onChange={onChangeHandler} value={data.city} name='city' type='text'placeholder="City"></input>
            <input required onChange={onChangeHandler} value={data.state} name='state' type='text'placeholder="State"></input>
          </div>
          <div className="multi-fields">
            <input required onChange={onChangeHandler} value={data.Zipcode} name='Zipcode' type="text" placeholder='Zip code' />
            <input required onChange={onChangeHandler} value={data.country} name='country' type="text" placeholder='Country'/>
          </div>
          <input required onChange={onChangeHandler} value={data.phone} name='phone' type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>{getTotalCartAmount()}Dhs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>{getTotalCartAmount()===0?0:2}Dhs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>total</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} Dhs</p>
            </div>
          </div>
          <button type='submit' >Proced to Payment</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
