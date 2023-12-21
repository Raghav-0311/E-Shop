import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartQuantityToggle = ({ quantity, setQuantityDecrement, setQuantityIncrement }) => {
  return (
    <div className='cart-button'>
      <div className="quantity-toggle">
        <button onClick={() => setQuantityDecrement()}>
            <FaMinus />
        </button>
        <div className="quantity-style">{quantity}</div>
        <button onClick={() => setQuantityIncrement()}>
            <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default CartQuantityToggle
