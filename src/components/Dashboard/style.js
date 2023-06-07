import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    gap: 20px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    @media screen and (max-width: 990px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;
        transform: none;
        left: 0;
        bottom: 90px;
    }
`;

export const Card = styled.div`
    padding: 32px 22px 12px 22px;
    background-color: #383838;
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-radius: 12px;
    width: 250px;
    @media screen and (max-width: 990px) {
        width: 70%;
        gap: 80px;
    }
`;

export const ValueAmount = styled.span`
    font-size: 28px;
    color: #fff;
    @media screen and (max-width: 990px) {
        font-size: 34px;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TypeOf = styled.span`
    font-size: 18px;
    font-style: italic;
    color: rgb(255 255 255 / 70%);
  
    @media screen and (max-width: 990px) {
        font-size: 26px;
        
    }
`;

export const TypeOfSymbol = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    width: 26px;
    height: 26px;
    border-radius: 50%;
    @media screen and (max-width: 990px) {
        width: 36px;
        height: 36px;
    }
`;
