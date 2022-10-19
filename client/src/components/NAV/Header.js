import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import { NavLink as Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentShopContext } from "../CurrentShopContext";
import { BsStopwatch } from "react-icons/bs";

const Header = () => {
  const { count } = useContext(CurrentShopContext);
  return (
    <Nav>
      <NavLogo>
        <NavLink to="/">
          <Logo>
            W<BsStopwatch />
            TCHME
          </Logo>
        </NavLink>
      </NavLogo>

      <NavMenu>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/shop">Shop</NavLink>

        <NavLink to="/about">About</NavLink>
      </NavMenu>

      <CartDiv>
        <NavLink to="/cart">
          <BsCart className="icon" />
          <ItemCount>{count}</ItemCount>
          <p>Cart</p>
        </NavLink>
      </CartDiv>
    </Nav>
  );
};

// Header style
const Nav = styled.div`
  position: sticky;
  top: 0;
  background-color: hsl(210deg, 30%, 8%);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
`;

const NavLogo = styled.div`
  flex: 0.3;
  padding-left: 40px;

  @media screen and (max-width: 700px) {
    flex: 0.5;
  }
`;
const Logo = styled.h1`
  color: #fffffa;

  @media screen and (max-width: 700px) {
    font-size: 27px;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 19px;
  transition: 0.2s ease-in-out;
  opacity: 1;

  :hover {
    color: rgb(175, 169, 170);
    opacity: 0.3;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.4;
  height: 70px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const CartDiv = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 70px;
  }

  .icon {
    opacity: 1;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .icon:hover {
    opacity: 0.3;
  }
`;

const ItemCount = styled.span`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: white;
  color: black;
  position: absolute;
  top: 16px;
  right: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Header;
