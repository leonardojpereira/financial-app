import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    gap: 20px;
`;

export const InputContainer = styled.div`
margin-bottom: 20px;
margin-top: ${props => props.marginTop}
`;

export const Label = styled.label`
display: ${props => props.display};

`;

export const Input = styled.input`
    
`;

export const Button = styled.button`
    padding: 8px 40px;
    background-color: #0064ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
`;