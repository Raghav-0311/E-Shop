import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ singleProduct }) => {
    const { colors } = singleProduct;
    const firstColor = colors ? colors[0] : "";
    
    const [color, setColor] = useState(firstColor);

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

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
