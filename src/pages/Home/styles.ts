import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--primary-dark);
`;

export const Search = styled.div`
  width: 100%;
  padding: 20px;

  display: grid;
  grid-template-columns: 2fr 0.2fr;

  .search-section {
    > input {
      display: flex;
      height: var(--input-height);
      width: 100%;
      padding-left: 40px;

      background-color: var(--primary);
      color: var(--text-color);

      border-radius: 5px;
      border: none;
      outline: none;
    }
  }
  .action-section {
    max-width: 130px;
    margin-left: 10px;

    > input {
      position: relative;
      float: right;
      width: 130px;
    }
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 110px;
  left: 30px;
  width: 16px;
  height: 16px;
  fill: var(--text-color);
`;
