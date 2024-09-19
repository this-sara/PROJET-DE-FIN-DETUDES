// import React from 'react'
import { useEffect, useState } from 'react'
import './Order.css'
import axios from "axios";
import {toast} from "react-toastify"
import {assets} from "../../assets/assets"
function Order({url}){
  const [orders,setOrders]=useState([]);
  const fetchAllOrders=async()=>{
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data);
    }else{
      toast.error("Error")
    }
  }
  const statusHandler=async(event,orderId)=>{
    const response=await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      fetchAllOrders();
    }
  }
  useEffect(()=>{
    fetchAllOrders();
  },[])
  return (
    <div className='order add'>
      <h3>Order Page</h3>   
      <div className="order-list">
        {orders.filter(order => order.payment).map((order, index) =>(
          <div key={index} className='order-item' >
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-planner'>
                {order.items.map((item,index)=>{
                  if (index===order.items.length-1) {
                    return item.name+" X "+item.quantity
                }else{
                    return item.name+" X "+item.quantity+",  "
                }
                })}
              </p>
              <p className="order-item-name">
               {order.address.firstName+" "+order.address.lastName} 
               <div className='order-item-address'>
                <p>{order.address.street+","}</p>
                <p>{order.address.city+","}</p>
               </div>
               <p className='order-item-phone'>{order.address.phone}</p></p>
               </div>
               <p>Item : {order.items.length}</p>
               <p>{order.amount}Dhs</p>
               <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                <option value="in Process">in Process</option>
                <option value="out for delivery">out for delivery</option>
                <option value="Delivered">Delivered</option>
               </select>
          </div>
        ))}
        {/* {data.filter(order => order.payment).map((order, index) =>{
                return(
                    <div key={index} className="my-orders-order">
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if (index===order.items.length-1) {
                                return item.name+" X "+item.quantity
                            }else{
                                return item.name+" X "+item.quantity+",  "
                            }
                        })}</p>
                        <p>{order.amount}.00.Dhs</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                        <button>Track Order</button>
                    </div>orders.map((order,index)
                )

            })} */}
      </div>
    </div>
  )
}

export default Order
