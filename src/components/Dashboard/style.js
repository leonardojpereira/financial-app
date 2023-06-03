import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    gap: 20px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
`;

export const Card = styled.div`
    padding: 22px 22px 12px 22px;
    background-color: #383838;
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-radius: 12px;
    width: 200px;

`;

export const ValueAmount = styled.span`
    font-size: 32px;
    color: #fff;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TypeOf = styled.span`
    font-size: 18px;
    color: #fff;
`;

export const TypeOfSymbol = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    width: 26px;
    height: 26px;
    border-radius: 50%;
`;
