import styled from "styled-components";
import { CurrentShopContext } from "./CurrentShopContext.js";
import { useState, useContext } from "react";

//Initial Input fields are empty
const initialInputFields = {
  name: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  "card-name": "",
  cc: "",
  "exp-month": "",
  "exp-year": "",
  cvv: "",
};
//Importing what we need from the currentshopcontext/Making a state for the list of input fields
const Checkout = () => {
  const [inputFields, setInputFields] = useState(initialInputFields);
  const { cart, ResetCartHandler, itemsPrice, tax, shippingPrice, totalPrice } =
    useContext(CurrentShopContext);
//Making sure the 
  const handleSubmit = () => {
    let validInput = true;
    for (const key in inputFields) {
      if (inputFields[key].trim().length === 0) {
        window.alert("Missing fields.");
        validInput = false;
        break;
      }
    }
    //Making sure the input fields are not empty
    if (validInput) {
      if (!inputFields["email"].includes("@")) {
        window.alert("Invalid email.");
        validInput = false;
      } else if (!/^[0-9]+$/.test(inputFields["cc"])) {
        window.alert("Invalid card number.");
        validInput = false;
      } else if (
        !/^[0-9]+$/.test(inputFields["exp-month"]) ||
        inputFields["exp-month"].length !== 2
      ) {
        window.alert("Invalid expiration month.");
        validInput = false;
      } else if (
        !/^[0-9]+$/.test(inputFields["exp-year"]) ||
        inputFields["exp-year"].length !== 4
      ) {
        window.alert("Invalid expiration year.");
        validInput = false;
      } else if (
        !/^[0-9]+$/.test(inputFields["cvv"]) ||
        !(inputFields["cvv"].length === 3 || inputFields["cvv"].length === 4)
      ) {
        window.alert("Invalid CVV.");
        validInput = false;
      } else {
        // then input is valid

        // 1) for each item in cart, reduce stock in db
        for (const item of cart) {
          console.log(item);
          fetch(`/ecommerce/item/${item._id}`, {
            method: "PATCH",
          })
            .then((response) => response.json())
            .catch((err) => console.log(err, "there has been an error"));
        }

        // 2) reset cart using handler in CurrentShopContext
        ResetCartHandler();

        window.alert("Items bought succesfully");
        window.location = "./";
      }
    }
  };
  //modifying field in list
  const handleFieldChange = (index, newValue) => {
    const copy = { ...inputFields };
    copy[index] = newValue;
    setInputFields(copy);
  };

  return (
    <CheckoutBox>
      <div class="container">
        <InputBox>
          <div class="forms">
            <div class="client-info">
              <h2>Shipping Adress</h2>
              <form>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  value={inputFields["name"]}
                ></input>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email adress"
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                  value={inputFields["email"]}
                ></input>
                <input
                  type="text"
                  id="address"
                  placeholder="Your adress"
                  onChange={(e) => handleFieldChange("address", e.target.value)}
                  value={inputFields["address"]}
                ></input>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  onChange={(e) => handleFieldChange("city", e.target.value)}
                  value={inputFields["city"]}
                ></input>
                <input
                  type="text"
                  id="state"
                  placeholder="Province/State"
                  onChange={(e) => handleFieldChange("state", e.target.value)}
                  value={inputFields["state"]}
                ></input>
                <input
                  type="text"
                  id="zip"
                  placeholder="Postal/Zip code"
                  onChange={(e) => handleFieldChange("zip", e.target.value)}
                  value={inputFields["zip"]}
                ></input>
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  onChange={(e) => handleFieldChange("country", e.target.value)}
                  value={inputFields["country"]}
                ></input>
              </form>
            </div>
            <div class="payment">
              <h2>Payment</h2>
              <form>
                <input
                  type="text"
                  id="card-name"
                  placeholder="Full Name"
                  onChange={(e) =>
                    handleFieldChange("card-name", e.target.value)
                  }
                  value={inputFields["card-name"]}
                ></input>
                <input
                  type="text"
                  id="cc"
                  placeholder="Credit-Card Number"
                  onChange={(e) => handleFieldChange("cc", e.target.value)}
                  value={inputFields["cc"]}
                ></input>
                <input
                  type="text"
                  id="exp-month"
                  placeholder="Exp Month"
                  onChange={(e) =>
                    handleFieldChange("exp-month", e.target.value)
                  }
                  value={inputFields["exp-month"]}
                ></input>
                <input
                  type="text"
                  id="exp-year"
                  placeholder="Exp Year"
                  onChange={(e) =>
                    handleFieldChange("exp-year", e.target.value)
                  }
                  value={inputFields["exp-year"]}
                ></input>
                <input
                  type="text"
                  id="cvv"
                  placeholder="CVV"
                  onChange={(e) => handleFieldChange("cvv", e.target.value)}
                  value={inputFields["cvv"]}
                ></input>
              </form>
            </div>
          </div>

          <button class="submit" onClick={handleSubmit}>
            Submit
          </button>
        </InputBox>

        <div class="cart-info">
          <CartTotal>
            <p>Items Price: ${itemsPrice.toFixed(2)}</p>
            <p>Tax Price: ${tax.toFixed(2)}</p>
            <p>Shipping Price: ${shippingPrice}</p>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </CartTotal>
        </div>
      </div>
    </CheckoutBox>
  );
};

const InputBox = styled.div`
  padding: 30px;
  display: flex;
  gap: 1.5rem;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
const CartTotal = styled.div`
  position: relative;
  margin: 0 0 0 50px;
  padding: 30px;
  display: flex;
  gap: 1.5rem;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  align-items: flex-start;
  flex-direction: column;
`;

const CheckoutBox = styled.div`
  .forms {
    display: flex;
    flex-direction: row;
  }
  .container {
    display: flex;
    flex-direction: row;
    margin: 10% auto;
    width: 50%;
  }

  .client-info {
    display: flex;
    flex-direction: column;
  }

  .payment {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 200px;
    margin-top: 10px;
    margin-bottom: 5px;
    height: 25px;
    margin-right: 15px;
  }

  button {
    width: 150px;
    height: 30px;
    background: hsl(210deg, 30%, 8%);
    color: #fff;
    margin: auto;
    transition: all 0.5s ease-in;
    cursor: pointer;
    border-radius: 25px;
  }
`;
export default Checkout;
