import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid } from "react-loader-spinner";
import { CurrentShopContext } from "./CurrentShopContext";
import { useContext } from "react";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { AddToCartHandler } = useContext(CurrentShopContext);

  const { id } = useParams();

  // Add quantity to item object to be used in the cart component
  const newItem = {
    ...product,
    quantity: 1,
  };

  // Function that updtae or edit cart
  const UpdateCartHandler = async () => {};

  useEffect(() => {
    fetch(`/ecommerce/item/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((err) => console.log(err, "there has been an error"));
  }, []);

  return (
    <>
      {product ? (
        <MainDiv>
          <ProductImg>
            <img alt="watch" src={product?.imageSrc} />
          </ProductImg>
          <ProductInfo>
            <Category>{product?.category}</Category>
            <Title>{product?.name}</Title>
            <Stock>
              <span>{product?.numInStock} </span>
              Left in stock
            </Stock>

            <Price>C{product?.price}</Price>
            <Button onClick={() => AddToCartHandler(id, newItem)}>
              ADD TO CART
            </Button>
          </ProductInfo>
        </MainDiv>
      ) : (
        <Spinner>
          <Grid
            height="80"
            width="80"
            color="hsl(210deg, 30%, 8%)"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Spinner>
      )}
    </>
  );
};

//Product Page Style
const MainDiv = styled.div`
  min-height: 100vh;
  display: flex;
  padding-bottom: 220px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const ProductImg = styled.div`
  width: 100%;
  flex: 0.6;
  display: flex;
  margin-top: 60px;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 60%;
    object-fit: cover;
  }

  @media screen and (max-width: 700px) {
    margin-top: 20px;
    flex: 0.4;
  }
`;

const ProductInfo = styled.div`
  flex: 0.4;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media screen and (max-width: 700px) {
    flex: 0.6;
  }
`;

const Title = styled.h2`
  font-size: 27px;
  padding: 0 17px;
`;

const Button = styled.button`
  background: hsl(210deg, 30%, 8%);
  padding: 13px 30px;
  color: #fff;
  margin: 10px 17px;
  width: 90%;
  transition: all 0.5s ease-in;
  cursor: pointer;

  :hover {
    background: #fff;
    color: #000;
  }
`;

const Price = styled.h3`
  font-size: 19px;
  padding: 0 20px;
`;

const Stock = styled.p`
  font-size: 17px;
  padding: 0 20px;

  span {
    font-weight: 700;
  }
`;

const Category = styled.p`
  font-size: 17px;
  padding: 2px 19px;
`;

const Spinner = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default ProductPage;
