import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button.js';
import HeroImage from '../assets/hero1.png';

const Hero = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='grid grid-two-column'>
            {/* Hero Data */}
            <div className='hero-section-data'>
                <p className='intro-data'>Welcome to</p>
                <h1>E - Shop</h1>
                <p>
                where style meets simplicity, and every click brings you closer to your desires. Unleash the power of seamless shopping, where trends are just a heartbeat away. Discover a world of endless possibilities, curated just for you. Elevate your online shopping experience with E-Shop – where elegance and efficiency converge. Your journey to extraordinary starts here!
                </p>
                <NavLink to="/products">
                    <Button>Shop Now</Button>
                </NavLink>
            </div>
            {/* Hero Image */}
            <div className='hero-section-image'>
                <figure>
                    <img src={HeroImage} alt="E-Shop Hero Image" className='img-style' />
                </figure>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 80%;
      background-color: #E4D4F4;
      border-radius: 5px;
      position: absolute;
      left: 0%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default Hero
