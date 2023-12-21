import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ productImages }) => {
  let imagesArray = productImages ? Object.values(productImages) : [];
  // console.log(imagesArray); // TESTED ✅
  
  const [mainImage, setMainImage] = useState(imagesArray[0]);

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {
          imagesArray?.map((curImg, index) => {
            return (
              <figure key={index}>
                <img src={curImg} alt={index} className='box-image--style' onClick={() => setMainImage(curImg)} />
              </figure>
            )
          })
        }
      </div>

      {/* SECOND COLUMN - BIG IMAGE */}
      <div className="main-screen">
        <img src={mainImage} alt="Product Image" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.bg};
      /* box-shadow: ${({ theme }) => theme.colors.shadow}; */
      border: 1px solid ${({ theme }) => theme.colors.bg};
      border-radius: 5px;
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      background-color: ${({ theme }) => theme.colors.bg};
      /* box-shadow: ${({ theme }) => theme.colors.shadow}; */
      border: 1px solid ${({ theme }) => theme.colors.bg};
      border-radius: 5px;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default ProductImages
