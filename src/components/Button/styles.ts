import styled from "styled-components";

export const Container = styled.input`
  height: var(--input-height);

  background-color: var(--submit-ligth);
  color: var(--text-color);
  border-radius: 5px;
  text-align: center;

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    transform: translate(0px, -1px);
    filter: brightness(95%);
    cursor: pointer;
  }
`;
