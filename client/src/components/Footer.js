import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { NavLink as Link } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo>
          <Logo>
            W<BsStopwatch />
            TCHME
          </Logo>
        </FooterLogo>

        <FooterMenu>
          <FooterMenuTitle>Quick links</FooterMenuTitle>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/shop">Shop</NavLink>

          <NavLink to="/about">About</NavLink>
        </FooterMenu>

        <SocialMedia>
          <a href="https://github.com/kabdulkad">
            <BsGithub className="icon" />
          </a>
          <a href="https://github.com/iasonmilas">
            <BsGithub className="icon" />
          </a>
          <a href="https://github.com/Aymen-Gherdaine">
            <BsGithub className="icon" />
          </a>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

// Footer style
const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: hsl(210deg, 30%, 8%);
  height: 180px;
  display: flex;
  align-items: center;
`;

const FooterLogo = styled.div`
  flex: 0.3;
  padding-left: 40px;
`;

const Logo = styled.h1`
  color: #fffffa;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

const FooterMenu = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: 0.2s ease-in-out;

  :hover {
    color: rgb(175, 169, 170);
  }
`;
const FooterMenuTitle = styled.h2`
  color: white;
`;
const SocialMedia = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 40px;
  gap: 1rem;

  .icon {
    color: #000;
    opacity: 1;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    background: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 5px;
  }

  .icon:hover {
    opacity: 0.3;
  }
`;
export default Footer;
