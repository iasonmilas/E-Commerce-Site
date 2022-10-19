import { useState } from "react";
import { createContext } from "react";

export const CurrentShopContext = createContext();

const CurrentShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(cart.length);

  // Function that update the cart
  const AddToCartHandler = (_id, item) => {
    //create a copy of our cart
    const cartCopy = [...cart];

    // checking if item is already in cart
    const checkIfItemIsInCart = cartCopy.find(
      (product) => product._id === Number(_id)
    );

    // if item exist
    if (checkIfItemIsInCart) {
      // we increment the quantity of the item
      checkIfItemIsInCart.quantity += 1;
    } else {
      // we push the item to the cart
      cartCopy.push(item);
    }

    // update our state
    setCart(cartCopy);
    setCount(cartCopy.length);
  };

  // Function that remove item from cart
  const RemoveFromCartHandler = (id) => {
    // create a copy of our cart
    let copyOfCart = [...cart];

    // filter copyOfCart to remove the item
    copyOfCart = copyOfCart.filter((item) => item._id !== Number(id));

    // update state
    setCart(copyOfCart);
    setCount(copyOfCart.length);
  };

  // Function to calculate the total items price
  const itemsPrice = cart?.reduce(
    (sum, current) =>
      sum + parseFloat(current.price.slice(1)) * current.quantity,
    0
  );

  const ResetCartHandler = async () => {
    setCart([]);
    setCount(0);
  };

  // calculate price after taxes
  const tax = itemsPrice * 0.15;

  // shipping price
  const shippingPrice = itemsPrice > 50 ? 0 : 7;

  // Total Price
  const totalPrice = itemsPrice + tax + shippingPrice;

  return (
    <CurrentShopContext.Provider
      value={{
        cart,
        setCart,
        count,
        setCount,
        RemoveFromCartHandler,
        AddToCartHandler,
        ResetCartHandler,
        itemsPrice,
        tax,
        shippingPrice,
        totalPrice,
      }}
    >
      {children}
    </CurrentShopContext.Provider>
  );
};

export default CurrentShopProvider;
