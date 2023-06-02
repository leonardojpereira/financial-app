import { DashboardContainer, Card, ValueAmount, Footer, TypeOf, TypeOfSymbol } from './style';
import { BsFillPlusCircleFill } from 'react-icons/bs'; 

export default function Dashboard() {
    return(
        <DashboardContainer>
            <Card>
                <ValueAmount>R$ 1.500,00</ValueAmount>
                <Footer>
                    <TypeOf>Entrada</TypeOf>
                    <TypeOfSymbol><BsFillPlusCircleFill/></TypeOfSymbol>
                </Footer>
            </Card>

            <Card>
                <ValueAmount>R$ 500,00</ValueAmount>
                <Footer>
                    <TypeOf>Saída</TypeOf>
                    <TypeOfSymbol><BsFillPlusCircleFill/></TypeOfSymbol>
                </Footer>
            </Card>

            <Card>
                <ValueAmount>R$ 1.000,00</ValueAmount>
                <Footer>
                    <TypeOf>Total</TypeOf>
                    <TypeOfSymbol><BsFillPlusCircleFill/></TypeOfSymbol>
                </Footer>
            </Card>
        </DashboardContainer>
    );
}    