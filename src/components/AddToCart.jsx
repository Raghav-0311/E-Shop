import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartQuantityToggle from "./CartQuantityToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ singleProduct }) => {
  const { addToCart } = useCartContext();
  const { _id, colors } = singleProduct;
  const firstColor = colors ? colors[0] : "";

  const [color, setColor] = useState(firstColor);
  const [quantity, setQuantity] = useState(1);
  const stock = 5; // stock value must be present in database

  const setQuantityDecrement = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setQuantityIncrement = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors?.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* Add to Cart */}
      <CartQuantityToggle
        quantity={quantity}
        setQuantityDecrement={setQuantityDecrement}
        setQuantityIncrement={setQuantityIncrement}
      />

      <NavLink to="/cart" onClick={() => addToCart(_id, color, quantity, singleProduct)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.9;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
    /* border: 1px solid #9353d3 */
  }

  .checkStyle {
    font-size: 1.2rem;
    /* color: ${({ theme }) => theme.colors.bg}; */
    color: #9353d3;
    /* box-shadow: 2px 2px 5px #000 inset; */
  }

  .quantity-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    .quantity-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
