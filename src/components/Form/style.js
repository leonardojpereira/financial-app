import styled from 'styled-components';


const primaryColor = '#11998e';
const secondaryColor = '#38ef7d';
const grayColor = '#9b9b9b';

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 20px;
  width: 100%;
  
`;

export const FieldGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 250px;
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${grayColor};
`;

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${grayColor};
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  color: #000;
  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown {
    + ${FormLabel} {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, ${primaryColor}, ${secondaryColor});
    border-image-slice: 1;

    + ${FormLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${primaryColor};
      font-weight: 700;
    }
  }
`;

export const SelectType = styled.select`
`;

export const OptionType = styled.option``;

export const Button = styled.button`
  padding: 8px 40px;
  background-color: #0064ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
`;

export const SalesTable = styled.table`
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
  border: 1px solid #ddd;
  text-align: center;
  font-size: 16px;
  &:last-child {
    border-bottom-left-radius: 8px;
  }
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
