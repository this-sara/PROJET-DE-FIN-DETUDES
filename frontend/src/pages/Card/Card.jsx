// import React from 'react'
import { useContext } from 'react'
import './Card.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
function Card() {
  const { cartItems, planner_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {planner_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (<>
              <div className="cart-items-title cart-items-item" key={index}>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}Dhs</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}Dhs</p>
                <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
            </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>subtotal</p>
              <p>{getTotalCartAmount()} Dhs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>{getTotalCartAmount()===0?0:2} Dhs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>total</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} Dhs</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proced to checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo code' />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
