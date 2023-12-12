import React from 'react';
import styled from 'styled-components';
import Image1 from '../assets/brandings/8.png';
import Image2 from '../assets/brandings/9.png';
import Image3 from '../assets/brandings/10.png';
import Image4 from '../assets/brandings/11.png';
import Image5 from '../assets/brandings/12.png';

const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
            <div className="slide">
                <img src={Image1} alt="Trusted-Brands" />
            </div>

            <div className="slide">
                <img src={Image2} alt="Trusted-Brands" />
            </div>

            <div className="slide">
                <img src={Image3} alt="Trusted-Brands" />
            </div>

            <div className="slide">
                <img src={Image4} alt="Trusted-Brands" />
            </div>

            <div className="slide">
                <img src={Image5} alt="Trusted-Brands" />
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted
