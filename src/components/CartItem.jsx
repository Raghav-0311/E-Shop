import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import CartQuantityToggle from "./CartQuantityToggle";
import { FaTrash } from "react-icons/fa";

const CartItem = ({ _id, name, image, color, price, quantity }) => {
  const setQuantityDecrement = () => {
    // quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setQuantityIncrement = () => {
    // quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* PRICE */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* QUANTITY */}
      {/* <div> */}
        <CartQuantityToggle
          quantity={quantity}
          setQuantityDecrement={setQuantityDecrement}
          setQuantityIncrement={setQuantityIncrement}
        />
      {/* </div> */}

      {/* SUBTOTAL */}
      <div className="cart-hide">
        <p>
            <FormatPrice price={price * quantity} />
        </p>
      </div>

      {/* REMOVE */}
      <div>
        <FaTrash className="remove_icon" />
      </div>
    </div>
  );
};

export default CartItem;
