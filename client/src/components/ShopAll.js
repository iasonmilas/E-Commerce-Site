import { useEffect, useState } from "react";
import Item from "./Item";
import styled from "styled-components";
import watchBg from "../assets/watchBg.jpg";
import Search from "./Search";
import { Grid } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

const ProductsDetails = () => {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [start, setStart] = useState(1);
  const [limit, setLimit] = useState(10);

  // getting the value of the search and put it in the search state
  const searchProduct = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const ClickLoad = () => {
      fetch(`/ecommerce/items/page?start=${start}&limit=${limit}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.data))
        .catch((err) => console.log(err, "there has been an error"));
    };
    ClickLoad();
  }, [start, limit]);

  // function to scroll to top each time we change the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <ShopContainer>
      <Search
        setSearch={setSearch}
        search={search}
        searchProduct={searchProduct}
      />

      <HeroImg>
        <img src={watchBg} alt="watch hero" />
      </HeroImg>
      <Main>
        <FilterBar>
          <FilterMenu>
            <NavLink to="/shop/category/Medical" onClick={scrollToTop}>
              <Button>Medical</Button>
            </NavLink>
            <NavLink to="/shop/category/Fitness" onClick={scrollToTop}>
              <Button>Fitness</Button>
            </NavLink>
            <NavLink to="/shop/category/Lifestyle" onClick={scrollToTop}>
              <Button>Lifestyle</Button>
            </NavLink>
            <NavLink to="/shop/category/Entertainment" onClick={scrollToTop}>
              <Button>Entertainment</Button>
            </NavLink>
          </FilterMenu>
        </FilterBar>

        <AllItemDiv>
          {products ? (
            products
              ?.filter((product) => {
                if (search === "") {
                  return product;
                } else if (
                  product?.name.toLowerCase().includes(search.toLowerCase()) ||
                  product?.price.includes(search)
                ) {
                  return product;
                }
              })
              .map((item) => {
                return <Item item={item} key={item._id} />;
              })
          ) : (
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
          )}
          <ScrollToTop>
            <ScrollToTopBtn
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Top
            </ScrollToTopBtn>
          </ScrollToTop>
        </AllItemDiv>
      </Main>
      <LoadMoreContainer>
        <LoadMore
          onClick={() => {
            setStart((start) => start + 10);
            setLimit((limit) => limit + 10);
          }}
        >
          Click Here to See More!
        </LoadMore>
      </LoadMoreContainer>
    </ShopContainer>
  );
};

// Shop All style
const ShopContainer = styled.div`
  position: relative;
  padding-bottom: 220px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterBar = styled.div`
  padding: 15px 0 0 0;
  width: 70%;
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
`;

const FilterMenu = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 700px) {
    gap: 7px;
  }
`;
const Button = styled.button`
  background-color: transparent;
  color: hsl(210deg, 30%, 8%);
  border: 1px solid hsl(210deg, 30%, 8%);
  padding: 8px 15px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.5s ease-in;

  :hover {
    background-color: hsl(210deg, 30%, 8%);
    color: #fff;
  }
`;

const AllItemDiv = styled.div`
  position: relative;
  max-width: 1400px;
  width: 92%;
  min-height: 100vh;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

const HeroImg = styled.div`
  height: 390px;
  position: relative;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const ScrollToTop = styled.div`
  position: fixed;
  right: 7px;
  top: 94vh;
  z-index: 9999;
  width: fit-content;
`;
const ScrollToTopBtn = styled.button`
  background: hsl(210deg, 30%, 8%);
  color: #fff;
  padding: 15px;
  border-radius: 50%;
  border: 1px solid #fff;
  font-size: 15px;
  cursor: pointer;
`;

const LoadMoreContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const LoadMore = styled.button`
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
    border: 1px solid #000;
  }
`;
export default ProductsDetails;
