
import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './PlannerItem.css';
import { StoreContext } from '../../context/StoreContext';

import Dialog from '@mui/material/Dialog';
import ProductDetails from './ProductDetails';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

function PlannerItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='planner-item'>
      <div className="planner-item-img-container">
        <img className='planner-item-image' src={`${url}/images/${image}`} alt={name} onClick={handleClickOpen} />
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
        ) : (
          <div className='planner-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
          </div>
        )}
      </div>
      <div className="planner-item-info">
        <div className="planner-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="planner-item-desc">{description}</p>
        <p className="planner-item-price">{price} Dhs</p>
      </div>
      <Dialog
       sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 700 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "white", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetails name={name} id={id}  price={price} description={description} image={image} />
      </Dialog>
    </div>
  );
}

export default PlannerItem;

