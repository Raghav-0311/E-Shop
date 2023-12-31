import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import FormatPrice from "../helpers/FormatPrice";
import { Button } from "../styles/Button.js";

const FilterSection = () => {
  const {
    filters: { text, category, price, minPrice, maxPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // Get the Unique Data of Each Field
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    // console.log(newVal); // TESTED ✅
    return (newVal = ["All", ...new Set(newVal)]);
    // console.log(newVal); // TESTED ✅
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  const brandOnlyData = getUniqueData(all_products, "brand");

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
                className={curElem === category ? "active" : ""}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Brand</h3>
        <form action="#">
          <select
            name="brand"
            id="brand"
            className="filter-company--select"
            onChange={updateFilterValue}
          >
            {brandOnlyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="brand">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
      border: 1px solid #767676;
      border-radius: 5px;
      box-shadow: none;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: transparent;
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #767676;
    text-transform: capitalize;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #f31260;
    /* color: ${({ theme }) => theme.colors.bg}; */
    color: #f2eafa;
  }

  input[type="range"] {
    height: 32px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    border: none;
    outline: none;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 0px #000000;
    background: #7828c8;
    border-radius: 5px;
    border: 0px solid #000000;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 0px #000000;
    border: 0px solid #000000;
    height: 22px;
    width: 22px;
    border-radius: 20px;
    background: #7828c8;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7.5px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #7828c8;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 0px #000000;
    background: #7828c8;
    border-radius: 5px;
    border: 0px solid #000000;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 0px #000000;
    border: 0px solid #000000;
    height: 25px;
    width: 25px;
    border-radius: 20px;
    background: #7828c8;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #7828c8;
    border: 0px solid #000000;
    border-radius: 10px;
    box-shadow: 1px 1px 0px #000000;
  }
  input[type="range"]::-ms-fill-upper {
    background: #7828c8;
    border: 0px solid #000000;
    border-radius: 10px;
    box-shadow: 1px 1px 0px #000000;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 0px #000000;
    border: 0px solid #000000;
    height: 25px;
    width: 25px;
    border-radius: 20px;
    background: #7828c8;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #7828c8;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #7828c8;
  }
`;

export default FilterSection;
