import styled, { css } from "styled-components";
import { FaUserEdit, FaFileDownload } from "react-icons/fa";

export const Container = styled.ul`
  background-color: var(--primary);
  height: 40px;
  display: grid;
  border-radius: 5px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 3fr 1fr;
  margin: 15px 40px;

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
  }
`;

const iconsCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--text-color);
  flex-shrink: 0;

  &:hover {
    cursor: pointer;
    fill: var(--secondary);
  }
`;

export const EditIcon = styled(FaUserEdit)`
  ${iconsCSS}
`;
export const DownloadIcon = styled(FaFileDownload)`
  ${iconsCSS}
`;
