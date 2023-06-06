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
  width: 150px;
  height: 28px;
  padding: 0 4px;
  margin-top: 36px;
`;

export const OptionType = styled.option`

`;

export const Button = styled.button`
  padding: 8px 40px;
  background: linear-gradient(to right, ${primaryColor}, ${secondaryColor});
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 36px;
  font-weight: bold;
`;

