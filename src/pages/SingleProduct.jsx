import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../context/productContext";
import PageNavigation from "../components/PageNavigation";
import { Container } from "../styles/Container";
import ProductImages from "../components/ProductImages";
import FormatPrice from "../helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Rating from "../components/Rating";
import AddToCart from "../components/AddToCart";

const API = "https://e-shop-api-steel.vercel.app/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  // console.log(singleProduct); // TESTED ✅

  const { id } = useParams();
  // console.log(id); // TESTED ✅

  const {
    _id,
    name,
    brand,
    price,
    description,
    category,
    featured,
    shipping,
    url,
    rating,
    productImages,
    specifications,
    features,
  } = singleProduct;

  // console.log(name); // TESTED ✅

  useEffect(() => {
    getSingleProduct(`${API}?_id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading...</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          {/* Product Images */}
          <div className="product-images">
            <ProductImages productImages={productImages} />
          </div>

          {/* Product Data */}
          <div className="product-data">
            <h2>{name}</h2>
            <div className="product-data-info">
              <p>
                ID: <span>{_id}</span>
              </p>
              <p>
                Category: <span>{category}</span>
              </p>
              <p>
                Brand: <span>{brand}</span>
              </p>
              <p>
                Available: <span>In Stock</span>
              </p>
            </div>

            <Rating rating={rating} />

            <p className="product-data-price">
              MRP:&nbsp;
              <del>
                <FormatPrice price={price + 50000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the day: <FormatPrice price={price} />
            </p>

            <div className="product-features">
              {features?.map((feature) => (
                <div key={features.indexOf(feature)}>
                  <IoMdCheckmarkCircleOutline className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>eShop Delivered</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>

            <div className="product-specifications-data">
              <div className="specifications-row grid grid-two-column">
                <p>Processor: <span>{specifications?.processor}</span></p>
                <p>CPU: <span>{specifications?.cpu}</span></p>
              </div>
              <div className="specifications-row grid grid-two-column">
                <p>GPU: <span>{specifications?.gpu}</span></p>
                <p>RAM: <span>{specifications?.ram}</span></p>
              </div>
              <div className="specifications-row grid grid-two-column">
                <p>Storage: <span>{specifications?.storage}</span></p>
                <p>Display: <span>{specifications?.display}</span></p>
              </div>
            </div>
            <hr />
            <AddToCart singleProduct={singleProduct} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.bg};
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: ${({ theme }) => theme.colors.bg};
          color: ${({ theme }) => theme.colors.btn};
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }

    .product-features {
      display: flex;
      gap: 1rem;
      font-size: 1.5rem;

      div {
        display: flex;
        /* flex-direction: column; */
        gap: 1rem;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.bg};
        padding: 0.5rem;
        border-radius: 5px;

        .feature-icon {
          font-size: 3rem;
          color: ${({ theme }) => theme.colors.btn};
        }

        span {
          font-weight: lighter;
        }
      }
    }

    .product-data-info {
      width: 100%;
      display: flex;
      /* flex-direction: column; */
      gap: 1rem;
      align-items: center;
      justify-content: space-between;

      p {
        padding: 0.5rem;
        border: 1px solid ${({ theme }) => theme.colors.bg};
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: lighter;
      }

      span {
        /* color: ${({ theme }) => theme.colors.helper}; */
        font-weight: 500;
      }
    }

    .product-specifications-data {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: ${({ theme }) => theme.colors.bg};
      padding: 0.5rem 2rem;
      border-radius: 5px;

      .specifications-row {
        /* display: flex;
        align-items: center;
        justify-content: flex-start; */
        /* gap: 5rem; */

        p {
          font-size: 1.5rem;
          font-weight: lighter;

          span {
            font-weight: 500;
          }
        }
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid ${({ theme }) => theme.colors.helper};
      /* color: red; */
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
