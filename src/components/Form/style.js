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
  margin-bottom: 32px;
  @media screen and (max-width: 990px) {
   margin-top: 0;
   flex-direction: column;
}
`;

export const FieldGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 250px;
  @media screen and (max-width: 990px) {
    width: 75%;
 }
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
  font-family: inherit;
  width: 150px;
  border: 0;
  border-bottom: 2px solid ${grayColor};
  outline: 0;
  font-size: 1.2rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  color: #000;
  margin-top: 24px;
  @media screen and (max-width: 990px) {
    width: 75%;
 }
`;

export const OptionType = styled.option`
`;

export const Button = styled.button`
  padding: 8px 40px;
  background: linear-gradient(to right, ${primaryColor}, ${secondaryColor});
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  margin-top: 28px;
  font-weight: bold;
  transition:  0.4s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 990px) {
    width: 75%;
    padding: 12px 40px;
    margin-top: 0;
 }
`;

export const ErrorMessage = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: red;
position: relative;
`;
