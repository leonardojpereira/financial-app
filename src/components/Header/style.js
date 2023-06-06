import styled from 'styled-components';

const primaryColor = '#11998e';
const secondaryColor = '#38ef7d';

export const HeaderContainer = styled.header`
    background: linear-gradient(to right, ${primaryColor}, ${secondaryColor});
    height: 40vh;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 42px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const Subtitle = styled.p`
    color: #fff;
    font-size: 26px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-style: italic;
`;