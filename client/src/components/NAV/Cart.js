import styled from "styled-components";
import { CurrentShopContext } from "../CurrentShopContext";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { NavLink as Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    RemoveFromCartHandler,
    itemsPrice,
    tax,
    shippingPrice,
    totalPrice,
  } = useContext(CurrentShopContext);

  return (
    <CartContainer>
      <>
        {cart.length > 0 ? (
          cart?.map((product) => {
            return (
              <CartProduct key={product._id}>
                <ProductImg src={product.imageSrc} alt="product photo" />
                <ProductInfo>
                  <h3>{product.name}</h3>
                  <p>
                    Price: $
                    {product.quantity > 1
                      ? (
                          parseFloat(product.price.slice(1)) * product.quantity
                        ).toFixed(2)
                      : product.price}
                  </p>
                  <p>Quantity: {Number(product.quantity)}</p>
                </ProductInfo>
                <RemoveItem>
                  <MdDelete
                    onClick={() => {
                      RemoveFromCartHandler(product._id);
                    }}
                  />
                </RemoveItem>
              </CartProduct>
            );
          })
        ) : (
          <EmptyCart>Your Cart Is Empty</EmptyCart>
        )}
      </>
      {cart.length > 0 && (
        <>
          <CartTotal>
            <p>Items Price: ${itemsPrice.toFixed(2)}</p>
            <p>Tax Price: ${tax.toFixed(2)}</p>
            <p>Shipping Price: ${shippingPrice}</p>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </CartTotal>
          <NavLink to="/checkout">
            <ButtonContainer>
              <CheckoutButton>Checkout</CheckoutButton>
            </ButtonContainer>
          </NavLink>
        </>
      )}
    </CartContainer>
  );
};

// cart style
const NavLink = styled(Link)`
  text-decoration: none;
`;
const CartContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 200px;
`;

const CartProduct = styled.div`
  position: relative;
  margin: 20px auto;
  padding: 30px;
  display: flex;
  gap: 1.5rem;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
`;

const ProductImg = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const ProductInfo = styled.div`
  h3 {
    padding-bottom: 9px;
  }

  p {
    padding-bottom: 10px;
  }
`;

const RemoveItem = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80%;
  font-size: 30px;
  padding-bottom: 15px;
  cursor: pointer;
`;
const EmptyCart = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

const CartTotal = styled.div`
  position: relative;
  margin: 20px auto;
  padding: 30px;
  display: flex;
  gap: 1.5rem;
  width: 40%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  align-items: flex-start;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const CheckoutButton = styled.button`
  background: hsl(210deg, 30%, 8%);
  padding: 13px 30px;
  color: #fff;
  margin: 10px 17px;
  width: 40%;
  transition: all 0.5s ease-in;
  cursor: pointer;
  border-radius: 25px;

  :hover {
    background: #fff;
    color: #000;
  }
`;
export default Cart;
