import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  max-width: 1260px;
  border-collapse: collapse;
  table-layout: fixed;
  margin: 22px auto;
`;

export const TableBody = styled.tbody`
  @media (max-width: 830px) {
    display: block;
    width: 100%;
  }
`;

export const Tr = styled.tr`

  @media (max-width: 830px) {
    display: block;
    width: 100%;
    margin-bottom: 22px;
  }
`;

export const GridItem = styled.td`
  padding: 12px 15px;
  text-align: center;
  font-size: 16px;
  
  @media (max-width: 830px) {
    display: block;
    width: 100%;
    padding-left: 50%;
    text-align: right;
    position: relative;
    &::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
  }
`;

export const IconDelete = styled.span`
  color: rgb(190, 67, 67);
  cursor: pointer;
  font-size: 14px;
`;
