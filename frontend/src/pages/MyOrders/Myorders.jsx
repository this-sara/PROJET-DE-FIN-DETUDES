// import React from 'react'
import { useContext, useEffect, useState } from 'react'
import './Myorders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'

function Myorders() {
    const {url,token}=useContext(StoreContext)
    const [data,setData]=useState([])
    const fetchOrders=async()=> {
       const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
       setData(response.data.data);
       console.log(response.data.data);
    }
    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])  
  return (
    <div className='my-orders'>
        <h2>My orders</h2>
        <div className="container">
            {data.filter(order => order.payment).map((order, index) =>{
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
                        <p>{order.amount}.00 Dhs</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                        <button>Track Order</button>
                    </div>
                )

            })}
        </div>
    </div>

    // <div className='my-orders'>
    //         <h2>My orders</h2>
    //         <div className="container">
    //             {data.filter(order => order.payment).map((order, index) => (
    //                 <div key={index} className="my-orders-order">
    //                     <img src={assets.parcel_icon} alt="Parcel Icon" />
    //                     <p>
    //                         {order.items.map((item, itemIndex) => (
    //                             <span key={itemIndex}>
    //                                 {item.name} X {item.quantity}
    //                                 {itemIndex < order.items.length - 1 && ', '}
    //                             </span>
    //                         ))}
    //                     </p>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
  )
}

export default Myorders
