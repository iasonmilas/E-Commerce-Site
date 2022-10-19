import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid } from "react-loader-spinner";
import Search from "./Search";
import Item from "./Item";
import { useParams } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [start, setStart] = useState(1);
  const [limit, setLimit] = useState(10);

  // getting the value of the search and put it in the search state
  const searchProduct = (event) => {
    setSearch(event.target.value);
  };

  const { category } = useParams();

  useEffect(() => {
    const ClickLoad = () => {
      fetch(
        `/ecommerce/items/category/${category}/page?start=${start}&limit=${limit}`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data.data))
        .catch((err) => console.log(err, "there has been an error"));
    };
    ClickLoad();
  }, [start, limit]);

  return (
    <ShopContainer>
      <Search
        setSearch={setSearch}
        search={search}
        searchProduct={searchProduct}
      />

      <CategoryTitle>
        <h1>{category} Products</h1>
      </CategoryTitle>
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

const CategoryTitle = styled.div`
  height: 90px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  h1 {
    font-size: 40px;
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

export default Category;
