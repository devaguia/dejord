import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 30px;
  background: var(--primary-dark);
`;

export const Search = styled.div`
  width: 100%;
  padding: 20px 40px 0 40px;

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
    margin-left: 10px;
    input {
      font-weight: 600;
      position: relative;
      float: right;
      min-width: 130px;
      width: 130px !important;
    }
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 110px;
  left: 50px;
  width: 16px;
  height: 16px;
  fill: var(--text-color);
`;

export const List = styled.div`
  margin: 15px 25px;
  padding: 10px 20px;

  > ul {
    height: 40px;
    display: grid;
    border-radius: 5px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 3fr 1fr;

    li {
      display: inline-block;
      color: var(--text-color);

      :nth-child(n + 4),
      :nth-child(2) {
        display: none;
      }

      :nth-child(6) {
        display: inline-block;
      }

      @media (min-width: 768px) {
        :nth-child(n) {
          display: inline-block;
        }
      }
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 3fr 1fr 2fr 1fr 1fr;
      margin: 0;
    }
  }
`;
