import styled from 'styled-components';

const primaryColor = '#11998e';
const secondaryColor = '#38ef7d';

export const BannerContainer = styled.div`
    background: linear-gradient(to right, ${primaryColor}, ${secondaryColor});
    height: 25vh;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    color: #fff;
    font-size: 26px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-style: italic;
`;
