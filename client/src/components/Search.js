import styled from "styled-components";

const Search = ({ search, searchProduct }) => {
  return (
    <SearchBar>
      <Input
        type="text"
        placeholder="Search for products.."
        value={search}
        onChange={searchProduct}
      />
    </SearchBar>
  );
};

// Search Bar Style
const SearchBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: hsl(210deg, 30%, 8%);
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px 15px;
  width: 500px;
  border-radius: 25px;
  outline: none;
  border: none;
  font-size: 16px;
  position: relative;

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;
export default Search;
