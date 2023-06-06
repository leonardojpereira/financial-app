import styled from "styled-components";

export const TableHeaderContainer = styled.thead`
  width: 100%;
  @media (max-width: 830px) {
    display: none;
  }
`;

export const GridItemTitle = styled.th`
  padding: 12px 15px;
  text-align: center;
  font-size: 16px;
  background: rgb(57 54 52);
  color: #ffffff;
  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;