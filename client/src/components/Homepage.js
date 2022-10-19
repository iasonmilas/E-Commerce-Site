import styled from "styled-components";
import { BsStopwatch } from "react-icons/bs";
import wristwatches from "../assets/wristwatches.jpg";
import hero from "../assets/hero.jpg";
import { NavLink as Link } from "react-router-dom";

const Homepage = () => {
  // function to scroll to top each time we change the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <StyledHomePage>
      <Hero>
        <img src={hero} alt="hero" />
        <h1>LUXURY LIKE NO OTHER</h1>
        <h2>
          This is W<BsStopwatch />
          TCHME
        </h2>
        <HeroButton>
          <NavLink to="/shop" onClick={scrollToTop}>
            <Button>Shop Now</Button>
          </NavLink>
        </HeroButton>
      </Hero>
      <BestSeller>
        <CategoryContaner>
          <NavLink to="/shop/category/Medical" onClick={scrollToTop}>
            <img src="https://media.discordapp.net/attachments/1009841491360882808/1011311748999032952/unknown.png" />
            <h1>Medical</h1>
          </NavLink>
        </CategoryContaner>
        <CategoryContaner>
          <NavLink to="/shop/category/Fitness" onClick={scrollToTop}>
            <img src="https://media.discordapp.net/attachments/1009841491360882808/1011311749376516126/unknown.png" />
            <h1>Fitness</h1>
          </NavLink>
        </CategoryContaner>
        <CategoryContaner>
          <NavLink to="/shop/category/Lifestyle" onClick={scrollToTop}>
            <img src="https://media.discordapp.net/attachments/1009841491360882808/1011311750156648489/unknown.png" />
            <h1>Lifestyle</h1>
          </NavLink>
        </CategoryContaner>
        <CategoryContaner>
          <NavLink to="/shop/category/Entertainment" onClick={scrollToTop}>
            <img src="https://media.discordapp.net/attachments/1009841491360882808/1011311750647402558/unknown.png" />
            <h1>Entertainment</h1>
          </NavLink>
        </CategoryContaner>
      </BestSeller>
      <Testimonials>
        <h1>OUR CUSTOMERS ARE RAVING!</h1>
        <div className="reviews">
          <div className="reviewbox">
            <p className="name">Sasha M.</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text review">5 out of 5 stars</p>
            <p className="text">
              I am in LOVEEE with my recent purchase! The quality is unmatched!
            </p>
          </div>

          <div className="reviewbox">
            <p className="name">Max R.</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text review">5 out of 5 stars</p>
            <p className="text">
              I got the Casio G Shock as treat for my birthday! I was able to
              spoil myself without having to spend hundreds!
            </p>
          </div>

          <div className="reviewbox">
            <p className="name">Alejandro J.</p>
            <p className="stars">⭐⭐⭐⭐</p>
            <p className="text review">4 out of 5 stars</p>
            <p className="text">
              This my 3rd purchase! I can't get enough of their amazing customer
              service! Fast Shipping as well!
            </p>
          </div>
        </div>
      </Testimonials>
      <SecondHero>
        <img src={wristwatches} alt="watch" />
        <h1>Discover our latest collections</h1>
        <NavLink to="/shop" className="heroLink" onClick={scrollToTop}>
          <SecondHeroButton>DISCOVER MORE</SecondHeroButton>
        </NavLink>
      </SecondHero>
    </StyledHomePage>
  );
};

// Home Page Style
const Testimonials = styled.div`
  padding: 30px;
  width: 80%;
  margin: 10px auto;

  .stars {
    padding-bottom: 15px;
  }
  .reviewbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
  .text {
    font-size: 20px;
    text-align: center;
  }
  .text.review {
    font-weight: bold;
  }
  .name {
    color: black;
    font-size: 35px;
    font-weight: bold;
    font-style: italic;
  }
  .reviews {
    position: relative;
    max-width: 1600px;
    width: 92%;
    min-height: 600px;
    margin: 25px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
  }

  h1 {
    font-size: 50px;
    text-align: center;
    width: 100%;
    margin: 0;
    padding-bottom: 20px;
    background-color: white;
    color: black;

    @media screen and (max-width: 700px) {
      font-size: 35px;
    }
  }
`;

const StyledHomePage = styled.div`
  min-height: 100vh;
`;
const Hero = styled.div`
  height: 500px;
  position: relative;

  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    top: 70px;
    left: 40px;
    color: #fff;
    font-size: 45px;
    width: 55%;

    @media screen and (max-width: 700px) {
      font-size: 30px;
    }
  }

  h2 {
    position: absolute;
    top: 200px;
    left: 40px;
    color: #fff;
    font-size: 40px;

    @media screen and (max-width: 700px) {
      font-size: 25px;
    }
  }
`;

const HeroButton = styled.div`
  position: absolute;
  left: 40px;
  top: 300px;
`;
const NavLink = styled(Link)``;

const Button = styled.button`
  background-color: hsl(210deg, 30%, 8%);
  color: #fff;
  padding: 15px 60px;
  border-radius: 25px;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.5s ease-in;

  :hover {
    background-color: #fff;
    color: hsl(210deg, 30%, 8%);
  }
`;

const BestSeller = styled.div`
  position: relative;
  max-width: 1600px;
  width: 92%;
  min-height: 600px;
  margin: 25px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CategoryContaner = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  img {
    width: 270px;
    height: 270px;
    border-radius: 10px;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 30px;
  }
`;

const SecondHero = styled.div`
  height: 500px;
  margin: 20px 0;
  position: relative;
  margin-bottom: 180px;
  img {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -55%);
    width: 100%;
    margin: 20px auto;
    text-align: center;
    color: #fff;
    font-size: 50px;

    @media screen and (max-width: 700px) {
      font-size: 35px;
    }
  }

  .heroLink {
    display: flex;
    width: 90%;
    height: 100px;
    align-items: flex-end;
    justify-content: center;
    text-decoration: none;
  }
`;

const SecondHeroButton = styled.button`
  background-color: hsl(210deg, 30%, 8%);
  color: #fff;
  padding: 15px 60px;
  border-radius: 25px;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.5s ease-in;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);

  @media screen and (max-width: 700px) {
    padding: 13px 30px;
  }

  :hover {
    background-color: #fff;
    color: hsl(210deg, 30%, 8%);
  }
`;
export default Homepage;
