import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button.js';
import HeroImage from '../assets/about1.png';

const AboutHero = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='grid grid-two-column'>
            {/* Hero Data */}
            <div className='hero-section-data'>
                <h1>About Us</h1>
                <p>
                At E-Shop, we transcend the conventional boundaries of online retail. Born out of a passion for delivering unparalleled shopping experiences, we are more than just a virtual storefront – we are a destination where innovation meets inspiration.
                </p>
                <p>
                Our story begins with a commitment to redefine the way you shop, blending cutting-edge technology with a curated selection of the finest products. We believe in more than just transactions; we believe in building connections, empowering your lifestyle, and curating a space where your individuality is celebrated.
                </p>
                <p>
                With a team dedicated to excellence and a vision rooted in customer satisfaction, E-Shop is your go-to platform for not just purchasing, but for experiencing the art of shopping. Join us on this exciting journey as we transform the ordinary into the extraordinary, one click at a time.
                </p>
                <p>
                At E-Shop, it's not just about products; it's about a lifestyle, a community, and a commitment to making your every interaction with us memorable. Welcome to a world where your desires are our inspiration – welcome to E-Shop.
                </p>
                <NavLink to="/contact">
                    <Button>Contact Us</Button>
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
      width: 100%;
      height: 80%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: #E4D4F4;
    }
  }
`;

export default AboutHero
