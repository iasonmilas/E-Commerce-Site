import styled from "styled-components";
import montre from "../assets/montre.jpg";
import { GiOnTarget } from "react-icons/gi";
import { GiJourney } from "react-icons/gi";
import { RiHandHeartFill } from "react-icons/ri";

const About = () => {
  return (
    <MainDiv>
      <div className="body">
        <h1>ABOUT US</h1>
        <img alt="watch banner" src={montre} />
      </div>

      <div className="contentbox">
        <div className="box">
          <p className="title">OUR STORY</p>
          <GiJourney className="icons" size={150} />
          <p className="content">
            Watch me is a Canadian based company in which it's roots originated
            in the heart of Montreal, Quebec. Our journey started with one
            important aspect: Making fashionable watches acessible without
            having to break the bank.
          </p>
        </div>

        <div className="box">
          <p className="title">OUR MISSION</p>
          <GiOnTarget className="icons" size={150} />
          <p className="content">
            We strive to be one of the world's leading producers and providers
            of fashion watches.We also believe in using our platform to reach
            our customers globally and offer exclusive services and one in a
            life time shopping experience.
          </p>
        </div>

        <div className="box">
          <p className="title">OUR VALUES</p>
          <RiHandHeartFill className="icons" size={150} />
          <p className="content">
            {" "}
            At Watch me, we pride ourselves with making sure our customers comes
            first by ensuring that they being heard and understood. That is why
            our core values revolve around delivering high quality products that
            we know our customers will be proud to use not only on speacial
            occasions but also on a daily basis.
          </p>
        </div>
      </div>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  padding-bottom: 220px;
  .content {
    font-size: 25px;
    text-align: center;
    padding: 0 5px;
    max-height: 500px;
    width: 90%;
  }

  .icons {
    margin: 35px;
  }
  .title {
    font-style: italic;
    font-size: 30px;
    text-align: center;
    width: 39.8vh;
    color: white;

    background-color: black;
  }
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 40vh;
    border: 1px solid black;
    height: 600px;
    position: relative;
  }
  .contentbox {
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
    color: white;
    font-size: 45px;
    position: absolute;
    top: 150px;
    left: 1000px;
    z-index: 1000;
  }

  img {
    width: 100%;
    height: 400px;
    position: sticky;
  }

  .body {
    position: relative;
  }
`;

export default About;
