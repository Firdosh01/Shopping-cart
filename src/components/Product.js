import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {toast} from 'react-hot-toast'
import {add, remove} from '../redux/Slices/CartSlice'
import  { toast } from 'react-hot-toast';

function Product( {items}) {

  const {cart} = useSelector( (state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(items));
    toast.success('Successfully created!');
    // console.log("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(items.id));
    toast.error("Item removed from Cart")
    // console.log("Item removed from Cart")
  }

  
  return (
    <div>
      <div>
        <p>{items.title}</p>
      </div>

      <div>
        <p>{items.description}</p>
      </div>

      <div>
        <img src={items.image} alt="" />
      </div>

      <div>
        <p>{items.price}</p>
      </div>

      {
        cart.some( (p) => p.id == items.id) ?
        (
          <button onClick={removeFromCart}>
            Remove Item
          </button>
        ) :
        (
          <button onClick={addToCart}>
            Add To Cart
          </button>
        )
      }

    </div>
  )
}

export default Product
