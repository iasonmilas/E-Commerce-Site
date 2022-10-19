import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { CurrentShopContext } from "./CurrentShopContext";
import { useContext } from "react";

const Item = ({ item }) => {
  const { AddToCartHandler } = useContext(CurrentShopContext);

  // Add quantity to item object to be used in the cart component
  const newItem = {
    ...item,
    quantity: 1,
  };
  const { _id } = newItem;

  return (
    <>
      <MainDiv>
        {item && (
          <>
            <NavLink to={`/shop/${item?._id}`}>
              <Img alt="watch" src={item?.imageSrc} />
              <Title>{item?.name.slice(0, 50)}...</Title>
              <Price>C{item?.price}</Price>
            </NavLink>
            {item.numInStock > 0 ? (
              <Button onClick={() => AddToCartHandler(_id, newItem)}>
                ADD TO CART
              </Button>
            ) : (
              <Button disabled>OUT OF STOCK</Button>
            )}
          </>
        )}
      </MainDiv>
    </>
  );
};

// Item Style
const MainDiv = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 380px;
  margin: 9px;
  padding: 7px;
  transition: all 0.5s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const Title = styled.h3`
  color: black;
  text-align: center;
  padding-top: 7px;
`;

const Price = styled.p`
  color: black;
  padding: 10px 0;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const Button = styled.button`
  background: hsl(210deg, 30%, 8%);
  padding: 13px 30px;
  color: #fff;
  width: 100%;
  transition: all 0.5s ease-in;
  cursor: pointer;

  :hover {
    background: #fff;
    color: #000;
  }

  :disabled,
  [disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export default Item;
